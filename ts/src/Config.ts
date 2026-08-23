
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'DemonSlayer',
        slug: "demon-slayer",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://www.demonslayer-api.com/api/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      character: {
      },

      combat_style: {
      },

    }
  }


  entity = {
    "character": {
      "fields": [
        {
          "name": "abilities",
          "short": "List of abilities and techniques the character possesses",
          "type": "`$ARRAY`"
        },
        {
          "name": "affiliation",
          "short": "Organization or group the character belongs to",
          "type": "`$STRING`"
        },
        {
          "name": "age",
          "short": "Age of the character",
          "type": "`$INTEGER`"
        },
        {
          "name": "combatStyle",
          "short": "Primary combat style or breathing technique used by the character",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Detailed description of the character",
          "type": "`$STRING`"
        },
        {
          "name": "gender",
          "short": "Gender of the character",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the character",
          "type": "`$STRING`"
        },
        {
          "name": "imageUrl",
          "short": "URL to the character's image",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Name of the character",
          "type": "`$STRING`"
        },
        {
          "name": "quotes",
          "short": "Memorable quotes from the character",
          "type": "`$ARRAY`"
        },
        {
          "name": "race",
          "short": "Race of the character (Human, Demon, etc.)",
          "type": "`$STRING`"
        }
      ],
      "name": "character",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "affiliation",
                    "orig": "affiliation",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "age",
                    "orig": "age",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "gender",
                    "orig": "gender",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/characters",
              "parts": [
                "characters"
              ],
              "select": {
                "exist": [
                  "affiliation",
                  "age",
                  "gender",
                  "name"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/characters/{id}",
              "parts": [
                "characters",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "combat_style": {
      "fields": [
        {
          "name": "description",
          "short": "Detailed description of the combat style",
          "type": "`$STRING`"
        },
        {
          "name": "forms",
          "short": "List of forms or techniques within this combat style",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the combat style",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Name of the combat style",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type of combat style (Breathing Technique, Blood Demon Art, etc.)",
          "type": "`$STRING`"
        },
        {
          "name": "users",
          "short": "Characters who use this combat style",
          "type": "`$ARRAY`"
        }
      ],
      "name": "combat_style",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/combat-styles",
              "parts": [
                "combat-styles"
              ],
              "select": {
                "exist": [
                  "name",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/combat-styles/{id}",
              "parts": [
                "combat-styles",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

