// Typed models for the DemonSlayer SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  ability?: any[]
  affiliation?: string
  age?: number
  combat_style?: string
  description?: string
  gender?: string
  id?: string
  image_url?: string
  name?: string
  quote?: any[]
  race?: string
}

export interface CharacterLoadMatch {
  id: string
}

export type CharacterListMatch = Partial<Character>

export interface CombatStyle {
  description?: string
  form?: any[]
  id?: string
  name?: string
  type?: string
  user?: any[]
}

export interface CombatStyleLoadMatch {
  id: string
}

export type CombatStyleListMatch = Partial<CombatStyle>

