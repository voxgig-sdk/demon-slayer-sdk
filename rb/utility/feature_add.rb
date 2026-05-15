# DemonSlayer SDK utility: feature_add
module DemonSlayerUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
