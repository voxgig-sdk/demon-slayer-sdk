# DemonSlayer SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module DemonSlayerFeatures
  def self.make_feature(name)
    case name
    when "base"
      DemonSlayerBaseFeature.new
    when "ratelimit"
      DemonSlayerRatelimitFeature.new
    when "retry"
      DemonSlayerRetryFeature.new
    when "test"
      DemonSlayerTestFeature.new
    when "timeout"
      DemonSlayerTimeoutFeature.new
    else
      DemonSlayerBaseFeature.new
    end
  end
end
