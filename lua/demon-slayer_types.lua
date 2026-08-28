-- Typed models for the DemonSlayer SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Character
---@field abilities? table
---@field affiliation? string
---@field age? number
---@field combatStyle? string
---@field description? string
---@field gender? string
---@field id? string
---@field imageUrl? string
---@field name? string
---@field quotes? table
---@field race? string

---@class CharacterLoadMatch
---@field id string

---@class CharacterListMatch
---@field affiliation? string
---@field age? number
---@field gender? string
---@field name? string

---@class CombatStyle
---@field description? string
---@field forms? table
---@field id? string
---@field name? string
---@field type? string
---@field users? table

---@class CombatStyleLoadMatch
---@field id string

---@class CombatStyleListMatch
---@field name? string
---@field type? string

local M = {}

return M
