import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "character",
    "accessor": "Character",
    "op": "list",
    "method": "GET",
    "path": "/characters",
    "args": [],
    "select": {
      "affiliation": "v1",
      "age": "v1",
      "gender": "v1",
      "name": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "name",
      "gender",
      "age",
      "affiliation"
    ],
    "queryArgs": [
      {
        "name": "affiliation",
        "wire": "affiliation"
      },
      {
        "name": "age",
        "wire": "age"
      },
      {
        "name": "gender",
        "wire": "gender"
      },
      {
        "name": "name",
        "wire": "name"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": "x",
        "name": "x",
        "age": 1,
        "gender": "Male",
        "race": "x",
        "affiliation": "x",
        "combatStyle": "x",
        "abilities": [
          "x"
        ],
        "quotes": [
          "x"
        ],
        "description": "x",
        "imageUrl": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "character",
    "accessor": "Character",
    "op": "load",
    "method": "GET",
    "path": "/characters/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": "x",
      "name": "x",
      "age": 1,
      "gender": "Male",
      "race": "x",
      "affiliation": "x",
      "combatStyle": "x",
      "abilities": [
        "x"
      ],
      "quotes": [
        "x"
      ],
      "description": "x",
      "imageUrl": "x"
    },
    "idField": "id"
  },
  {
    "entity": "combat_style",
    "accessor": "CombatStyle",
    "op": "list",
    "method": "GET",
    "path": "/combat-styles",
    "args": [],
    "select": {
      "name": "v1",
      "type": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "name",
      "type"
    ],
    "queryArgs": [
      {
        "name": "name",
        "wire": "name"
      },
      {
        "name": "type",
        "wire": "type"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": "x",
        "name": "x",
        "type": "x",
        "description": "x",
        "forms": [
          {
            "name": "x",
            "description": "x"
          }
        ],
        "users": [
          "x"
        ]
      }
    ],
    "idField": "id"
  },
  {
    "entity": "combat_style",
    "accessor": "CombatStyle",
    "op": "load",
    "method": "GET",
    "path": "/combat-styles/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": "x",
      "name": "x",
      "type": "x",
      "description": "x",
      "forms": [
        {
          "name": "x",
          "description": "x"
        }
      ],
      "users": [
        "x"
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
