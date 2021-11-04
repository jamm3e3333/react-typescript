import React, {  ChangeEvent, useState } from 'react';
import Guests from './Guests';
import FindUser from './FindUser';

const GuestList: React.FC = () => {
    const [guestsState, setGuestsState] = useState<string[]>([]);
    const [name, setName] = useState<string>('');

    const onChangeGuestName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onAddGuestHandler = () => {
        setName('');
        setGuestsState((prevState: string[]) => {
            return [...prevState, name];
        });
    }

    return (
        <div>
            <h3>Guest List</h3>
            <input value={name} type="text" onChange={onChangeGuestName} />
            <button onClick={onAddGuestHandler}>Add Guest</button>
            <Guests guests={guestsState} />
            <FindUser guests={guestsState} />
        </div>
    )
}

export default GuestList;