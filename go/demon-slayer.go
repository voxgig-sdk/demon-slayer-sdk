package voxgigdemonslayersdk

import (
	"github.com/voxgig-sdk/demon-slayer-sdk/core"
	"github.com/voxgig-sdk/demon-slayer-sdk/entity"
	"github.com/voxgig-sdk/demon-slayer-sdk/feature"
	_ "github.com/voxgig-sdk/demon-slayer-sdk/utility"
)

// Type aliases preserve external API.
type DemonSlayerSDK = core.DemonSlayerSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type DemonSlayerEntity = core.DemonSlayerEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type DemonSlayerError = core.DemonSlayerError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCharacterEntityFunc = func(client *core.DemonSlayerSDK, entopts map[string]any) core.DemonSlayerEntity {
		return entity.NewCharacterEntity(client, entopts)
	}
	core.NewCombatStyleEntityFunc = func(client *core.DemonSlayerSDK, entopts map[string]any) core.DemonSlayerEntity {
		return entity.NewCombatStyleEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewDemonSlayerSDK = core.NewDemonSlayerSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
