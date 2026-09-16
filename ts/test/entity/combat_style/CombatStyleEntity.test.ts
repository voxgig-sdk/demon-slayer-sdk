

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { DemonSlayerSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('CombatStyleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DEMON_SLAYER_TEST_LIVE=TRUE.
  afterEach(liveDelay('DEMON_SLAYER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DemonSlayerSDK.test()
    const ent = testsdk.CombatStyle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DEMON_SLAYER_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'combat_style.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"short":"Detailed description of the combat style","type":"`$STRING`","index$":0},{"active":true,"name":"forms","req":false,"short":"List of forms or techniques within this combat style","type":"`$ARRAY`","index$":1},{"active":true,"name":"id","req":false,"short":"Unique identifier for the combat style","type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"short":"Name of the combat style","type":"`$STRING`","index$":3},{"active":true,"name":"type","req":false,"short":"Type of combat style (Breathing Technique, Blood Demon Art, etc.)","type":"`$STRING`","index$":4},{"active":true,"name":"users","req":false,"short":"Characters who use this combat style","type":"`$ARRAY`","index$":5}],"id":{"field":"id","name":"id"},"name":"combat_style","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"type","orig":"type","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /combat-styles","json":"{\"operationId\":\"getCombatStyles\",\"parameters\":[{\"description\":\"Filter combat styles by name\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter combat styles by type\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Detailed description of the combat style\",\"type\":\"string\"},\"forms\":{\"description\":\"List of forms or techniques within this combat style\",\"items\":{\"properties\":{\"description\":{\"description\":\"Description of the form\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the form\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the combat style\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the combat style\",\"type\":\"string\"},\"type\":{\"description\":\"Type of combat style (Breathing Technique, Blood Demon Art, etc.)\",\"type\":\"string\"},\"users\":{\"description\":\"Characters who use this combat style\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with combat style data\"},\"400\":{\"description\":\"Bad request\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/combat-styles","segments":[{"lit":"combat-styles"}],"select":{"exist":["name","type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /combat-styles/{id}","json":"{\"operationId\":\"getCombatStyleById\",\"parameters\":[{\"description\":\"Unique identifier of the combat style\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"description\":\"Detailed description of the combat style\",\"type\":\"string\"},\"forms\":{\"description\":\"List of forms or techniques within this combat style\",\"items\":{\"properties\":{\"description\":{\"description\":\"Description of the form\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the form\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the combat style\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the combat style\",\"type\":\"string\"},\"type\":{\"description\":\"Type of combat style (Breathing Technique, Blood Demon Art, etc.)\",\"type\":\"string\"},\"users\":{\"description\":\"Characters who use this combat style\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with combat style details\"},\"404\":{\"description\":\"Combat style not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/combat-styles/{id}","segments":[{"lit":"combat-styles"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"combat_style","name__orig":"combat_style","Name":"CombatStyle","name_":"combat_style","name-":"combat-style","NAME":"COMBAT_STYLE","index$":1}, {"active":true,"entity":"combat_style","key$":"BasicCombatStyleFlow","kind":"basic","name":"BasicCombatStyleFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"combat_style_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"combat_style_ref01","srcdatavar":"combat_style_ref01_data","suffix":"_dt0"},"match":{"id":"combat_style01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-combat_style_ref01"}}],"index$":1}]}, 'CombatStyle')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let combat_style_ref01_data = Object.values(setup.data.existing.combat_style)[0] as any

    // LIST
    const combat_style_ref01_ent = client.CombatStyle()
    const combat_style_ref01_match: any = {}

    const combat_style_ref01_list = (await combat_style_ref01_ent.list(combat_style_ref01_match)).map((e: any) => e.data())


    // LOAD
    const combat_style_ref01_match_dt0: any = {}
    combat_style_ref01_match_dt0.id = combat_style_ref01_data.id
    const combat_style_ref01_data_dt0 = (await combat_style_ref01_ent.load(combat_style_ref01_match_dt0)).data()
    assert(combat_style_ref01_data_dt0.id === combat_style_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/combat_style/CombatStyleTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = DemonSlayerSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['combat_style01','combat_style02','combat_style03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DEMON_SLAYER_TEST_COMBAT_STYLE_ENTID': idmap,
    'DEMON_SLAYER_TEST_LIVE': 'FALSE',
    'DEMON_SLAYER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DEMON_SLAYER_TEST_COMBAT_STYLE_ENTID']

  const live = 'TRUE' === env.DEMON_SLAYER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DEMON_SLAYER_TEST_COMBAT_STYLE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new DemonSlayerSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
