import React, { ChangeEvent, useState } from 'react';

interface GuestProps {
    guests: string[];
}

const FindUser: React.FC<GuestProps> = (props) => {
    const [findGuest, setFindGuest] = useState('');
    const [foundGuest, setFoundGest] = useState<string[]>([]);

    const changeGuestHandler = ((e: ChangeEvent<HTMLInputElement>) => {
        setFindGuest(e.target.value);
    });

    const clickFindHandler = () => {
        setFindGuest('');
        const foundGuest = props.guests.filter(guest => findGuest === guest);
        setFoundGest(foundGuest);
    }

    return (
        <>
            <label htmlFor="text-guest">Find Guest: </label>
            <input type="text" onChange={changeGuestHandler} />
            <button onClick={clickFindHandler} name="text-user">Find</button>
            {foundGuest.length > 0 && foundGuest.map(guest => {
                return <p key={Math.floor(Math.random() * 1000)}>{guest}</p>
            })}
        </>
    )
}

export default FindUser;