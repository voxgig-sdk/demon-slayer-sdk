import { CharacterEntity } from './entity/CharacterEntity';
import { CombatStyleEntity } from './entity/CombatStyleEntity';
export type * from './DemonSlayerTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { DemonSlayerEntityBase } from './DemonSlayerEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class DemonSlayerSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Character(entopts?: Record<string, any>): CharacterEntity;
    CombatStyle(entopts?: Record<string, any>): CombatStyleEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): DemonSlayerSDK;
    tester(testopts?: any, sdkopts?: any): DemonSlayerSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof DemonSlayerSDK;
export { stdutil, config, BaseFeature, DemonSlayerEntityBase, DemonSlayerSDK, SDK, };
export type { DirectResult };
