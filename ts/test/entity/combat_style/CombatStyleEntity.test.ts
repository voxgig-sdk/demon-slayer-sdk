
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { DemonSlayerSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('CombatStyleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DEMONSLAYER_TEST_LIVE=TRUE.
  afterEach(liveDelay('DEMONSLAYER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DemonSlayerSDK.test()
    const ent = testsdk.CombatStyle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DEMON_SLAYER_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'combat_style.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set DEMON_SLAYER_TEST_COMBAT_STYLE_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let combat_style_ref01_data = Object.values(setup.data.existing.combat_style)[0] as any

    // LIST
    const combat_style_ref01_ent = client.CombatStyle()
    const combat_style_ref01_match: any = {}

    const combat_style_ref01_list = await combat_style_ref01_ent.list(combat_style_ref01_match)


    // LOAD
    const combat_style_ref01_match_dt0: any = {}
    combat_style_ref01_match_dt0.id = combat_style_ref01_data.id
    const combat_style_ref01_data_dt0 = await combat_style_ref01_ent.load(combat_style_ref01_match_dt0)
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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['DEMON_SLAYER_TEST_COMBAT_STYLE_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'DEMON_SLAYER_TEST_COMBAT_STYLE_ENTID': idmap,
    'DEMON_SLAYER_TEST_LIVE': 'FALSE',
    'DEMON_SLAYER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DEMON_SLAYER_TEST_COMBAT_STYLE_ENTID']

  const live = 'TRUE' === env.DEMON_SLAYER_TEST_LIVE

  if (live) {
    client = new DemonSlayerSDK(merge([
      {
      },
      extra
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
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
