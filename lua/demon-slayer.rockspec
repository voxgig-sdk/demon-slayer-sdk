package = "voxgig-sdk-demon-slayer"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/demon-slayer-sdk.git"
}
description = {
  summary = "DemonSlayer SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["demon-slayer_sdk"] = "demon-slayer_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
