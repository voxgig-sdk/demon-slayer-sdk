"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CombatStyleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when DEMON_SLAYER_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('DEMON_SLAYER_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.DemonSlayerSDK.test();
        const ent = testsdk.CombatStyle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.DEMON_SLAYER_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'combat_style.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "description", "req": false, "short": "Detailed description of the combat style", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "forms", "req": false, "short": "List of forms or techniques within this combat style", "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the combat style", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "name", "req": false, "short": "Name of the combat style", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "type", "req": false, "short": "Type of combat style (Breathing Technique, Blood Demon Art, etc.)", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "users", "req": false, "short": "Characters who use this combat style", "type": "`$ARRAY`", "index$": 5 }], "id": { "field": "id", "name": "id" }, "name": "combat_style", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "name", "orig": "name", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "type", "orig": "type", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /combat-styles", "json": "{\"operationId\":\"getCombatStyles\",\"parameters\":[{\"description\":\"Filter combat styles by name\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter combat styles by type\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Detailed description of the combat style\",\"type\":\"string\"},\"forms\":{\"description\":\"List of forms or techniques within this combat style\",\"items\":{\"properties\":{\"description\":{\"description\":\"Description of the form\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the form\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the combat style\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the combat style\",\"type\":\"string\"},\"type\":{\"description\":\"Type of combat style (Breathing Technique, Blood Demon Art, etc.)\",\"type\":\"string\"},\"users\":{\"description\":\"Characters who use this combat style\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with combat style data\"},\"400\":{\"description\":\"Bad request\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/combat-styles", "segments": [{ "lit": "combat-styles" }], "select": { "exist": ["name", "type"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /combat-styles/{id}", "json": "{\"operationId\":\"getCombatStyleById\",\"parameters\":[{\"description\":\"Unique identifier of the combat style\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"description\":\"Detailed description of the combat style\",\"type\":\"string\"},\"forms\":{\"description\":\"List of forms or techniques within this combat style\",\"items\":{\"properties\":{\"description\":{\"description\":\"Description of the form\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the form\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the combat style\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the combat style\",\"type\":\"string\"},\"type\":{\"description\":\"Type of combat style (Breathing Technique, Blood Demon Art, etc.)\",\"type\":\"string\"},\"users\":{\"description\":\"Characters who use this combat style\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with combat style details\"},\"404\":{\"description\":\"Combat style not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/combat-styles/{id}", "segments": [{ "lit": "combat-styles" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "combat_style", "name__orig": "combat_style", "Name": "CombatStyle", "name_": "combat_style", "name-": "combat-style", "NAME": "COMBAT_STYLE", "index$": 1 }, { "active": true, "entity": "combat_style", "key$": "BasicCombatStyleFlow", "kind": "basic", "name": "BasicCombatStyleFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "combat_style_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "combat_style_ref01", "srcdatavar": "combat_style_ref01_data", "suffix": "_dt0" }, "match": { "id": "combat_style01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-combat_style_ref01" } }], "index$": 1 }] }, 'CombatStyle');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let combat_style_ref01_data = Object.values(setup.data.existing.combat_style)[0];
        // LIST
        const combat_style_ref01_ent = client.CombatStyle();
        const combat_style_ref01_match = {};
        const combat_style_ref01_list = (await combat_style_ref01_ent.list(combat_style_ref01_match)).map((e) => e.data());
        // LOAD
        const combat_style_ref01_match_dt0 = {};
        combat_style_ref01_match_dt0.id = combat_style_ref01_data.id;
        const combat_style_ref01_data_dt0 = (await combat_style_ref01_ent.load(combat_style_ref01_match_dt0)).data();
        (0, node_assert_1.default)(combat_style_ref01_data_dt0.id === combat_style_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/combat_style/CombatStyleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.DemonSlayerSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['combat_style01', 'combat_style02', 'combat_style03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'DEMON_SLAYER_TEST_COMBAT_STYLE_ENTID': idmap,
        'DEMON_SLAYER_TEST_LIVE': 'FALSE',
        'DEMON_SLAYER_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['DEMON_SLAYER_TEST_COMBAT_STYLE_ENTID'];
    const live = 'TRUE' === env.DEMON_SLAYER_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['DEMON_SLAYER_TEST_COMBAT_STYLE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.DemonSlayerSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.DEMON_SLAYER_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CombatStyleEntity.test.js.map