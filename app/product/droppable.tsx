import React from 'react';
import { useDroppable } from '@dnd-kit/core';

// interface State {
//     strength: number | string,
//     intelligence: number | string,
//     leadership: number | string,
// }
// interface Weapon {
//     name: string,
//     isOwn: boolean,
//     stat?: State
// }
// interface Equipment {
//     trick: {
//         weapon: Weapon
//     },
//     weapon: Weapon
// }
// interface childPros {
//     db: {
//         id: number,
//         name: string,
//         level: number,
//         isOwn: boolean,
//         equipment: Equipment
//     },
//     className: string,
//     children: React.ReactNode;
// }
interface childPros {
    id: string,
    children: React.ReactNode;
}

export const Droppable = ({id, children}:childPros) => {
    const {isOver, setNodeRef} = useDroppable({ id });
    const style = {
        color: isOver ? 'green' : undefined,
    }

    return (
        <div ref={setNodeRef} style={style} >
            {children}
        </div>
    )
}