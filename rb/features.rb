# DemonSlayer SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module DemonSlayerFeatures
  def self.make_feature(name)
    case name
    when "base"
      DemonSlayerBaseFeature.new
    when "test"
      DemonSlayerTestFeature.new
    else
      DemonSlayerBaseFeature.new
    end
  end
end
