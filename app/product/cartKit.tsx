import Item from "../components/itemList";
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
    // map account items to the shape expected by Item component ({id, name})
    const items = data[0]?.account.map((a) => ({ id: a.id, name: a.name })) ?? [];

    return (
        <div className="flex">
            <div className="w-full">
                <Item data={items} />
            </div>
        </div>
    )
}