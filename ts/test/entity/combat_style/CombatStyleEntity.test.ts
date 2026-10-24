

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { DemonSlayerSDK, BaseFeature, config, stdutil } from '../../..'

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


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('combat_style hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of DemonSlayerSDK.test(offline).CombatStyle().stream('list')) { }
    }, /offline/)

    for await (const _item of DemonSlayerSDK.test(offline).CombatStyle()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = DemonSlayerSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.CombatStyle().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of DemonSlayerSDK.test().CombatStyle().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new DemonSlayerSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.CombatStyle().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.CombatStyle().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = DemonSlayerSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CombatStyle().list({"name":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DEMON_SLAYER_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'combat_style.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Detailed description of the combat style","t":"`$STRING`","key$":"description","index$":0},"forms":{"a":true,"h":"Forms","n":"forms","r":false,"sh":"List of forms or techniques within this combat style","t":"`$ARRAY`","key$":"forms","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the combat style","t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the combat style","t":"`$STRING`","key$":"name","index$":3},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Type of combat style (Breathing Technique, Blood Demon Art, etc.)","t":"`$STRING`","key$":"type","index$":4},"users":{"a":true,"h":"Users","n":"users","r":false,"sh":"Characters who use this combat style","t":"`$ARRAY`","key$":"users","index$":5}},"id":{"field":"id","name":"id"},"name":"combat_style","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /combat-styles","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/combat-styles","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"combat-styles"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /combat-styles/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/combat-styles/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"combat-styles"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"combat_style","name__orig":"combat_style","Name":"CombatStyle","name_":"combat_style","name-":"combat-style","NAME":"COMBAT_STYLE","index$":1}, {"active":true,"entity":"combat_style","key$":"BasicCombatStyleFlow","kind":"basic","name":"BasicCombatStyleFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"combat_style_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"combat_style_ref01","srcdatavar":"combat_style_ref01_data","suffix":"_dt0"},"m":{"id":"combat_style01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-combat_style_ref01"}}],"index$":1}]}, 'CombatStyle', {"GET /combat-styles":{"protocol":"http","parameters":[{"name":"name","in":"query","description":"Filter combat styles by name","required":false,"schema":{"type":"string"},"index$":0},{"name":"type","in":"query","description":"Filter combat styles by type","required":false,"schema":{"type":"string"},"index$":1}]},"GET /combat-styles/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"Unique identifier of the combat style","required":true,"schema":{"type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
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



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

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
  
