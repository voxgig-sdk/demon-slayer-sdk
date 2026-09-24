
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { DemonSlayerSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = DemonSlayerSDK.test()
    equal(testsdk instanceof DemonSlayerSDK, true,
      'DemonSlayerSDK.test() must return a client synchronously')
  })

})
