# DemonSlayer SDK utility: prepare_body
require_relative 'media'
module DemonSlayerUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return DemonSlayerUtilities.raw_body(ctx.reqdata) if DemonSlayerUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
