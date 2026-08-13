# Typed models for the DemonSlayer SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Character(TypedDict, total=False):
    abilities: list
    affiliation: str
    age: int
    combatStyle: str
    description: str
    gender: str
    id: str
    imageUrl: str
    name: str
    quotes: list
    race: str


class CharacterLoadMatch(TypedDict):
    id: str


class CharacterListMatch(TypedDict, total=False):
    abilities: list
    affiliation: str
    age: int
    combatStyle: str
    description: str
    gender: str
    id: str
    imageUrl: str
    name: str
    quotes: list
    race: str


class CombatStyle(TypedDict, total=False):
    description: str
    forms: list
    id: str
    name: str
    type: str
    users: list


class CombatStyleLoadMatch(TypedDict):
    id: str


class CombatStyleListMatch(TypedDict, total=False):
    description: str
    forms: list
    id: str
    name: str
    type: str
    users: list
