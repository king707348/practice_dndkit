import React, { useState, useEffect } from 'react'
import {DndContext} from '@dnd-kit/core';

import {Droppable} from './Droppable';
import {Draggable} from './Draggable';

export function DragAndDrop() {
  const containers = ['A', 'B', 'C'];
  function DndZone () {
    const [parent, setParent] = useState(null);
    const draggableMarkup = () => {
      return (
        <Draggable id="draggable">
          Drag me
        </Draggable>
      )
    }
    
    function handleDragEnd(event:any) {
      const {over} = event;

      setParent(over ? over.id : null);
    }

    return (
      <DndContext onDragEnd={handleDragEnd} >

        {parent === null ? draggableMarkup() : null}
        
        {containers.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup() : 'Drop here'}
          </Droppable>
        ))}
      </DndContext>
    )
  }

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              What&apos;s next?
            </p>
            <a className="flex hover:underline" href="./product">Product</a>
          </nav>
          <nav>
            <DndZone />
          </nav>
        </div>
      </div>
    </main>
  );
}


