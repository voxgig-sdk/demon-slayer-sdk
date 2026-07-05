// Typed models for the DemonSlayer SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Character is the typed data model for the character entity.
type Character struct {
	Ability *[]any `json:"ability,omitempty"`
	Affiliation *string `json:"affiliation,omitempty"`
	Age *int `json:"age,omitempty"`
	CombatStyle *string `json:"combat_style,omitempty"`
	Description *string `json:"description,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Quote *[]any `json:"quote,omitempty"`
	Race *string `json:"race,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id string `json:"id"`
}

// CharacterListMatch is the typed request payload for Character.ListTyped.
type CharacterListMatch struct {
	Ability *[]any `json:"ability,omitempty"`
	Affiliation *string `json:"affiliation,omitempty"`
	Age *int `json:"age,omitempty"`
	CombatStyle *string `json:"combat_style,omitempty"`
	Description *string `json:"description,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Quote *[]any `json:"quote,omitempty"`
	Race *string `json:"race,omitempty"`
}

// CombatStyle is the typed data model for the combat_style entity.
type CombatStyle struct {
	Description *string `json:"description,omitempty"`
	Form *[]any `json:"form,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	User *[]any `json:"user,omitempty"`
}

// CombatStyleLoadMatch is the typed request payload for CombatStyle.LoadTyped.
type CombatStyleLoadMatch struct {
	Id string `json:"id"`
}

// CombatStyleListMatch is the typed request payload for CombatStyle.ListTyped.
type CombatStyleListMatch struct {
	Description *string `json:"description,omitempty"`
	Form *[]any `json:"form,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	User *[]any `json:"user,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
