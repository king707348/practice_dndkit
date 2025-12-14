import React from 'react';
import Item from "../components/itemList"

interface Weapon {
    name: string
    isOwn: boolean
    stat?: {
        strength: number | string
        intelligence: number | string
        leadership: number | string
    }
}
interface ItemAccount {
    id: number
    name: string
    level: number
    isOwn: boolean
    equipment: {
        trick: {
            weapon: Weapon
        }
        weapon: Weapon
    }
}
interface KingdomData {
    info: {
        limit_level: number
        game_season: number
    },
    account: ItemAccount[]
}

export function Product() {
    return (
        <main className="flex">
            <Item data={three_kingdom[0].account.map(acc => ({ id: acc.id, name: acc.name }))} />
        </main>
    )
}

const three_kingdom:KingdomData[] = [
    {
        info: {
            limit_level: 5,
            game_season: 19
        },
        account: [
            {
                id: 1,
                name: "劉備",
                level: 2,
                isOwn: true,
                equipment: {
                    trick: {
                        weapon: {
                            name: "雙股劍",
                            isOwn: false,
                        }
                    },
                    weapon: {
                        name: "長劍",
                        isOwn: false,
                        stat: {
                            strength: 3,
                            intelligence: 7,
                            leadership: "",
                        }
                    }
                }
            },
            {
                id: 2,
                name: "關羽",
                level: 1,
                isOwn: true,
                equipment: {
                    trick: {
                        weapon: {
                            name: "偃月刀",
                            isOwn: false,
                        }
                    },
                    weapon: {
                        name: "長劍",
                        isOwn: false,
                        stat: {
                            strength: 8,
                            intelligence: "",
                            leadership: 7,
                        }
                    }
                }
            },
            {
                id: 3,
                name: "張飛",
                level: 5,
                isOwn: true,
                equipment: {
                    trick: {
                        weapon: {
                            name: "蛇矛",
                            isOwn: false,
                        }
                    },
                    weapon: {
                        name: "",
                        isOwn: false,
                        stat: {
                            strength: 12,
                            intelligence: "",
                            leadership: "",
                        }
                    }
                }
            },
            {
                id: 4,
                name: "諸葛亮",
                level: 1,
                isOwn: true,
                equipment: {
                    trick: {
                        weapon: {
                            name: "諸葛扇",
                            isOwn: false,
                        }
                    },
                    weapon: {
                        name: "",
                        isOwn: false,
                        stat: {
                            strength: "",
                            intelligence: "",
                            leadership: "",
                        }
                    }
                }
            },
            {
                id: 5,
                name: "馬超",
                level: 0,
                isOwn: false,
                equipment: {
                    trick: {
                        weapon: {
                            name: "林槍",
                            isOwn: false,
                        }
                    },
                    weapon: {
                        name: "",
                        isOwn: false,
                        stat: {
                            strength: "",
                            intelligence: "",
                            leadership: "",
                        }
                    }
                }
            }
        ]
    }
]