"use client"

import React, { useState, useEffect } from 'react'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface ItemType {
    id: number
    name: string
}

interface Props {
    data: ItemType[]
}

export default function Item({ data }: Props) {
    const [items, setItems] = useState<ItemType[]>(Array.isArray(data) ? data : [])
    // 避免水合不匹配
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    function handleDragEnd(event: any) {
        const { active, over } = event;

        if (!over) return

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex(i => i.id === active.id)
                const newIndex = items.findIndex(i => i.id === over.id)
                if (oldIndex === -1 || newIndex === -1) return items
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    function SortableItem({ item }: { item: ItemType }) {
        const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id })
        const style = {
            transform: CSS.Transform.toString(transform),
            transition,
            touchAction: 'manipulation'
        }

        return (
            <div 
                ref={setNodeRef} 
                style={style} 
                {...attributes} 
                {...listeners}
                className='p-3 border-1'
            >
                {item.name}
            </div>
        )
    }

    if (!isClient) {
        return (
            <div>
                {items.map((item) => (
                    <div key={String(item.id)}>
                        {item.name}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <div className='flex flex-col'>
            <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
                {
                    items.map((item) => (
                        <SortableItem key={String(item.id)} item={item} />
                    ))
                }
            </SortableContext>
            </div>
        </DndContext>
    )
}