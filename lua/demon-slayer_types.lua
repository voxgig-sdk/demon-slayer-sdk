-- Typed models for the DemonSlayer SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Character
---@field ability? table
---@field affiliation? string
---@field age? number
---@field combat_style? string
---@field description? string
---@field gender? string
---@field id? string
---@field image_url? string
---@field name? string
---@field quote? table
---@field race? string

---@class CharacterLoadMatch
---@field id string

---@class CharacterListMatch
---@field ability? table
---@field affiliation? string
---@field age? number
---@field combat_style? string
---@field description? string
---@field gender? string
---@field id? string
---@field image_url? string
---@field name? string
---@field quote? table
---@field race? string

---@class CombatStyle
---@field description? string
---@field form? table
---@field id? string
---@field name? string
---@field type? string
---@field user? table

---@class CombatStyleLoadMatch
---@field id string

---@class CombatStyleListMatch
---@field description? string
---@field form? table
---@field id? string
---@field name? string
---@field type? string
---@field user? table

local M = {}

return M
