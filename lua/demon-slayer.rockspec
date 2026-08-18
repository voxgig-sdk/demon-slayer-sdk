package = "voxgig-sdk-demon-slayer"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/demon-slayer-sdk.git",
  tag = "lua/v0.0.1",
  dir = "demon-slayer-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the Demon Slayer public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/demon-slayer-sdk",
  issues_url = "https://github.com/voxgig-sdk/demon-slayer-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "demon-slayer" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["demon-slayer_sdk"] = "demon-slayer_sdk.lua",
    ["config"] = "config.lua",
    ["config_shared"] = "config_shared.lua",
    ["features"] = "features.lua",
  }
}
