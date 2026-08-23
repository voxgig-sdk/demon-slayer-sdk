# DemonSlayer Python SDK Reference

Complete API reference for the DemonSlayer Python SDK.


## DemonSlayerSDK

### Constructor

```python
from demonslayer_sdk import DemonSlayerSDK

client = DemonSlayerSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DemonSlayerSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = DemonSlayerSDK.test()
```


### Instance Methods

#### `Character(data=None)`

Create a new `CharacterEntity` instance. Pass `None` for no initial data.

#### `CombatStyle(data=None)`

Create a new `CombatStyleEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CharacterEntity

```python
character = client.Character()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abilities` | `list` | No | List of abilities and techniques the character possesses |
| `affiliation` | `str` | No | Organization or group the character belongs to |
| `age` | `int` | No | Age of the character |
| `combatStyle` | `str` | No | Primary combat style or breathing technique used by the character |
| `description` | `str` | No | Detailed description of the character |
| `gender` | `str` | No | Gender of the character |
| `id` | `str` | No | Unique identifier for the character |
| `imageUrl` | `str` | No | URL to the character's image |
| `name` | `str` | No | Name of the character |
| `quotes` | `list` | No | Memorable quotes from the character |
| `race` | `str` | No | Race of the character (Human, Demon, etc.) |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Character().list()
for character in results:
    print(character)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Character().load({"id": "character_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CharacterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CombatStyleEntity

```python
combat_style = client.CombatStyle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No | Detailed description of the combat style |
| `forms` | `list` | No | List of forms or techniques within this combat style |
| `id` | `str` | No | Unique identifier for the combat style |
| `name` | `str` | No | Name of the combat style |
| `type` | `str` | No | Type of combat style (Breathing Technique, Blood Demon Art, etc.) |
| `users` | `list` | No | Characters who use this combat style |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CombatStyle().list()
for combat_style in results:
    print(combat_style)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CombatStyle().load({"id": "combat_style_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CombatStyleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = DemonSlayerSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

