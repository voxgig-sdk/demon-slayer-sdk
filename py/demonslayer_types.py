# Typed models for the DemonSlayer SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Character:
    ability: Optional[list] = None
    affiliation: Optional[str] = None
    age: Optional[int] = None
    combat_style: Optional[str] = None
    description: Optional[str] = None
    gender: Optional[str] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    name: Optional[str] = None
    quote: Optional[list] = None
    race: Optional[str] = None


@dataclass
class CharacterLoadMatch:
    id: str


@dataclass
class CharacterListMatch:
    ability: Optional[list] = None
    affiliation: Optional[str] = None
    age: Optional[int] = None
    combat_style: Optional[str] = None
    description: Optional[str] = None
    gender: Optional[str] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    name: Optional[str] = None
    quote: Optional[list] = None
    race: Optional[str] = None


@dataclass
class CombatStyle:
    description: Optional[str] = None
    form: Optional[list] = None
    id: Optional[str] = None
    name: Optional[str] = None
    type: Optional[str] = None
    user: Optional[list] = None


@dataclass
class CombatStyleLoadMatch:
    id: str


@dataclass
class CombatStyleListMatch:
    description: Optional[str] = None
    form: Optional[list] = None
    id: Optional[str] = None
    name: Optional[str] = None
    type: Optional[str] = None
    user: Optional[list] = None

