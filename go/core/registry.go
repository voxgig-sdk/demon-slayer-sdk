package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCharacterEntityFunc func(client *DemonSlayerSDK, entopts map[string]any) DemonSlayerEntity

var NewCombatStyleEntityFunc func(client *DemonSlayerSDK, entopts map[string]any) DemonSlayerEntity

