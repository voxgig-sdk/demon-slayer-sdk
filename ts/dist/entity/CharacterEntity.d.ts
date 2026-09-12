import { DemonSlayerEntityBase } from '../DemonSlayerEntityBase';
import type { DemonSlayerSDK } from '../DemonSlayerSDK';
import type { Control } from '../types';
import type { Character, CharacterLoadMatch, CharacterListMatch } from '../DemonSlayerTypes';
declare class CharacterEntity extends DemonSlayerEntityBase<Character> {
    constructor(client: DemonSlayerSDK, entopts: any);
    make(this: CharacterEntity): CharacterEntity;
    load(this: any, reqmatch?: CharacterLoadMatch, ctrl?: Control): Promise<CharacterEntity>;
    list(this: any, reqmatch?: CharacterListMatch, ctrl?: Control): Promise<CharacterEntity[]>;
}
export { CharacterEntity };
