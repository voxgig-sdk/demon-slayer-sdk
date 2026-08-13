<?php
declare(strict_types=1);

// Typed models for the DemonSlayer SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Character entity data model. */
class Character
{
    public ?array $abilities = null;
    public ?string $affiliation = null;
    public ?int $age = null;
    public ?string $combatStyle = null;
    public ?string $description = null;
    public ?string $gender = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $name = null;
    public ?array $quotes = null;
    public ?string $race = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public string $id;
}

/** Request payload for Character#list. */
class CharacterListMatch
{
    public ?array $abilities = null;
    public ?string $affiliation = null;
    public ?int $age = null;
    public ?string $combatStyle = null;
    public ?string $description = null;
    public ?string $gender = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $name = null;
    public ?array $quotes = null;
    public ?string $race = null;
}

/** CombatStyle entity data model. */
class CombatStyle
{
    public ?string $description = null;
    public ?array $forms = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?array $users = null;
}

/** Request payload for CombatStyle#load. */
class CombatStyleLoadMatch
{
    public string $id;
}

/** Request payload for CombatStyle#list. */
class CombatStyleListMatch
{
    public ?string $description = null;
    public ?array $forms = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?array $users = null;
}

