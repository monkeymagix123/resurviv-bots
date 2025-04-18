import { GameConfig } from "../../shared/gameConfig";
import type { ConfigType, DeepPartial } from "./config";

const BACKPACK_LEVEL = 3;

// change this to the region of the server
export const THIS_REGION: "na" | "eu" | "local" = "local";

const serverDataConfig = {
    local: {},
    na: {
        gameServer: {
            apiServerUrl: "https://vm-test.tailf587b3.ts.net/api",
        },
        regions: {
            na: {
                https: true,
                address: "vm-game.tailf587b3.ts.net",
                l10n: "index-north-america",
            }
        },
        thisRegion: "na",
    },
};

export const CustomConfig: DeepPartial<ConfigType> = {
    ...serverDataConfig[THIS_REGION],
    client: {
        theme: "main",
    },
    modes: [
        {
            mapName: "main",
            teamMode: 1,
            enabled: true,
        },
        {
            mapName: "woods",
            teamMode: 2,
            enabled: true,
        },
        {
            mapName: "faction",
            teamMode: 4,
            enabled: true,
        },
    ],
    gameConfig: {
        disableKnocking: true,
        disableGroupSpectate: true,
        gas: {
            damageTickRate: 1,
        },
        player: {
            baseSwitchDelay: 0.05,
            // baseSwitchDelay: 0.00,
            defaultItems: {
                backpack: "backpack03",
                helmet: "helmet03",
                chest: "chest03",
                scope: "4xscope",
                perks: [
                    {
                        type: "endless_ammo",
                        droppable: false,
                    },
                    {
                        type: "takedown",
                        droppable: false,
                    },
                ],

                inventory: {
                    frag: 3,
                    smoke: 1,
                    mirv: 1,
                    bandage: GameConfig.bagSizes["bandage"][BACKPACK_LEVEL],
                    healthkit: GameConfig.bagSizes["healthkit"][BACKPACK_LEVEL],
                    soda: GameConfig.bagSizes["soda"][BACKPACK_LEVEL],
                    painkiller: GameConfig.bagSizes["painkiller"][BACKPACK_LEVEL],
                    "1xscope": 1,
                    "2xscope": 1,
                    "4xscope": 1,
                },
            },
        },
    },
};
