import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const descendantList: Prisma.DescendantsCreateInput[] = [
    {
        id: "101000001",
        descendant_name: "Lepic",
        slug: "lepic",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/6cecbb40acd1b4479a44caaf22817751",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 186
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 49
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 130
                            },
                            {
                                def: "DEF",
                                def_value: 217
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 188
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 50
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 131
                            },
                            {
                                def: "DEF",
                                def_value: 219
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 192
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 52
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 132
                            },
                            {
                                def: "DEF",
                                def_value: 223
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 196
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 54
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 134
                            },
                            {
                                def: "DEF",
                                def_value: 229
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 202
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 57
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 135
                            },
                            {
                                def: "DEF",
                                def_value: 236
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.53
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 210
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 60
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 136
                            },
                            {
                                def: "DEF",
                                def_value: 246
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 218
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 64
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 137
                            },
                            {
                                def: "DEF",
                                def_value: 261
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.6
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 228
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 68
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 138
                            },
                            {
                                def: "DEF",
                                def_value: 284
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.65
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.54
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 243
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 73
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 139
                            },
                            {
                                def: "DEF",
                                def_value: 309
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.7
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.58
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 262
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 79
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 141
                            },
                            {
                                def: "DEF",
                                def_value: 339
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.74
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 282
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 85
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 142
                            },
                            {
                                def: "DEF",
                                def_value: 364
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 301
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 91
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 144
                            },
                            {
                                def: "DEF",
                                def_value: 406
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.86
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.72
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 326
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 98
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 147
                            },
                            {
                                def: "DEF",
                                def_value: 452
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.94
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 355
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 107
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 149
                            },
                            {
                                def: "DEF",
                                def_value: 498
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.03
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.86
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 379
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 114
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 151
                            },
                            {
                                def: "DEF",
                                def_value: 547
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.08
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.9
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 408
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 123
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 154
                            },
                            {
                                def: "DEF",
                                def_value: 598
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.18
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.98
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 437
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 132
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 156
                            },
                            {
                                def: "DEF",
                                def_value: 651
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.04
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 466
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 140
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 158
                            },
                            {
                                def: "DEF",
                                def_value: 706
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.12
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 500
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 150
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 161
                            },
                            {
                                def: "DEF",
                                def_value: 763
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.2
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 529
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 159
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 163
                            },
                            {
                                def: "DEF",
                                def_value: 823
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.54
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.28
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 563
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 170
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 165
                            },
                            {
                                def: "DEF",
                                def_value: 884
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.63
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.36
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 597
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 180
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 169
                            },
                            {
                                def: "DEF",
                                def_value: 947
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.73
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.44
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 631
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 190
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 173
                            },
                            {
                                def: "DEF",
                                def_value: 1013
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.82
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.52
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 675
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 203
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 176
                            },
                            {
                                def: "DEF",
                                def_value: 1080
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.94
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.62
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 709
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 213
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 180
                            },
                            {
                                def: "DEF",
                                def_value: 1150
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.04
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.7
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 748
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 225
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 183
                            },
                            {
                                def: "DEF",
                                def_value: 1221
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.16
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.8
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 786
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 236
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 187
                            },
                            {
                                def: "DEF",
                                def_value: 1295
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.26
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 830
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 250
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 190
                            },
                            {
                                def: "DEF",
                                def_value: 1371
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 869
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 261
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 194
                            },
                            {
                                def: "DEF",
                                def_value: 1448
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.5
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.08
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 908
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 273
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 197
                            },
                            {
                                def: "DEF",
                                def_value: 1529
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.64
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.2
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 956
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 288
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 201
                            },
                            {
                                def: "DEF",
                                def_value: 1611
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.76
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 995
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 299
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 206
                            },
                            {
                                def: "DEF",
                                def_value: 1695
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.88
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.4
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1043
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 314
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 210
                            },
                            {
                                def: "DEF",
                                def_value: 1781
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.5
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1087
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 327
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 215
                            },
                            {
                                def: "DEF",
                                def_value: 1869
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.14
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.62
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1136
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 342
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 220
                            },
                            {
                                def: "DEF",
                                def_value: 1959
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.26
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.72
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1179
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 354
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 225
                            },
                            {
                                def: "DEF",
                                def_value: 2051
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.41
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1228
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 369
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 229
                            },
                            {
                                def: "DEF",
                                def_value: 2146
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.53
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.94
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1276
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 384
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 234
                            },
                            {
                                def: "DEF",
                                def_value: 2242
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.67
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.06
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1325
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 398
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 239
                            },
                            {
                                def: "DEF",
                                def_value: 2340
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.82
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.18
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1373
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 413
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 243
                            },
                            {
                                def: "DEF",
                                def_value: 2441
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.96
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.3
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Grenade Throw",
                        element_type: "Fire",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/40fda38dfa17be7aff4a6209a8c7ee26",
                        skill_description: "Throw a grenade forward, dealing Burst damage.",
                    },
                    {
                        skill_type: "Active Skill",
                        skill_name: "Overclock",
                        element_type: "Fire",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/2be7856296eb7ba788084605fa557cc4",
                        skill_description: "Gains Overclock. Inflicts Burn on enemies damaged by Grenade Throw or Overkill. Burn deals continuous damage for a certain period of time.",
                    },
                    {
                        skill_type: "Active Skill",
                        skill_name: "Traction Grenade",
                        element_type: "Fire",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/5b29fba44f49f8531ce43c2fd6b2c848",
                        skill_description: "Throws a Traction Grenade forward to inflict Towed on enemies within range.",
                    },
                    {
                        skill_type: "Active Skill",
                        skill_name: "Overkill",
                        element_type: "Fire",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/b3625d8bb410f48fbefe5caf8f2d6872",
                        skill_description: "Equips a Unique Weapon. While the Unique Weapon is equipped, MP is continuously consumed. When MP runs out, the weapon is unequipped. Enemies hit by Unique Weapon bullets take Burst DMG. The impact point of the Unique Weapon creates a damage zone, dealing continuous damage.",
                    },
                    {
                        skill_type: "Passive Skill",
                        skill_name: "Close Call",
                        element_type: "Fire",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/f7d84e8a94df0511683922ab007c38f7",
                        skill_description: "Upon receiving fatal damage, gains Close Call. While Close Call is active, grants DMG Immunity and Immobilization. When Close Call ends, recovers HP proportional to own Max HP."
                    },
                ]
        }
    },
    {
        id: "101000002",
        descendant_name: "Ajax",
        slug: "ajax",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/74d88097b3547c406a36651c9378638c",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 238
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 63
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 100
                            },
                            {
                                def: "DEF",
                                def_value: 281
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.54
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 240
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 64
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 101
                            },
                            {
                                def: "DEF",
                                def_value: 329
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.47
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 244
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 66
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 102
                            },
                            {
                                def: "DEF",
                                def_value: 381
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.57
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.48
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 250
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 69
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 103
                            },
                            {
                                def: "DEF",
                                def_value: 436
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.59
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 258
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 73
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 104
                            },
                            {
                                def: "DEF",
                                def_value: 493
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.62
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.53
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 268
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 77
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 105
                            },
                            {
                                def: "DEF",
                                def_value: 553
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.66
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.56
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 283
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 82
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 106
                            },
                            {
                                def: "DEF",
                                def_value: 617
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.73
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 300
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 87
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 107
                            },
                            {
                                def: "DEF",
                                def_value: 687
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.78
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.66
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 319
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 93
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 108
                            },
                            {
                                def: "DEF",
                                def_value: 763
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.84
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.71
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 334
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 99
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 109
                            },
                            {
                                def: "DEF",
                                def_value: 845
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.92
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 359
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 106
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 110
                            },
                            {
                                def: "DEF",
                                def_value: 939
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.84
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 384
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 113
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 111
                            },
                            {
                                def: "DEF",
                                def_value: 1047
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.06
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.89
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 415
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 122
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 113
                            },
                            {
                                def: "DEF",
                                def_value: 1164
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.15
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.97
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 452
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 133
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 115
                            },
                            {
                                def: "DEF",
                                def_value: 1284
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.05
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 483
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 142
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 116
                            },
                            {
                                def: "DEF",
                                def_value: 1410
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.13
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 520
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 153
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 118
                            },
                            {
                                def: "DEF",
                                def_value: 1541
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.21
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 557
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 164
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 120
                            },
                            {
                                def: "DEF",
                                def_value: 1678
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.55
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.3
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 594
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 175
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 122
                            },
                            {
                                def: "DEF",
                                def_value: 1820
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.64
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.38
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 637
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 188
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 124
                            },
                            {
                                def: "DEF",
                                def_value: 1967
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.78
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.49
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 674
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 199
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 125
                            },
                            {
                                def: "DEF",
                                def_value: 2120
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.87
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.57
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 717
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 212
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 127
                            },
                            {
                                def: "DEF",
                                def_value: 2278
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.99
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.67
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 761
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 224
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 130
                            },
                            {
                                def: "DEF",
                                def_value: 2441
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.11
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.77
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 804
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 237
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 133
                            },
                            {
                                def: "DEF",
                                def_value: 2610
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.24
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 859
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 254
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 135
                            },
                            {
                                def: "DEF",
                                def_value: 2784
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.01
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 903
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 266
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 138
                            },
                            {
                                def: "DEF",
                                def_value: 2963
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.52
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.11
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 952
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 281
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 141
                            },
                            {
                                def: "DEF",
                                def_value: 3147
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.65
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.22
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1002
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 295
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 144
                            },
                            {
                                def: "DEF",
                                def_value: 3338
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.8
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.34
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1057
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 312
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 146
                            },
                            {
                                def: "DEF",
                                def_value: 3533
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.95
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.47
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1107
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 326
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 149
                            },
                            {
                                def: "DEF",
                                def_value: 3733
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.08
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.58
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1156
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 341
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 152
                            },
                            {
                                def: "DEF",
                                def_value: 3940
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.23
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.7
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1218
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 359
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 155
                            },
                            {
                                def: "DEF",
                                def_value: 4151
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.4
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1267
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 374
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 158
                            },
                            {
                                def: "DEF",
                                def_value: 4367
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.54
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.96
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1329
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 392
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 162
                            },
                            {
                                def: "DEF",
                                def_value: 4589
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.71
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.1
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1385
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 408
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 165
                            },
                            {
                                def: "DEF",
                                def_value: 4817
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.86
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.23
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1447
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 427
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 169
                            },
                            {
                                def: "DEF",
                                def_value: 5049
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.04
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.38
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1502
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 443
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 173
                            },
                            {
                                def: "DEF",
                                def_value: 5286
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.2
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.51
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1564
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 461
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 176
                            },
                            {
                                def: "DEF",
                                def_value: 5530
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.37
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.65
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1626
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 479
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 180
                            },
                            {
                                def: "DEF",
                                def_value: 5777
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.54
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.79
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1688
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 498
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 184
                            },
                            {
                                def: "DEF",
                                def_value: 6032
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.72
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.94
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1749
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 516
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 187
                            },
                            {
                                def: "DEF",
                                def_value: 6291
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.88
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 4.08
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Orbit Barrier",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/32d5aad86c4fd613c91b03f24c984bf8",
                        skill_description: "Create a Barrier in front that blocks damage.\nWhen the Barrier is hit, inflicts Reflection Damage on the enemy.\nWhen using an Enhanced Skill, enhances Reflection Damage. Max Reflection Damage Rate is based on DEF, followed by Skill Power.",
                    },
                    {
                        skill_type: "Active Skill",
                        skill_name: "Void Walk",
                        element_type: "Non-Attribute",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/8b2776cacdd9785ea322b1b6f05c5a3f",
                        skill_description: "Jumps forward and deals damage upon landing, inflicting Stun.\nWhen using an Enhanced Skill grants the Leap Enhancement effect.",
                    },
                    {
                        skill_type: "Active Skill",
                        skill_name: "Expulsion",
                        element_type: "Non-Attribute",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/0d679bd5e3336f8d85e20b4021d42c26",
                        skill_description: "Deals damage to nearby enemies and inflicts Knockback. When using an Enhanced Skill increases base damage and range.",
                    },
                    {
                        skill_type: "Active Skill",
                        skill_name: "Hyper Cube",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/52241d69bb871d664802af9d811c14f7",
                        skill_description: "Create a dome-shaped Barrier that blocks damage.\nWhen using an Enhanced Skill grants the Barrier Enhancement effect to allies.",
                    },
                    {
                        skill_type: "Passive Skill",
                        skill_name: "Event Horizon",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/0e2d7cfd1cd7ac6e9e86f7cc9f058d22",
                        skill_description: "When the skill ends, gains Void Energy.\nThe amount of Void Energy determines Singularity effect.\nWhen Void Energy is at maximum, use an Enhanced Skill. When using an Enhanced Skill grants additional effects to the existing skill.\nCannot gain Void Energy while using an Enhanced Skill, and Void Energy is consumed if Out of Combat."
                    },
                ]
        }
    },
    {
        id: "101000003",
        descendant_name: "Viessa",
        slug: "viessa",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/b2be3dc734d2fb10e694de951a5d1079",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 106
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 52
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 100
                            },
                            {
                                def: "DEF",
                                def_value: 156
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.54
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 108
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 53
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 101
                            },
                            {
                                def: "DEF",
                                def_value: 158
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.47
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 111
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 56
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 102
                            },
                            {
                                def: "DEF",
                                def_value: 162
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.57
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.48
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 115
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 60
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 103
                            },
                            {
                                def: "DEF",
                                def_value: 168
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.59
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 120
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 64
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 104
                            },
                            {
                                def: "DEF",
                                def_value: 176
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.62
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.53
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 127
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 70
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 105
                            },
                            {
                                def: "DEF",
                                def_value: 186
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.66
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.56
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 134
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 77
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 106
                            },
                            {
                                def: "DEF",
                                def_value: 197
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.73
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 142
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 82
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 107
                            },
                            {
                                def: "DEF",
                                def_value: 210
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.78
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.66
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 152
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 87
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 108
                            },
                            {
                                def: "DEF",
                                def_value: 225
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.84
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.71
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 168
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 95
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 109
                            },
                            {
                                def: "DEF",
                                def_value: 241
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.92
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 180
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 102
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 110
                            },
                            {
                                def: "DEF",
                                def_value: 261
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.84
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 193
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 109
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 111
                            },
                            {
                                def: "DEF",
                                def_value: 291
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.06
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.89
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 208
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 118
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 113
                            },
                            {
                                def: "DEF",
                                def_value: 323
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.15
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.97
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 227
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 128
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 115
                            },
                            {
                                def: "DEF",
                                def_value: 357
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.05
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 242
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 137
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 116
                            },
                            {
                                def: "DEF",
                                def_value: 392
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.13
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 261
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 147
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 118
                            },
                            {
                                def: "DEF",
                                def_value: 428
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.21
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 280
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 158
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 120
                            },
                            {
                                def: "DEF",
                                def_value: 466
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.55
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.3
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 298
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 168
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 122
                            },
                            {
                                def: "DEF",
                                def_value: 506
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.64
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.38
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 320
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 180
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 124
                            },
                            {
                                def: "DEF",
                                def_value: 547
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.78
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.49
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 339
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 191
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 125
                            },
                            {
                                def: "DEF",
                                def_value: 589
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.87
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.57
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 360
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 204
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 127
                            },
                            {
                                def: "DEF",
                                def_value: 633
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.99
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.67
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 382
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 216
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 130
                            },
                            {
                                def: "DEF",
                                def_value: 678
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.11
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.77
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 404
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 228
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 133
                            },
                            {
                                def: "DEF",
                                def_value: 725
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.24
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 432
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 244
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 135
                            },
                            {
                                def: "DEF",
                                def_value: 774
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.01
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 453
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 256
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 138
                            },
                            {
                                def: "DEF",
                                def_value: 823
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.52
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.11
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 478
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 270
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 141
                            },
                            {
                                def: "DEF",
                                def_value: 875
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.65
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.22
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 503
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 284
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 144
                            },
                            {
                                def: "DEF",
                                def_value: 928
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.8
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.34
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 531
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 300
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 146
                            },
                            {
                                def: "DEF",
                                def_value: 982
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.95
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.47
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 556
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 313
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 149
                            },
                            {
                                def: "DEF",
                                def_value: 1037
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.08
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.58
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 581
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 327
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 152
                            },
                            {
                                def: "DEF",
                                def_value: 1095
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.23
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.7
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 612
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 345
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 155
                            },
                            {
                                def: "DEF",
                                def_value: 1154
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.4
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 636
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 359
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 158
                            },
                            {
                                def: "DEF",
                                def_value: 1214
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.54
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.96
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 667
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 376
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 162
                            },
                            {
                                def: "DEF",
                                def_value: 1275
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.71
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.1
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 695
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 392
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 165
                            },
                            {
                                def: "DEF",
                                def_value: 1339
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.86
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.23
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 726
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 410
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 169
                            },
                            {
                                def: "DEF",
                                def_value: 1403
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.04
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.38
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 754
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 425
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 173
                            },
                            {
                                def: "DEF",
                                def_value: 1469
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.2
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.51
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 785
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 443
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 176
                            },
                            {
                                def: "DEF",
                                def_value: 1537
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.37
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.65
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 816
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 460
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 180
                            },
                            {
                                def: "DEF",
                                def_value: 1606
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.54
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.79
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 847
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 478
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 184
                            },
                            {
                                def: "DEF",
                                def_value: 1676
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.72
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.94
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 878
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 495
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 187
                            },
                            {
                                def: "DEF",
                                def_value: 1748
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.88
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 4.08
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Frost Shards",
                        element_type: "Chill",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/c707b1cb867017488d0bd9a606c64083",
                        skill_description: "Fires Frost Shards to deal damage to hit enemies and Burst damage to nearby enemies. Inflicts Ice Shackle on hit enemies."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Frost Road",
                        element_type: "Chill",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/54a2d0af721c5f89c0b50f3c5f040c7a",
                        skill_description: "Activates the Frost Road state. \nWhile in the Frost Road state, creates Ice Sheets on the ground touched. Enemies that touch the Ice Sheets are inflicted with Ice Shackle."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Cold Snap",
                        element_type: "Chill",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/432aed3fe47809f57b7f2292ee1ec76a",
                        skill_description: "Launches Chill toward the front. Inflicts damage and Ice Shackle on enemies that come into contact with Chill."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Blizzard",
                        element_type: "Chill",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/223e856846a532c44e1a566104d912e4",
                        skill_description: "Creates a Blizzard at a designated location. Enemies within the Blizzard take continuous damage. When the Blizzard ends, it explodes and deals Burst DMG to nearby enemies. Inflicts Ice Shackle on hit enemies."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Ice Sphere",
                        element_type: "Chill",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/3fbbc5263d8466f5675b2228a3d72439",
                        skill_description: "Upon using a skill to put an enemy into an Ice Shackle stage, creates an Ice Sphere that flies around nearby.\nThe Ice Sphere that is created flies at a nearby enemy, dealing damage to the hit enemy and Burst damage to nearby enemies.\nThe hit enemy is inflicted with Ice Shackle.\nIce Shackle decreases the Speed, and increases in stage when the effect stacks."
                      },
                ]
        }
    },
    {
        id: "101000004",
        descendant_name: "Ultimate Lepic",
        slug: "ultimate-lepic",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/e2f1ec94648d91eede78f377c3b7aa19",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 187
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 56
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 130
                            },
                            {
                                def: "DEF",
                                def_value: 230
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 189
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 57
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 131
                            },
                            {
                                def: "DEF",
                                def_value: 248
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 193
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 59
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 132
                            },
                            {
                                def: "DEF",
                                def_value: 278
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 198
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 62
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 134
                            },
                            {
                                def: "DEF",
                                def_value: 311
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 204
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 65
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 135
                            },
                            {
                                def: "DEF",
                                def_value: 346
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.53
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 212
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 70
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 136
                            },
                            {
                                def: "DEF",
                                def_value: 382
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 220
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 75
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 137
                            },
                            {
                                def: "DEF",
                                def_value: 420
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.6
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 231
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 81
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 138
                            },
                            {
                                def: "DEF",
                                def_value: 460
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.65
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.54
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 246
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 87
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 139
                            },
                            {
                                def: "DEF",
                                def_value: 504
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.7
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.58
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 268
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 94
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 141
                            },
                            {
                                def: "DEF",
                                def_value: 552
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.74
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 288
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 101
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 142
                            },
                            {
                                def: "DEF",
                                def_value: 604
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 308
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 108
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 144
                            },
                            {
                                def: "DEF",
                                def_value: 663
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.86
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.72
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 332
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 117
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 147
                            },
                            {
                                def: "DEF",
                                def_value: 731
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.94
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 362
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 127
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 149
                            },
                            {
                                def: "DEF",
                                def_value: 807
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.03
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.86
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 387
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 136
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 151
                            },
                            {
                                def: "DEF",
                                def_value: 886
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.08
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.9
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 417
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 146
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 154
                            },
                            {
                                def: "DEF",
                                def_value: 968
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.18
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.98
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 446
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 157
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 156
                            },
                            {
                                def: "DEF",
                                def_value: 1054
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.04
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 476
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 167
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 158
                            },
                            {
                                def: "DEF",
                                def_value: 1143
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.12
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 511
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 179
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 161
                            },
                            {
                                def: "DEF",
                                def_value: 1236
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.2
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 540
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 189
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 163
                            },
                            {
                                def: "DEF",
                                def_value: 1332
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.54
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.28
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 575
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 202
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 165
                            },
                            {
                                def: "DEF",
                                def_value: 1431
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.63
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.36
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 610
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 214
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 169
                            },
                            {
                                def: "DEF",
                                def_value: 1533
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.73
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.44
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 644
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 226
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 173
                            },
                            {
                                def: "DEF",
                                def_value: 1640
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.82
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.52
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 689
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 242
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 176
                            },
                            {
                                def: "DEF",
                                def_value: 1749
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.94
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.62
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 724
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 254
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 180
                            },
                            {
                                def: "DEF",
                                def_value: 1862
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.04
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.7
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 763
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 268
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 183
                            },
                            {
                                def: "DEF",
                                def_value: 1977
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.16
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.8
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 803
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 281
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 187
                            },
                            {
                                def: "DEF",
                                def_value: 2097
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.26
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 847
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 297
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 190
                            },
                            {
                                def: "DEF",
                                def_value: 2219
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 887
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 311
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 194
                            },
                            {
                                def: "DEF",
                                def_value: 2345
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.5
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.08
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 927
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 325
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 197
                            },
                            {
                                def: "DEF",
                                def_value: 2475
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.64
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.2
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 976
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 342
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 201
                            },
                            {
                                def: "DEF",
                                def_value: 2608
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.76
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1016
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 356
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 206
                            },
                            {
                                def: "DEF",
                                def_value: 2744
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.88
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.4
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1065
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 373
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 210
                            },
                            {
                                def: "DEF",
                                def_value: 2883
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.5
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1110
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 389
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 215
                            },
                            {
                                def: "DEF",
                                def_value: 3026
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.14
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.62
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1159
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 407
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 220
                            },
                            {
                                def: "DEF",
                                def_value: 3172
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.26
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.72
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1204
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 422
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 225
                            },
                            {
                                def: "DEF",
                                def_value: 3321
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.41
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1254
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 439
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 229
                            },
                            {
                                def: "DEF",
                                def_value: 3474
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.53
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.94
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1303
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 457
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 234
                            },
                            {
                                def: "DEF",
                                def_value: 3630
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.67
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.06
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1353
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 474
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 239
                            },
                            {
                                def: "DEF",
                                def_value: 3789
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.82
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.18
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1402
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 491
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 243
                            },
                            {
                                def: "DEF",
                                def_value: 3953
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.96
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.3
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Grenade Throw",
                        element_type: "Fire",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/b0aae25dab0555a9866c9197a1b4de7f",
                        skill_description: "Throw a grenade forward, dealing Burst damage."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Overclock",
                        element_type: "Fire",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/2118622f5b0d167315f2bd643c066eae",
                        skill_description: "Gains Overclock. Inflicts Burn on enemies damaged by Grenade Throw or Overkill. Burn deals continuous damage for a certain period of time."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Traction Grenade",
                        element_type: "Fire",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/8bf813d0dc712767dfde08c7209a71b7",
                        skill_description: "Throws a Traction Grenade forward to inflict Towed on enemies within range."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Overkill",
                        element_type: "Fire",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/6aab485ab7359a6a0eafd6eb518cab3e",
                        skill_description: "Equips a Unique Weapon. While the Unique Weapon is equipped, MP is continuously consumed. When MP runs out, the weapon is unequipped. Enemies hit by Unique Weapon bullets take Burst DMG. The impact point of the Unique Weapon creates a damage zone, dealing continuous damage."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Close Call",
                        element_type: "Fire",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/beb966f4d74cf223e6a83a6ec661227a",
                        skill_description: "Upon receiving fatal damage, gains Close Call. While \nClose Call is active, grants DMG Immunity and Immobilization. When \nClose Call ends, recovers HP proportional to own Max HP."
                      },
                ]
        }
    },
    {
        id: "101000005",
        descendant_name: "Jayber",
        slug: "jayber",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/79c5cbb60e2e06209a0a515775cfa3b6",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 187
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 56
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 130
                            },
                            {
                                def: "DEF",
                                def_value: 230
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 189
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 57
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 131
                            },
                            {
                                def: "DEF",
                                def_value: 248
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 193
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 59
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 132
                            },
                            {
                                def: "DEF",
                                def_value: 278
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 198
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 62
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 134
                            },
                            {
                                def: "DEF",
                                def_value: 311
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 204
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 65
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 135
                            },
                            {
                                def: "DEF",
                                def_value: 346
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.53
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 212
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 70
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 136
                            },
                            {
                                def: "DEF",
                                def_value: 382
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 220
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 75
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 137
                            },
                            {
                                def: "DEF",
                                def_value: 420
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.6
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 231
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 81
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 138
                            },
                            {
                                def: "DEF",
                                def_value: 460
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.65
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.54
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 246
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 87
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 139
                            },
                            {
                                def: "DEF",
                                def_value: 504
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.7
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.58
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 268
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 94
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 141
                            },
                            {
                                def: "DEF",
                                def_value: 552
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.74
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 288
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 101
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 142
                            },
                            {
                                def: "DEF",
                                def_value: 604
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 308
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 108
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 144
                            },
                            {
                                def: "DEF",
                                def_value: 663
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.86
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.72
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 332
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 117
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 147
                            },
                            {
                                def: "DEF",
                                def_value: 731
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.94
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 362
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 127
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 149
                            },
                            {
                                def: "DEF",
                                def_value: 807
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.03
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.86
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 387
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 136
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 151
                            },
                            {
                                def: "DEF",
                                def_value: 886
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.08
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.9
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 417
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 146
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 154
                            },
                            {
                                def: "DEF",
                                def_value: 968
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.18
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.98
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 446
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 157
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 156
                            },
                            {
                                def: "DEF",
                                def_value: 1054
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.04
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 476
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 167
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 158
                            },
                            {
                                def: "DEF",
                                def_value: 1143
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.12
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 511
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 179
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 161
                            },
                            {
                                def: "DEF",
                                def_value: 1236
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.2
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 540
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 189
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 163
                            },
                            {
                                def: "DEF",
                                def_value: 1332
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.54
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.28
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 575
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 202
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 165
                            },
                            {
                                def: "DEF",
                                def_value: 1431
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.63
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.36
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 610
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 214
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 169
                            },
                            {
                                def: "DEF",
                                def_value: 1533
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.73
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.44
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 644
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 226
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 173
                            },
                            {
                                def: "DEF",
                                def_value: 1640
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.82
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.52
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 689
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 242
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 176
                            },
                            {
                                def: "DEF",
                                def_value: 1749
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.94
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.62
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 724
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 254
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 180
                            },
                            {
                                def: "DEF",
                                def_value: 1862
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.04
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.7
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 763
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 268
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 183
                            },
                            {
                                def: "DEF",
                                def_value: 1977
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.16
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.8
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 803
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 281
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 187
                            },
                            {
                                def: "DEF",
                                def_value: 2097
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.26
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 847
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 297
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 190
                            },
                            {
                                def: "DEF",
                                def_value: 2219
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 887
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 311
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 194
                            },
                            {
                                def: "DEF",
                                def_value: 2345
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.5
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.08
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 927
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 325
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 197
                            },
                            {
                                def: "DEF",
                                def_value: 2475
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.64
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.2
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 976
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 342
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 201
                            },
                            {
                                def: "DEF",
                                def_value: 2608
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.76
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1016
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 356
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 206
                            },
                            {
                                def: "DEF",
                                def_value: 2744
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.88
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.4
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1065
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 373
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 210
                            },
                            {
                                def: "DEF",
                                def_value: 2883
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.5
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1110
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 389
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 215
                            },
                            {
                                def: "DEF",
                                def_value: 3026
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.14
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.62
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1159
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 407
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 220
                            },
                            {
                                def: "DEF",
                                def_value: 3172
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.26
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.72
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1204
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 422
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 225
                            },
                            {
                                def: "DEF",
                                def_value: 3321
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.41
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1254
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 439
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 229
                            },
                            {
                                def: "DEF",
                                def_value: 3474
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.53
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.94
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1303
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 457
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 234
                            },
                            {
                                def: "DEF",
                                def_value: 3630
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.67
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.06
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1353
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 474
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 239
                            },
                            {
                                def: "DEF",
                                def_value: 3789
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.82
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.18
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1402
                            },
                            {
                                max_shield: "Max Shield",
                                shield_value: 491
                            },
                            {
                                max_mp: "Max MP",
                                mp_value: 243
                            },
                            {
                                def: "DEF",
                                def_value: 3953
                            },
                            {
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.96
                            },
                            {
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.3
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Assault Turret",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/38891f4ba741b9a0f98cffd0158e3cf2",
                        skill_description: "Summons an Assault Turret. The Assault Turret remains on the battlefield to attack enemies.\nWhen hit by a Unique Weapon, it creates a Damage Zone dealing continuous damage to nearby enemies."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Medical Turret",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/023ca99b5d0c19f5916b10a02b4da57b",
                        skill_description: "Summons a Medical Turret. The Medical Turret recovers the HP of allies within the Recovery Zone.\nWhen hit by a Unique Weapon, it creates a Taunt Zone, taunting enemies within the area."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Multi-purpose Gun",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/21130adc8f21b739c67d57ba63de70b3",
                        skill_description: "Equip a Unique Weapon. Hitting a turret with Unique Weapon creates a Turret Zone. Additional hits to the turret within this zone recover the turret's HP and increase its duration.\nWhen hitting enemies, inflicts damage.\nThe cooldown is adjusted based on the number of bullets fired."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Reactivate",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/2b2c9f10da3760e4f04db8ed76d08ddc",
                        skill_description: "Detonates a summoned turret, granting Overhaul. The self-destruction releases multiple fragments around, dealing Explosion DMG.\nWhile holding Overhaul, summon turrets within the Turret Zone."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Turret Sync",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/8b6e3ef794e27448fcf9925cb4d26b1c",
                        skill_description: "When an Assault Turret and a Medical Turret are both summoned, gains Turret Sync."
                      },
                ]
        }
    },
    {
        id: "101000006",
        descendant_name: "Bunny",
        slug: "bunny",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/eaffb014c98c36d8b30d90d7778bb840",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Thrill Bomb",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/cdac45aafb7e833720dae97248346781",
                        skill_description: "Creates a Thrill Bomb that targets the nearest enemy within range, dealing damage. This damage increases proportionally to the amount of Electricity.\nInflicts Electrocution on enemies hit."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Speed of Light",
                        element_type: "Electric",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/f4e715174c1c4583d39e04f0fb26965b",
                        skill_description: "Always moves by Sprinting, and increases Sprint Speed.\nGains Speed of Light. Speed of Light additionally gains Electricity while moving."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Lightning Emission",
                        element_type: "Electric",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/07178abf6a0820297077cfdbd54bb8e7",
                        skill_description: "Activates the Lightning Emission state. Deals damage to nearby enemies when moving a certain distance, increases damage proportional to the amount of Electricity. Inflicts Electrocution on enemies hit."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Maximum Power",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/a202f90bfd757abe17348e19df57ce23",
                        skill_description: "Discharges electricity forward. Deals damage on enemies that come into contact with the electricity, with the damage increasing gradually based on the discharge time. Ends when Electricity runs out."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Rabbit Foot",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/9825a73c0c55080110aaeac4afd204ea",
                        skill_description: "Deals damage to nearby enemies upon landing after a Double Jump.\nGains Electricity proportional to the travel distance.\nIf there is no movement for a certain period, Electricity is gradually consumed."
                      },
                ]
        }
    },
    {
        id: "101000007",
        descendant_name: "Ultimate Ajax",
        slug: "ultimate-ajax",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/118d86964484b25593b9a4dfe62e96c1",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Orbit Barrier",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/c2ee02252148416211c20c3f36928a50",
                        skill_description: "Create a Barrier in front that blocks damage.\nWhen the Barrier is hit, inflicts Reflection Damage on the enemy.\nWhen using an Enhanced Skill, enhances Reflection Damage. Max Reflection Damage Rate is based on DEF, followed by Skill Power."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Void Walk",
                        element_type: "Non-Attribute",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/f54d444839fab8d0b6f205b06563f840",
                        skill_description: "Jumps forward and deals damage upon landing, inflicting Stun.\nWhen using an Enhanced Skill grants the Leap Enhancement effect."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Expulsion",
                        element_type: "Non-Attribute",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/ce942874a0ff9d82ced707adc3dd7009",
                        skill_description: "Deals damage to nearby enemies and inflicts Knockback. When using an Enhanced Skill increases base damage and range."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Hyper Cube",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/692e40f1618752d062dc5db10ecf4c93",
                        skill_description: "Create a dome-shaped Barrier that blocks damage.\nWhen using an Enhanced Skill grants the Barrier Enhancement effect to allies."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Event Horizon",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/44f47b9eeff9cae15a1899809f96a15a",
                        skill_description: "When the skill ends, gains Void Energy.\nThe amount of Void Energy determines Singularity effect.\nWhen Void Energy is at maximum, use an Enhanced Skill. When using an Enhanced Skill grants additional effects to the existing skill.\nCannot gain Void Energy while using an Enhanced Skill, and Void Energy is consumed if Out of Combat."
                      },
                ]
        }
    },
    {
        id: "101000008",
        descendant_name: "Freyna",
        slug: "freyna",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/6737a4c79a8a2fe617cb458031e11358",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Venom Trauma",
                        element_type: "Toxic",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/334e101ed0854c677eed2ea84da3838d",
                        skill_description: "Fires a Toxic Bullet, dealing damage to hit enemies.\nThe Toxic Bullet explodes, creating a Toxic Puddle and inflicting Room 0 Trauma on those it hits.\nRoom 0 Trauma inflicts continuous damage and inflicts Poison to nearby enemies."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Defense Mechanism",
                        element_type: "Toxic",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/7c7ce7d84e999b1fe4b320aa640d1607",
                        skill_description: "Gains Plague Bodyarmor. Inflicts Room 0 Trauma on the attacking enemy.\nRoom 0 Trauma inflicts continuous damage and applies Poison to nearby enemies."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Putrid Venom",
                        element_type: "Toxic",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/180551122e3d66847c60ca735993ba7d",
                        skill_description: "Throw poison to create a Toxic Swamp.\nEnemies that touch the Toxic Swamp take continuous damage and are inflicted with Poison and Venom-Soaked.\nEnemies with Venom-Soaked leave Toxic Footprints as they move.\nEnemies who touch the Toxic Footprints are inflicted with Poison."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Venom Baptism",
                        element_type: "Toxic",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/fa5560f7606c13ba81059be963858671",
                        skill_description: "Equip a Unique Weapon. Unequipped after all bullets are consumed or after a certain period of time has passed.\nEnemies hit by the Unique Weapon bullets are inflicted with Room 0 Trauma.\nRoom 0 Trauma deals continuous damage and inflicts Poison on nearby enemies."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Contagion Links",
                        element_type: "Toxic",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/a85d0fb171b15bf9c52f278e9abe09c3",
                        skill_description: "Increases Toxic Skill Power by the number of nearby enemies inflicted with Poison."
                      },
                ]
        }
    },
    {
        id: "101000009",
        descendant_name: "Gley",
        slug: "gley",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/d72fa90551e23916f18a81dbd4030d8f",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Frenzied",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/1c05e1f9e996556f0c168e1d4a763bd6",
                        skill_description: "In Frenzied state. In Frenzied state, increases Firearm ATK and Penetration, but reduces HP Recovery."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Life Siphon",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/81752069cc9354977b288b76e3d31b25",
                        skill_description: "Deals damage to targets within range and recovers HP.\nHP Recovery amount increases based on the number of enemies hit.\nIn Frenzied state, deals increased DMG proportionally to HP.\nIn Non-Frenzied state, gains Vigor. Vigor stacks proportionally to the number of enemies hit."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Increased Sensory",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/e3f866d6365ea9f247dbdec5cbfa048e",
                        skill_description: "When in Frenzied state, applies Maximize Lethality during which bullets are not consumed.\nWhen in Non-Frenzied state, applies Maximize Recovery during which Life Sphere generation is increased."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Massacre",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/73db251cc8d82311f137b149f55bb817",
                        skill_description: "Equip a Unique Weapon. The number of bullets loaded is affected by the amount of Power of Life owned.\nWhen hitting an enemy with the Unique Weapon, deals damage and inflicts additional effects.\nIn Frenzied state, increases additional DMG proportionally to HP. \nIn Non-Frenzied state, inflicts Stun on enemies that are hit."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Thirst",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/4a51831b6ae10ddd0ae4d5374aeddfa2",
                        skill_description: "Cannot have Shield or MP.\nIn Non-Frenzied state, reduces Incoming DMG.\nDefeated enemies have a chance to drop Life Spheres which, upon contact, grant Power of Life.\nUpon acquiring Power of Life, recovers HP."
                      },
                ]
        }
    },
    {
        id: "101000010",
        descendant_name: "Ultimate Viessa",
        slug: "ultimate-viessa",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/665a53a9b478437b13f7d6ae5f5322db",
        levels: {
            create: [
                {
                    level: 1,
                },
                {
                    level: 2,
                },
                {
                    level: 3,
                },
                {
                    level: 4,
                },
                {
                    level: 5,
                },
                {
                    level: 6,
                },
                {
                    level: 7,
                },
                {
                    level: 8,
                },
                {
                    level: 9,
                },
                {
                    level: 10,
                },
                {
                    level: 11,
                },
                {
                    level: 12,
                },
                {
                    level: 13,
                },
                {
                    level: 14,
                },
                {
                    level: 15,
                },
                {
                    level: 16,
                },
                {
                    level: 17,
                },
                {
                    level: 18,
                },
                {
                    level: 19,
                },
                {
                    level: 20,
                },
                {
                    level: 21,
                },
                {
                    level: 22,
                },
                {
                    level: 23,
                },
                {
                    level: 24,
                },
                {
                    level: 25,
                },
                {
                    level: 26,
                },
                {
                    level: 27,
                },
                {
                    level: 28,
                },
                {
                    level: 29,
                },
                {
                    level: 30,
                },
                {
                    level: 31,
                },
                {
                    level: 32,
                },
                {
                    level: 33,
                },
                {
                    level: 34,
                },
                {
                    level: 35,
                },
                {
                    level: 36,
                },
                {
                    level: 37,
                },
                {
                    level: 38,
                },
                {
                    level: 39,
                },
                {
                    level: 40,
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Frost Shards",
                        element_type: "Chill",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/58b38aaffa179e12f57725dfbf1db9e8",
                        skill_description: "Fires Frost Shards to deal damage to hit enemies and Burst damage to nearby enemies. Inflicts Ice Shackle on hit enemies."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Frost Road",
                        element_type: "Chill",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/ced304c51d10f92b4a9d4ddc06fb0c38",
                        skill_description: "Activates the Frost Road state. \nWhile in the Frost Road state, creates Ice Sheets on the ground touched. Enemies that touch the Ice Sheets are inflicted with Ice Shackle."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Cold Snap",
                        element_type: "Chill",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/37d7c4a211a07d253dc727bda08ea33e",
                        skill_description: "Launches Chill toward the front. Inflicts damage and Ice Shackle on enemies that come into contact with Chill."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Blizzard",
                        element_type: "Chill",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/9ff3a5b613e57b44fba1903d27973606",
                        skill_description: "Creates a Blizzard at a designated location. Enemies within the Blizzard take continuous damage. When the Blizzard ends, it explodes and deals Burst DMG to nearby enemies. Inflicts Ice Shackle on hit enemies."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Ice Sphere",
                        element_type: "Chill",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/0824c7efd00accc5c2bf1b0d64d293cb",
                        skill_description: "Upon using a skill to put an enemy into an Ice Shackle stage, creates an Ice Sphere that flies around nearby.\nThe Ice Sphere that is created flies at a nearby enemy, dealing damage to the hit enemy and Burst damage to nearby enemies.\nThe hit enemy is inflicted with Ice Shackle.\nIce Shackle decreases the Speed, and increases in stage when the effect stacks."
                      },
                ]
        }
    },
    {
        id: "101000011",
        descendant_name: "Sharen",
        slug: "sharen",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/f14fdb3a55fc96e409a10b5dfa2b31b0",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Cutoff Beam",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/50f88d96a487ccfa4113a21fb9b521db",
                        skill_description: "Inflicts damage and Electrocution on enemies in front of Cutoff Beam."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Active Camouflage",
                        element_type: "Electric",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/25baa8e537b88778fb30ef449354b00d",
                        skill_description: "Activates Active Camouflage, which hides self from enemy sight. Attacking an enemy while in this state immediately ends Active Camouflage, and activates Ambush."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Shock Nuts",
                        element_type: "Electric",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/9f35896f2dcbc8d2b4ad13dbb7dddb93",
                        skill_description: "Fires built-in Impact Rounds from the arm forward, inflicting Stun."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Flash Shortsword",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/20a30de41fd0a6d629d99842e54b22f3",
                        skill_description: "Generates multiple Shortswords and fires them at a designated target. Hit enemies take Burst damage and are inflicted with Electrocution. Fire using the attack button and cancel using the aim button.\nCanceling does not trigger a cooldown."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Assassinator",
                        element_type: "Electric",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/aeb90bf9a872f28840ad0052c8918a3b",
                        skill_description: "When in Ambush state, killing an enemy by using a skill resets the Active Camouflage cooldown. This effect gains cooldown. When attacking, increases DMG against enemies who are not targeting the caster."
                      },
                ]
        }
    },
    {
        id: "101000012",
        descendant_name: "Blair",
        slug: "blair",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/1a5ae4f83650ec541226f55c06deef64",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Blaze Up",
                        element_type: "Fire",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/d15f8d29541f41a1eebb216ee0a34451",
                        skill_description: "Spews fire and creates a Flame Zone on the ground. Enemies standing in the Flame Zone receive continuous damage and are inflicted with Burn."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Extinguish",
                        element_type: "Fire",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/bcc737a37947c231a2363b3327dba208",
                        skill_description: "Retrieves the Flame Zones created on the battlefield and recovers MP in proportion to the amount retrieved. On retrieval, gains Taste of Aggression.\nFlame Zones summoned earlier are retrieved first."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Burn Taste",
                        element_type: "Fire",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/5f88adcb0b93d31ab7196720d717bec9",
                        skill_description: "Fires a flame forward . Enemies hit by the flame take continuous damage and are inflicted with Burn."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Deadly Cuisine",
                        element_type: "Fire",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/d990fc8e2c2fef4540f44a7a0b6f802c",
                        skill_description: "Fires a Giant Fireball forward. On explosion, the Giant Fireball deals Burst damage to nearby enemies and divides into multiple Small Fireballs, which create additional explosions. \nSmall Fireballs deal Burst damage and inflict Burn on nearby enemies, and create Flame Zones."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Pitmaster",
                        element_type: "Fire",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/a2e61305f53754a2eececfc5dcf4a366",
                        skill_description: "When attacking enemies inflicted with Burn, increases Skill Critical Hit Damage.\nIncreases Skill Critical Hit Rate based on the number of Flame Zones created on the battlefield."
                      },
                ]
        }
    },
    {
        id: "101000013",
        descendant_name: "Valby",
        slug: "valby",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/f1236f2af539bd14c431b5befdd120f4",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Bubble Bullet",
                        element_type: "Non-Attribute",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/6ff1c0dbd44f95627835afffd5c3a593",
                        skill_description: "Fires a bouncing Bubble Bullet. Where the Bubble Bullet impacts, it creates a Small Puddle at the point of collision.\nEnemies who touch the Small Puddle take continuous damage and are inflicted with Laundry.\nThe Bubble Bullet explodes upon hitting an enemy or after bouncing a maximum number of times, dealing Burst Damage on nearby enemies.\nBurst Damage increases with the number of times Bubble Bullet bounces."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Plop Plop",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/e1e8dd61d230596c53f7d0dedef2d345",
                        skill_description: "Forms a Big Puddle at a designated location.\nEmerges from the Big Puddle and inflicts Knockdown on nearby enemies.\nEnemies standing in the Big Puddle receive continuous DMG and are inflicted with Laundry. The skill's cooldown decreases proportionally to the number of enemies inflicted with Knockdown."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Clean Up",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/330ed09dce1880e52983ae23cca87f63",
                        skill_description: "Activates Liquefied state. While Liquefied, does not collide with enemies and creates a Waterway on the ground.\nEnemies standing in the Waterway take continuous damage and are inflicted with Laundry.\nIn the Liquefied state, cannot jump or use skills."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Laundry Bomb",
                        element_type: "Non-Attribute",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/2b6217ed55b151676a64473681f07fd8",
                        skill_description: "Equip a Unique Weapon. It will be unequipped when the duration ends or all bullets have been used. The projectile impact of the Unique Weapon creates a Laundry Bomb, dealing continuous damage and inflicting Towed on nearby enemies with Laundry.\nContinuous damage increases based on the number of enemies with Laundry."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Water Intake",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/bc2e6988a64706ff5c47205c266e336d",
                        skill_description: "When using skills while on water, MP cost decreases.\nPuddles created by skills are also considered to be water."
                      },
                ]
        }
    },
    {
        id: "101000014",
        descendant_name: "Kyle",
        slug: "kyle",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/2ae6db799a211e64aa6a0cd1494c1b0d",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Repulsion Dash",
                        element_type: "Non-Attribute",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/c4f4c305bdc858d4cd3f895acde9faf6",
                        skill_description: "Charges forward to deal damage and inflict Knockback on colliding enemies.\nDealing damage to enemies recovers Magnetic Force proportionally to Max Shield. When the skill ends, grants DEF + to self."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Magnetic Bulwark",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/9009df12bc86c372d45d13737dcd499c",
                        skill_description: "Extends both hands to create a Barrier in front that blocks enemy ranged attacks.\nEvery time the Barrier blocks an attack, recovers Magnetic Force proportional to the damage blocked."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Magnetism Spurt",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/71f43d556958655c6cec50912d683724",
                        skill_description: "When hit by enemies in the Magnetism Spurt state, Magnetic Force is consumed instead of Shield and HP.\nWhen all Magnetic Force is consumed or by interacting with the skill button again, discharges Magnetic Force to deal damage.\nWhen the skill ends, restores Shields to nearby allies proportional to Max Shield."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Superconductivity Thrusters",
                        element_type: "Non-Attribute",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/e50c0ad1a58e014e5f41316e94ae6a89",
                        skill_description: "Uses Superconductivity Thrusters to soar into the air. Descends, colliding with enemies and dealing damage upon impact. Damage increases proportionally to the amount of Magnetic Force consumed. \nWhen the skill ends, Magnetic Force is fully consumed."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Experienced Technician",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/72ba557258698824584a2ab24439b305",
                        skill_description: "Max amount of Magnetic Force increases proportionally to Max Shield. When the Shield is fully consumed, gains Magnetic Care. This effect has a cooldown.\nMagnetic Force gradually decreases while Out of Combat."
                      },
                ]
        }
    },
    {
        id: "101000015",
        descendant_name: "Esiemo",
        slug: "esiemo",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/4f2cbea689b4118dc58895e5e0771270",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Time Bomb",
                        element_type: "Fire",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/135b551175abab393282fc3417b69374",
                        skill_description: "Fires a Sticky Bomb forward. The Sticky Bomb attaches to an enemy or terrain on contact."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Blast",
                        element_type: "Fire",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/647808975634e4236c9009c28798c564",
                        skill_description: "Detonate the attached bombs.\nDamage dealt increases with the number of attached bombs."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Guided Landmine",
                        element_type: "Fire",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/589126c6551ed0a2472310f3bd06a181",
                        skill_description: "Places a Guided Landmine.\nOnce placed, the Guided Landmine flies to an enemy within its detection range and attaches to it.\nIf there are obstacles in its path, it attaches to the terrain."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Arche Explosion",
                        element_type: "Fire",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/1cbd90958a43399c0b2a71b04deda53f",
                        skill_description: "Dashes forward to deal damage and inflict Knockback on colliding targets during movement.\nInteracting with the skill button again or ending movement deals Burst damage to nearby enemies. Enemies hit by the explosion lose their buffs.\nWhen the skill ends, grants self Madness."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Adventitious Habit",
                        element_type: "Fire",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/62ce7b1e9c492160310de8d98117510e",
                        skill_description: "Drops a bomb on the ground when the shield is completely depleted."
                      },
                ]
        }
    },
    {
        id: "101000016",
        descendant_name: "Enzo",
        slug: "enzo",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/dd903ca869faef90ddbe9a64127c8ca1",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Start Supply",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/b31623806505fabda7a97a0f7ae3d18f",
                        skill_description: "Summons a Bullet Supplying Device at the designated location. Supplies bullets to allies that approach the Device. The Bullet Supplying Device can be used once by each ally, and disappears when everyone has used it or its duration ends."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Explosive Drone",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/fec68f8de0eb16491474dc45d5f093ae",
                        skill_description: "Launches an Explosive Drone forward.\nThe Explosive Drone explodes on contact with an enemy or a terrain object, dealing Burst damage."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Enhance Combat Suit",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/70de38574c7fb9d0ab706a26da11d01c",
                        skill_description: "Summons Shield Recovery Comms.\nWhen the Shield Recovery Comms is first summoned, it recovers the Shield and grants Enhance Combat Suit."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Perfect Support",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/9a5321d22913bdeaa27b76fd0a4163b5",
                        skill_description: "Summons a Small Supply Ship to himself and his allies. The Small Supply Ship provides Supply Bullets and grants Perfect Support to allies. The Small Supply Ship attacks enemies in front, and when the skill ends, it fires a missile forward that causes a big explosion."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Fire Supporter",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/f74c8a674af689a3413786c7b6d0842b",
                        skill_description: "Grants Fire Support to allies within an area around self.\nFire Support effect enhances when same Descendant is present within the Party or Squad.\nEfficiency increases when Enzo disarms the security of the Encrypted Vault, and rewards increase when this happens."
                      },
                ]
        }
    },
    {
        id: "101000017",
        descendant_name: "Yujin",
        slug: "yujin",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/2bb766e96b8aa777faf6ef1b5afcbc3f",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Solidarity Healing",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/856558715bc1d53e7666ea67afe55aa2",
                        skill_description: "Attaches a Healing Drone to an ally.\nThe Drone is dismissed if it gets too far from the target or when its duration expires.\nThe Drone grants Sustained Recovery. Upon dismissal, grants Stimulant to both the ally and self."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Restructure Serum",
                        element_type: "Non-Attribute",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/73a489100f524cd6b45c4438d8c98764",
                        skill_description: "Fires Restructure Serum forward.\nEnemies hit by Restructure Serum are inflicted with Allergy.\nAttacking enemies with Allergy heals nearby allies.\nDefeating an enemy with Allergy further heals the Descendant."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Stimulant Spray",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/0a289c19f03b13384761b3adda866400",
                        skill_description: "Grants Stimulation to nearby allies.\nAllies receive healing proportional to the number of times they were hit when Stimulation  ends."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Hyperreactive Healing Ground",
                        element_type: "Non-Attribute",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/6d480f229ecf2173317bf63d6d2de17b",
                        skill_description: "Enters skill standby mode upon use. The skill can be used with the attack button and canceled it with the aim button.\nHeals allies and self within a circular range, grants Purification, and provides Immunity to debuffs.\nThe amount healed increases based on the number of allies and enemies within range.\nWhen the skill ends, grants self Hyper Activity."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Stop Overreacting",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/97b1314b41e2fd52c899fd6ea562d5ff",
                        skill_description: "Significantly reduces the time it takes to rescue allies.\nRescued allies gain Additional Prescription."
                      },
                ]
        }
    },
    {
        id: "101000018",
        descendant_name: "Luna",
        slug: "luna",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/c07d494b9cb1d8285fee1f1752ff41c0",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Stage Presence",
                        element_type: "Non-Attribute",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/9a059ccb808cf6ead53c7a6953fc38a5",
                        skill_description: "Equips a Unique Weapon. It will be unequipped when MP is fully depleted or all bullets have been fired.\nWhen the Unique Weapon is equipped, Notes activates, allowing the use of skills.\nNotes can be hit through shooting and skill use. If the skill button is not pressed at the right time, the skill will fail to activate.\nFailing to hit Notes through shooting significantly decreases MP.\nSuccessfully hitting Notes grants Perfect Pitch."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Exciting Act",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/54f998e70f2eac16673c711196b7495b",
                        skill_description: "Changes Notes.\nGrants Exciting Performance to self. Grants Exciting Sound to allies within range.\nWhen using an Enhanced Skill, increases the effects further."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Relaxing Act",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/02545c61acc8adce6bd67297f2a0bfcc",
                        skill_description: "Changes Notes.\nGrants Relaxing Performance to self. Relaxing Performance recovers MP when hitting enemies while hitting Notes.\nGrants Relaxing Sound to allies within range.\nWhen using an Enhanced Skill, increases the effects further."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Cheerful Act",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/defefd81167f4fcc340de0e532af600c",
                        skill_description: "Changes Notes.\nGrants Cheerful Performance to self.\nCheerful Performance acquires Inspiration Gauge when hitting enemies while hitting Notes.\nGrants Cheerful Sound to allies within range.\nWhen using an Enhanced Skill, increases the effects further."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Improvisation",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/989b1ddb0f57aceb38c485d7b4e74f36",
                        skill_description: "When using a skill to hit the Note, Inspiration Gauge goes up. When the Inspiration Gauge maxes out, an Enhanced Skill can be used.\nUsing an Enhanced Skill, completely depletes Inspiration Gauge. However, when failing to hit the Note, Inspiration Gauge goes down and the skill fails to activate.\nWhile Out of Combat for a certain period of time, Inspiration Gauge is completely depleted."
                      },
                ]
        }
    },
    {
        id: "101000019",
        descendant_name: "Ultimate Bunny",
        slug: "ultimate-bunny",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/d4e6462f87513fe6652633620b7f8d19",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Thrill Bomb",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/1369c6b30f09730fb51a7412cd1e3b89",
                        skill_description: "Creates a Thrill Bomb that targets the nearest enemy within range, dealing damage. This damage increases proportionally to the amount of Electricity.\nInflicts Electrocution on enemies hit."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Speed of Light",
                        element_type: "Electric",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/2ca6c74399943b2f66ad34e3e3954064",
                        skill_description: "Always moves by Sprinting, and increases Sprint Speed.\nGains Speed of Light. Speed of Light additionally gains Electricity while moving."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Lightning Emission",
                        element_type: "Electric",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/1e243471ab2d7742a4165bb1ccf77bd6",
                        skill_description: "Activates the Lightning Emission state. Deals damage to nearby enemies when moving a certain distance, increases damage proportional to the amount of Electricity. Inflicts Electrocution on enemies hit."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Maximum Power",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/9d80c8428e68872368be8bbe8c20c973",
                        skill_description: "Discharges electricity forward. Deals damage on enemies that come into contact with the electricity, with the damage increasing gradually based on the discharge time. Ends when Electricity runs out."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Rabbit Foot",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/aee94bd99cb91c6f6c8e2b57f4188a06",
                        skill_description: "Deals damage to nearby enemies upon landing after a Double Jump.\nGains Electricity proportional to the travel distance.\nIf there is no movement for a certain period, Electricity is gradually consumed."
                      },
                ]
        }
    },
    {
        id: "101000020",
        descendant_name: "Ultimate Gley",
        slug: "ultimate-gley",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/c4c10b88e178305521d044f5a969583d",
        levels: {
            create: [
                {
                    id: "Ultimate-Gley-Levels",
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Ultimate-Gley-Levels",
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Frenzied",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/0b4964e22f573db0ea27ae3144db8392",
                        skill_description: "In Frenzied state. In Frenzied state, increases Firearm ATK and Penetration, but reduces HP Recovery."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Life Siphon",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/8294d74d2be622dee4efcbf7d3c610ba",
                        skill_description: "Deals damage to targets within range and recovers HP.\nHP Recovery amount increases based on the number of enemies hit.\nIn Frenzied state, deals increased DMG proportionally to HP.\nIn Non-Frenzied state, gains Vigor. Vigor stacks proportionally to the number of enemies hit."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Increased Sensory",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/929b096dd83d597a08012ba654115f3c",
                        skill_description: "When in Frenzied state, applies Maximize Lethality during which bullets are not consumed.\nWhen in Non-Frenzied state, applies Maximize Recovery during which Life Sphere generation is increased."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Massacre",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/964ec69b96e48abf197218908285b31e",
                        skill_description: "Equip a Unique Weapon. The number of bullets loaded is affected by the amount of Power of Life owned.\nWhen hitting an enemy with the Unique Weapon, deals damage and inflicts additional effects.\nIn Frenzied state, increases additional DMG proportionally to HP. \nIn Non-Frenzied state, inflicts Stun on enemies that are hit."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Thirst",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/482612f9a8d939224d805b5829221f79",
                        skill_description: "Cannot have Shield or MP.\nIn Non-Frenzied state, reduces Incoming DMG.\nDefeated enemies have a chance to drop Life Spheres which, upon contact, grant Power of Life.\nUpon acquiring Power of Life, recovers HP."
                      },
                ]
        }
    },
    {
        id: "101000022",
        descendant_name: "Ultimate Valby",
        slug: "ultimate-valby",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/8ae81e3d05a981d5da24c26c09106330",
        levels: {
            create: [
                {
                    id: "Valby-Levels",
                    level: 1,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 2,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 3,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 4,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 5,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 6,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 7,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 8,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 9,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 10,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 11,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 12,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 13,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 14,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 15,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 16,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 17,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 18,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 19,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 20,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 21,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 22,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 23,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 24,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 25,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 26,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 27,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 28,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 29,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 30,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 31,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 32,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 33,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 34,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 35,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 36,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 37,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 38,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 39,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
                {
                    id: "Valby-Levels",
                    level: 40,
                    stats: {
                        create: [
                            {
                                stat_type: "",
                                stat_value: "",
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Bubble Bullet",
                        element_type: "Non-Attribute",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/596c004a6a05fed50bd9b3f16f14130e",
                        skill_description: "Fires a bouncing Bubble Bullet. Where the Bubble Bullet impacts, it creates a Small Puddle at the point of collision.\nEnemies who touch the Small Puddle take continuous damage and are inflicted with Laundry.\nThe Bubble Bullet explodes upon hitting an enemy or after bouncing a maximum number of times, dealing Burst Damage on nearby enemies.\nBurst Damage increases with the number of times Bubble Bullet bounces."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Plop Plop",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/e319ee39cc0df095293754a0d71bd9ad",
                        skill_description: "Forms a Big Puddle at a designated location.\nEmerges from the Big Puddle and inflicts Knockdown on nearby enemies.\nEnemies standing in the Big Puddle receive continuous DMG and are inflicted with Laundry. The skill's cooldown decreases proportionally to the number of enemies inflicted with Knockdown."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Clean Up",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/fd05e8439ed1c7f7ed0c5c08ec71cc7c",
                        skill_description: "Activates Liquefied state. While Liquefied, does not collide with enemies and creates a Waterway on the ground.\nEnemies standing in the Waterway take continuous damage and are inflicted with Laundry.\nIn the Liquefied state, cannot jump or use skills."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Laundry Bomb",
                        element_type: "Non-Attribute",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/1bc291ff04ace2dbcaeddbcd838e6906",
                        skill_description: "Equip a Unique Weapon. It will be unequipped when the duration ends or all bullets have been used. The projectile impact of the Unique Weapon creates a Laundry Bomb, dealing continuous damage and inflicting Towed on nearby enemies with Laundry.\nContinuous damage increases based on the number of enemies with Laundry."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Water Intake",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/afbf18ccbece2adedfa02161d0480d07",
                        skill_description: "When using skills while on water, MP cost decreases.\nPuddles created by skills are also considered to be water."
                      },
                ]
        }
    }
]

async function main() {
    console.log(`Start seeding...`);

    for (const descendants of descendantList) {
        const newDescendants = await prisma.descendants.create({
            data: descendants,
        });
        console.log(`Created descendants with id: ${newDescendants.id}`);
    }
    console.log(`Seeding finished.`);
}


main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    })
