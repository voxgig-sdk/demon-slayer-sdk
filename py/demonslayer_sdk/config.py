# DemonSlayer SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "DemonSlayer",
            "slug": "demon-slayer",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://www.demonslayer-api.com/api/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "character": {},
                "combat_style": {},
            },
        },
        "entity": {
      "character": {
        "fields": [
          {
            "name": "abilities",
            "title": "Abilities",
            "type": "`$ARRAY`",
            "short": "List of abilities and techniques the character possesses",
          },
          {
            "name": "affiliation",
            "title": "Affiliation",
            "type": "`$STRING`",
            "short": "Organization or group the character belongs to",
          },
          {
            "name": "age",
            "title": "Age",
            "type": "`$INTEGER`",
            "short": "Age of the character",
          },
          {
            "name": "combatStyle",
            "title": "Combat Style",
            "type": "`$STRING`",
            "short": "Primary combat style or breathing technique used by the character",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Detailed description of the character",
          },
          {
            "name": "gender",
            "title": "Gender",
            "type": "`$STRING`",
            "short": "Gender of the character",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the character",
          },
          {
            "name": "imageUrl",
            "title": "Image Url",
            "type": "`$STRING`",
            "short": "URL to the character's image",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Name of the character",
          },
          {
            "name": "quotes",
            "title": "Quotes",
            "type": "`$ARRAY`",
            "short": "Memorable quotes from the character",
          },
          {
            "name": "race",
            "title": "Race",
            "type": "`$STRING`",
            "short": "Race of the character (Human, Demon, etc.)",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "character",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/characters",
                "segments": [
                  {
                    "lit": "characters",
                  },
                ],
                "parts": [
                  "characters",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "affiliation",
                      "orig": "affiliation",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "age",
                      "orig": "age",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "gender",
                      "orig": "gender",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "affiliation",
                    "age",
                    "gender",
                    "name",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/characters/{id}",
                "segments": [
                  {
                    "lit": "characters",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "characters",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "combat_style": {
        "fields": [
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Detailed description of the combat style",
          },
          {
            "name": "forms",
            "title": "Forms",
            "type": "`$ARRAY`",
            "short": "List of forms or techniques within this combat style",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the combat style",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Name of the combat style",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "Type of combat style (Breathing Technique, Blood Demon Art, etc.)",
          },
          {
            "name": "users",
            "title": "Users",
            "type": "`$ARRAY`",
            "short": "Characters who use this combat style",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "combat_style",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/combat-styles",
                "segments": [
                  {
                    "lit": "combat-styles",
                  },
                ],
                "parts": [
                  "combat-styles",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "name",
                    "type",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/combat-styles/{id}",
                "segments": [
                  {
                    "lit": "combat-styles",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "combat-styles",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
