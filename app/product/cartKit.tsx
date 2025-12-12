import { Draggable } from "./draggable"
import { Droppable } from "./droppable"

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
interface SortableProps {
    data: ItemType[]
}

export function Sortable({data}: SortableProps){
    console.log(data[0].account)

    return (
        <div className="flex">
            <Droppable 
                id="test"
                className="flex flex-col p-4 m-1 border-2"
            >
                {data[0]?.account.map((account) => (
                    <Draggable key={account.id} db={account} />
                ))}
            </Droppable>
        </div>
    )
}