package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/demon-slayer-sdk/go"
	"github.com/voxgig-sdk/demon-slayer-sdk/go/core"

	vs "github.com/voxgig-sdk/demon-slayer-sdk/go/utility/struct"
)

func TestCombatStyleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CombatStyle(nil)
		if ent == nil {
			t.Fatal("expected non-nil CombatStyleEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := combat_styleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "combat_style." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set DEMONSLAYER_TEST_COMBAT_STYLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		combatStyleRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.combat_style", setup.data)))
		var combatStyleRef01Data map[string]any
		if len(combatStyleRef01DataRaw) > 0 {
			combatStyleRef01Data = core.ToMapAny(combatStyleRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = combatStyleRef01Data

		// LIST
		combatStyleRef01Ent := client.CombatStyle(nil)
		combatStyleRef01Match := map[string]any{}

		combatStyleRef01ListResult, err := combatStyleRef01Ent.List(combatStyleRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, combatStyleRef01ListOk := combatStyleRef01ListResult.([]any)
		if !combatStyleRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", combatStyleRef01ListResult)
		}

		// LOAD
		combatStyleRef01MatchDt0 := map[string]any{
			"id": combatStyleRef01Data["id"],
		}
		combatStyleRef01DataDt0Loaded, err := combatStyleRef01Ent.Load(combatStyleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		combatStyleRef01DataDt0LoadResult := core.ToMapAny(combatStyleRef01DataDt0Loaded)
		if combatStyleRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if combatStyleRef01DataDt0LoadResult["id"] != combatStyleRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func combat_styleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "combat_style", "CombatStyleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read combat_style test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse combat_style test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"combat_style01", "combat_style02", "combat_style03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("DEMONSLAYER_TEST_COMBAT_STYLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"DEMONSLAYER_TEST_COMBAT_STYLE_ENTID": idmap,
		"DEMONSLAYER_TEST_LIVE":      "FALSE",
		"DEMONSLAYER_TEST_EXPLAIN":   "FALSE",
		"DEMONSLAYER_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["DEMONSLAYER_TEST_COMBAT_STYLE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["DEMONSLAYER_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["DEMONSLAYER_APIKEY"],
			},
			extra,
		})
		client = sdk.NewDemonSlayerSDK(core.ToMapAny(mergedOpts))
	}

	live := env["DEMONSLAYER_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["DEMONSLAYER_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
