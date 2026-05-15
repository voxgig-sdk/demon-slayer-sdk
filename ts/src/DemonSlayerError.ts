
import { Context } from './Context'


class DemonSlayerError extends Error {

  isDemonSlayerError = true

  sdk = 'DemonSlayer'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  DemonSlayerError
}

