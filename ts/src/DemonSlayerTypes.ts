// Typed models for the DemonSlayer SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  abilities?: any[]
  affiliation?: string
  age?: number
  combatStyle?: string
  description?: string
  gender?: string
  id?: string
  imageUrl?: string
  name?: string
  quotes?: any[]
  race?: string
}

export interface CharacterLoadMatch {
  id: string
}

export interface CharacterListMatch {
  affiliation?: string
  age?: number
  gender?: string
  name?: string
}

export interface CombatStyle {
  description?: string
  forms?: any[]
  id?: string
  name?: string
  type?: string
  users?: any[]
}

export interface CombatStyleLoadMatch {
  id: string
}

export interface CombatStyleListMatch {
  name?: string
  type?: string
}

