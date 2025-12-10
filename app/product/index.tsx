export function Product() {
    console.log(three_kingdom[0].account)
    return (
        <main className="flex">
            <div className="m-1">
                {
                    three_kingdom[0].account.map((d, idx) => (
                        d.isOwn && (
                            <div key={idx} className="flex p-4 m-1 border border-2 ">
                                {d.name}
                            </div>
                        )
                    ))
                }
            </div>
            <div className="m-1">
                {
                    three_kingdom[0].account.map((d, idx) => (
                        !d.isOwn && (
                            <div key={idx} className="flex p-4 m-1 border border-2 ">
                                {d.name}
                            </div>
                        )
                    ))
                }
            </div>
        </main>
    )
}

const three_kingdom = [
    {
        info: {
            limit_level: 5,
            game_season: 19
        },
        account: [
            {
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
                        name: "長劍",
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