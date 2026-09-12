import { DemonSlayerEntityBase } from '../DemonSlayerEntityBase';
import type { DemonSlayerSDK } from '../DemonSlayerSDK';
import type { Control } from '../types';
import type { CombatStyle, CombatStyleLoadMatch, CombatStyleListMatch } from '../DemonSlayerTypes';
declare class CombatStyleEntity extends DemonSlayerEntityBase<CombatStyle> {
    constructor(client: DemonSlayerSDK, entopts: any);
    make(this: CombatStyleEntity): CombatStyleEntity;
    load(this: any, reqmatch?: CombatStyleLoadMatch, ctrl?: Control): Promise<CombatStyleEntity>;
    list(this: any, reqmatch?: CombatStyleListMatch, ctrl?: Control): Promise<CombatStyleEntity[]>;
}
export { CombatStyleEntity };
