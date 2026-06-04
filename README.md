# DemonSlayer SDK

Structured data on characters and combat styles from the Demon Slayer anime series

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Demon Slayer API

The Demon Slayer API is a small, fan-built REST service that exposes structured data drawn from the Demon Slayer (Kimetsu no Yaiba) anime series. It is maintained by Alvaro Rodriguez and hosted on Vercel.

What you get from the API:

- A roster of characters with attributes such as age, gender, and abilities
- Combat styles practised by characters in the series, with their affiliations
- Two top-level collection endpoints under `/api/v1/`: `characters` and `combat-styles`

The service is CORS-enabled, so the endpoints can be called directly from a browser. No authentication is documented, and no rate limits are published on the homepage or community catalogue page.

## Try it

**TypeScript**
```bash
npm install demon-slayer
```

**Python**
```bash
pip install demon-slayer-sdk
```

**PHP**
```bash
composer require voxgig/demon-slayer-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/demon-slayer-sdk/go
```

**Ruby**
```bash
gem install demon-slayer-sdk
```

**Lua**
```bash
luarocks install demon-slayer-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { DemonSlayerSDK } from 'demon-slayer'

const client = new DemonSlayerSDK({})

// List all characters
const characters = await client.Character().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o demon-slayer-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "demon-slayer": {
      "command": "/abs/path/to/demon-slayer-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Character** | A character from the Demon Slayer series with attributes such as age, gender, and abilities; served from `GET /api/v1/characters`. | `/characters` |
| **CombatStyle** | A combat style (e.g. Breathing Style) used by characters in the series, along with its affiliations; served from `GET /api/v1/combat-styles`. | `/combat-styles` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from demonslayer_sdk import DemonSlayerSDK

client = DemonSlayerSDK({})

# List all characters
characters, err = client.Character(None).list(None, None)

# Load a specific character
character, err = client.Character(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'demonslayer_sdk.php';

$client = new DemonSlayerSDK([]);

// List all characters
[$characters, $err] = $client->Character(null)->list(null, null);

// Load a specific character
[$character, $err] = $client->Character(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/demon-slayer-sdk/go"

client := sdk.NewDemonSlayerSDK(map[string]any{})

// List all characters
characters, err := client.Character(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "DemonSlayer_sdk"

client = DemonSlayerSDK.new({})

# List all characters
characters, err = client.Character(nil).list(nil, nil)

# Load a specific character
character, err = client.Character(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("demon-slayer_sdk")

local client = sdk.new({})

-- List all characters
local characters, err = client:Character(nil):list(nil, nil)

-- Load a specific character
local character, err = client:Character(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = DemonSlayerSDK.test()
const result = await client.Character().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = DemonSlayerSDK.test(None, None)
result, err = client.Character(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = DemonSlayerSDK::test(null, null);
[$result, $err] = $client->Character(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Character(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = DemonSlayerSDK.test(nil, nil)
result, err = client.Character(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Character(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Demon Slayer API

- Upstream: [https://www.demonslayer-api.com/](https://www.demonslayer-api.com/)
- API docs: [https://www.demonslayer-api.com/documentation](https://www.demonslayer-api.com/documentation)

---

Generated from the Demon Slayer API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
