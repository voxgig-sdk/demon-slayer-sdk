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
    public ?array $ability = null;
    public ?string $affiliation = null;
    public ?int $age = null;
    public ?string $combat_style = null;
    public ?string $description = null;
    public ?string $gender = null;
    public ?string $id = null;
    public ?string $image_url = null;
    public ?string $name = null;
    public ?array $quote = null;
    public ?string $race = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public string $id;
}

/** Match filter for Character#list (any subset of Character fields). */
class CharacterListMatch
{
    public ?array $ability = null;
    public ?string $affiliation = null;
    public ?int $age = null;
    public ?string $combat_style = null;
    public ?string $description = null;
    public ?string $gender = null;
    public ?string $id = null;
    public ?string $image_url = null;
    public ?string $name = null;
    public ?array $quote = null;
    public ?string $race = null;
}

/** CombatStyle entity data model. */
class CombatStyle
{
    public ?string $description = null;
    public ?array $form = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?array $user = null;
}

/** Request payload for CombatStyle#load. */
class CombatStyleLoadMatch
{
    public string $id;
}

/** Match filter for CombatStyle#list (any subset of CombatStyle fields). */
class CombatStyleListMatch
{
    public ?string $description = null;
    public ?array $form = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?array $user = null;
}

