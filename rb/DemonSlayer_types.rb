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
# @!attribute [rw] ability
#   @return [Array, nil]
#
# @!attribute [rw] affiliation
#   @return [String, nil]
#
# @!attribute [rw] age
#   @return [Integer, nil]
#
# @!attribute [rw] combat_style
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
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] quote
#   @return [Array, nil]
#
# @!attribute [rw] race
#   @return [String, nil]
Character = Struct.new(
  :ability,
  :affiliation,
  :age,
  :combat_style,
  :description,
  :gender,
  :id,
  :image_url,
  :name,
  :quote,
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
# @!attribute [rw] ability
#   @return [Array, nil]
#
# @!attribute [rw] affiliation
#   @return [String, nil]
#
# @!attribute [rw] age
#   @return [Integer, nil]
#
# @!attribute [rw] combat_style
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
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] quote
#   @return [Array, nil]
#
# @!attribute [rw] race
#   @return [String, nil]
CharacterListMatch = Struct.new(
  :ability,
  :affiliation,
  :age,
  :combat_style,
  :description,
  :gender,
  :id,
  :image_url,
  :name,
  :quote,
  :race,
  keyword_init: true
)

# CombatStyle entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] form
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
# @!attribute [rw] user
#   @return [Array, nil]
CombatStyle = Struct.new(
  :description,
  :form,
  :id,
  :name,
  :type,
  :user,
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
# @!attribute [rw] form
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
# @!attribute [rw] user
#   @return [Array, nil]
CombatStyleListMatch = Struct.new(
  :description,
  :form,
  :id,
  :name,
  :type,
  :user,
  keyword_init: true
)

