import React from 'react';

interface GuestsProps {
    guests: string[];
}

const Guests: React.FC<GuestsProps> = (props) => {
    return (
        <div>
            <ul>
                {props.guests.length > 0 && props.guests.map(guest => {
                    return <li key={Math.floor((Math.random() * 1000))}>{guest}</li>
                })}
            </ul>
        </div>
    )
}

export default Guests;