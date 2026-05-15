-- DemonSlayer SDK error

local DemonSlayerError = {}
DemonSlayerError.__index = DemonSlayerError


function DemonSlayerError.new(code, msg, ctx)
  local self = setmetatable({}, DemonSlayerError)
  self.is_sdk_error = true
  self.sdk = "DemonSlayer"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function DemonSlayerError:error()
  return self.msg
end


function DemonSlayerError:__tostring()
  return self.msg
end


return DemonSlayerError
