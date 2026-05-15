# DemonSlayer SDK utility: make_context
require_relative '../core/context'
module DemonSlayerUtilities
  MakeContext = ->(ctxmap, basectx) {
    DemonSlayerContext.new(ctxmap, basectx)
  }
end
