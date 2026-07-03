# CombatStyle entity test

require "minitest/autorun"
require "json"
require_relative "../DemonSlayer_sdk"
require_relative "runner"

class CombatStyleEntityTest < Minitest::Test
  def test_create_instance
    testsdk = DemonSlayerSDK.test(nil, nil)
    ent = testsdk.CombatStyle(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = combat_style_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "combat_style." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set DEMONSLAYER_TEST_COMBAT_STYLE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    combat_style_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.combat_style")))
    combat_style_ref01_data = nil
    if combat_style_ref01_data_raw.length > 0
      combat_style_ref01_data = Helpers.to_map(combat_style_ref01_data_raw[0][1])
    end

    # LIST
    combat_style_ref01_ent = client.CombatStyle(nil)
    combat_style_ref01_match = {}

    combat_style_ref01_list_result, err = combat_style_ref01_ent.list(combat_style_ref01_match, nil)
    assert_nil err
    assert combat_style_ref01_list_result.is_a?(Array)

    # LOAD
    combat_style_ref01_match_dt0 = {
      "id" => combat_style_ref01_data["id"],
    }
    combat_style_ref01_data_dt0_loaded, err = combat_style_ref01_ent.load(combat_style_ref01_match_dt0, nil)
    assert_nil err
    combat_style_ref01_data_dt0_load_result = Helpers.to_map(combat_style_ref01_data_dt0_loaded)
    assert !combat_style_ref01_data_dt0_load_result.nil?
    assert_equal combat_style_ref01_data_dt0_load_result["id"], combat_style_ref01_data["id"]

  end
end

def combat_style_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "combat_style", "CombatStyleTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = DemonSlayerSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["combat_style01", "combat_style02", "combat_style03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["DEMONSLAYER_TEST_COMBAT_STYLE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "DEMONSLAYER_TEST_COMBAT_STYLE_ENTID" => idmap,
    "DEMONSLAYER_TEST_LIVE" => "FALSE",
    "DEMONSLAYER_TEST_EXPLAIN" => "FALSE",
    "DEMONSLAYER_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["DEMONSLAYER_TEST_COMBAT_STYLE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["DEMONSLAYER_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["DEMONSLAYER_APIKEY"],
      },
      extra || {},
    ])
    client = DemonSlayerSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["DEMONSLAYER_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["DEMONSLAYER_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
