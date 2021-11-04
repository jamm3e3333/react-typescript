import React, { useState } from 'react';

interface people {
    name: string,
    age: number,
}
const users: people[] = [
    {name: 'Sarah', age: 20},
    {name: 'Mike', age: 20},
    {name: 'Jim', age: 20},
]

const FindGuests: React.FC = (): React.ReactElement => {
    const [name, setName] = useState<string>('');
    const [foundUser, setFoundUser] = useState<people|undefined>(undefined);

    const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const buttonNameHandler = () => {
       const userIndex = users.findIndex(user => user.name.includes(name));
       if(userIndex < 0 || !name) {
           return setFoundUser(undefined);
       }
       setFoundUser(users[userIndex]);
    }

    return (
        <>
            <input  type="text"
                    value={name}
                    onChange={inputNameHandler}
            />
            <button onClick={buttonNameHandler}>
                Find User
            </button>
            {foundUser ? (
                <div>
                    <p>name: {foundUser.name}</p>
                    <p>age: {foundUser.age}</p>
                </div>
            ): undefined}
        </>
    )
}

export default FindGuests;