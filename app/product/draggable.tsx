import React from 'react';
import {useDraggable} from '@dnd-kit/core';

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
interface childPros {
    db: {
        id: number,
        name: string,
        level: number,
        isOwn: boolean,
        equipment: Equipment
    }
}

export function Draggable({db}:childPros) {
  const id = db.id
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {db.name}
    </button>
  );
}