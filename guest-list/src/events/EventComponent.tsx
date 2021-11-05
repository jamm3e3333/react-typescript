import React, { ChangeEvent, DragEvent, useState } from 'react';

const EventComponent: React.FC = () => {
    const [name, setName] = useState<string>('');
    const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onDragStart = (e: DragEvent<HTMLDivElement>) => {
        console.log(e.target);
    }
    return (
        <>
            <input onChange={nameChangeHandler} type="text" />
            <p>{name}</p>
            <div draggable onDragStart={onDragStart}>Drag me!</div>
        </>
    )
}

export default EventComponent;