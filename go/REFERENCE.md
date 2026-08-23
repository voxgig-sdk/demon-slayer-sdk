# DemonSlayer Golang SDK Reference

Complete API reference for the DemonSlayer Golang SDK.


## DemonSlayerSDK

### Constructor

```go
func NewDemonSlayerSDK(options map[string]any) *DemonSlayerSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *DemonSlayerSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *DemonSlayerSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Character(data map[string]any) DemonSlayerEntity`

Create a new `Character` entity instance. Pass `nil` for no initial data.

#### `CombatStyle(data map[string]any) DemonSlayerEntity`

Create a new `CombatStyle` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CharacterEntity

```go
character := client.Character(nil)
fmt.Println(character.GetName()) // "character"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abilities` | `[]any` | No | List of abilities and techniques the character possesses |
| `affiliation` | `string` | No | Organization or group the character belongs to |
| `age` | `int` | No | Age of the character |
| `combatStyle` | `string` | No | Primary combat style or breathing technique used by the character |
| `description` | `string` | No | Detailed description of the character |
| `gender` | `string` | No | Gender of the character |
| `id` | `string` | No | Unique identifier for the character |
| `imageUrl` | `string` | No | URL to the character's image |
| `name` | `string` | No | Name of the character |
| `quotes` | `[]any` | No | Memorable quotes from the character |
| `race` | `string` | No | Race of the character (Human, Demon, etc.) |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Character(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Character(nil).Load(map[string]any{"id": "character_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CombatStyleEntity

```go
combatStyle := client.CombatStyle(nil)
fmt.Println(combatStyle.GetName()) // "combat_style"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Detailed description of the combat style |
| `forms` | `[]any` | No | List of forms or techniques within this combat style |
| `id` | `string` | No | Unique identifier for the combat style |
| `name` | `string` | No | Name of the combat style |
| `type` | `string` | No | Type of combat style (Breathing Technique, Blood Demon Art, etc.) |
| `users` | `[]any` | No | Characters who use this combat style |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CombatStyle(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CombatStyle(nil).Load(map[string]any{"id": "combat_style_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CombatStyleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewDemonSlayerSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

