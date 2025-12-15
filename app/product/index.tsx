import React, { useState } from 'react';
import {DndContext} from '@dnd-kit/core';
import type {DragEndEvent, DragStartEvent} from '@dnd-kit/core';
import {Sortable} from "./cartKit"

interface State {
    strength: number | string,
    intelligence: number | string,
    leadership: number | string,
}
interface Weapon {
    name: string,
    isOwn: boolean,
    stat?: State
}
interface Equipment {
    trick: {
        weapon: Weapon
    },
    weapon: Weapon
}
interface AccountItem {
    id: number,
    name: string,
    level: number,
    isOwn: boolean,
    equipment: Equipment
}
interface Info {
    limit_level: number,
    game_season: number
}
interface ItemType {
    info: Info,
    account: AccountItem[]
}

export function Product() {
    const [Items, setItems] = useState(three_kingdom[0].account)
    function handleDragEnd(event: DragEndEvent) {
        const {active, over} = event;
        console.log('drag end', {active, over});
        setItems((prev) => {
            const updatedItems = [...prev];
            const movedItem = updatedItems.splice(active.id, 1)[0].id;
            console.log(active.id, movedItem, updatedItems)
            updatedItems.splice(active, 0, movedItem);
            
            return updatedItems;
        })
        
    }
    function handleDragStart(event: DragStartEvent) {
        console.log('drag start', event);
    }

    return (
        <main className="flex">
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                <Sortable data={three_kingdom}></Sortable>
            </DndContext>
        </main>
    )
}

const three_kingdom:ItemType[] = [
const three_kingdom:ItemType[] = [
    {
        info: {
            limit_level: 5,
            game_season: 19
        },
        account: [
            {
                id: 1,
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
                id: 4,
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