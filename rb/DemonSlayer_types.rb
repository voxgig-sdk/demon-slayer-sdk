# frozen_string_literal: true

# Typed models for the DemonSlayer SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Character entity data model.
#
# @!attribute [rw] abilities
#   @return [Array, nil]
#
# @!attribute [rw] affiliation
#   @return [String, nil]
#
# @!attribute [rw] age
#   @return [Integer, nil]
#
# @!attribute [rw] combatStyle
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] quotes
#   @return [Array, nil]
#
# @!attribute [rw] race
#   @return [String, nil]
Character = Struct.new(
  :abilities,
  :affiliation,
  :age,
  :combatStyle,
  :description,
  :gender,
  :id,
  :imageUrl,
  :name,
  :quotes,
  :race,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [String]
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Character#list.
#
# @!attribute [rw] abilities
#   @return [Array, nil]
#
# @!attribute [rw] affiliation
#   @return [String, nil]
#
# @!attribute [rw] age
#   @return [Integer, nil]
#
# @!attribute [rw] combatStyle
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] quotes
#   @return [Array, nil]
#
# @!attribute [rw] race
#   @return [String, nil]
CharacterListMatch = Struct.new(
  :abilities,
  :affiliation,
  :age,
  :combatStyle,
  :description,
  :gender,
  :id,
  :imageUrl,
  :name,
  :quotes,
  :race,
  keyword_init: true
)

# CombatStyle entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] forms
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] users
#   @return [Array, nil]
CombatStyle = Struct.new(
  :description,
  :forms,
  :id,
  :name,
  :type,
  :users,
  keyword_init: true
)

# Request payload for CombatStyle#load.
#
# @!attribute [rw] id
#   @return [String]
CombatStyleLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for CombatStyle#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] forms
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] users
#   @return [Array, nil]
CombatStyleListMatch = Struct.new(
  :description,
  :forms,
  :id,
  :name,
  :type,
  :users,
  keyword_init: true
)

