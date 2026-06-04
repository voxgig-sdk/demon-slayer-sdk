<?php
declare(strict_types=1);

// CombatStyle entity test

require_once __DIR__ . '/../demonslayer_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CombatStyleEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = DemonSlayerSDK::test(null, null);
        $ent = $testsdk->CombatStyle(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = combat_style_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "combat_style." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set DEMONSLAYER_TEST_COMBAT_STYLE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $combat_style_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.combat_style")));
        $combat_style_ref01_data = null;
        if (count($combat_style_ref01_data_raw) > 0) {
            $combat_style_ref01_data = Helpers::to_map($combat_style_ref01_data_raw[0][1]);
        }

        // LIST
        $combat_style_ref01_ent = $client->CombatStyle(null);
        $combat_style_ref01_match = [];

        [$combat_style_ref01_list_result, $err] = $combat_style_ref01_ent->list($combat_style_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($combat_style_ref01_list_result);

        // LOAD
        $combat_style_ref01_match_dt0 = [
            "id" => $combat_style_ref01_data["id"],
        ];
        [$combat_style_ref01_data_dt0_loaded, $err] = $combat_style_ref01_ent->load($combat_style_ref01_match_dt0, null);
        $this->assertNull($err);
        $combat_style_ref01_data_dt0_load_result = Helpers::to_map($combat_style_ref01_data_dt0_loaded);
        $this->assertNotNull($combat_style_ref01_data_dt0_load_result);
        $this->assertEquals($combat_style_ref01_data_dt0_load_result["id"], $combat_style_ref01_data["id"]);

    }
}

function combat_style_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/combat_style/CombatStyleTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = DemonSlayerSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["combat_style01", "combat_style02", "combat_style03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("DEMONSLAYER_TEST_COMBAT_STYLE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "DEMONSLAYER_TEST_COMBAT_STYLE_ENTID" => $idmap,
        "DEMONSLAYER_TEST_LIVE" => "FALSE",
        "DEMONSLAYER_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["DEMONSLAYER_TEST_COMBAT_STYLE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["DEMONSLAYER_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new DemonSlayerSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["DEMONSLAYER_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["DEMONSLAYER_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
