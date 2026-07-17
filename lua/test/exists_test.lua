-- DemonSlayer SDK exists test

local sdk = require("demon-slayer_sdk")

describe("DemonSlayerSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
