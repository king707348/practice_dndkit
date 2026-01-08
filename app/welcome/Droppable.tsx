'use client'

import React from 'react';
import { useDroppable } from '@dnd-kit/core';

type Props = {
  id: number | string
  children: any
}

export function Droppable(props:Props) {
  console.log(props)
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}