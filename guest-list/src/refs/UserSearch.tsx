import React, { ChangeEvent, useRef, useState, useEffect } from 'react';
const users = [
    {name: 'Sarah', age: 20},
    {name: 'Joseph', age: 22},
    {name: 'Mariah', age: 24},
]

interface User {
    name: string;
    age: number;
}
const UserSearch = () => {
    const [name, setName] = useState('');
    const [foundUser, setFoundUser] = useState<User | undefined>(undefined);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if(!inputRef.current) {
            return;
        }
        inputRef.current.focus()
    })

    function userNameHandler(e: ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
    }

    function searchUserHandler() {
        const searchedUser = users.find(user => user.name === name);
        if(searchedUser === undefined) {
            return setFoundUser(undefined);
        }
        setFoundUser(searchedUser);
    }

    return (
        <div>
            <input ref={inputRef} name="user-name" type="text" onChange={userNameHandler} />
            <button type="button" onClick={searchUserHandler}>Find User</button>
            {foundUser && <div>
                <p>Name: {foundUser.name}</p>
                <p>Age: {foundUser.age}</p>
            </div> }
        </div>
    )
}

export default UserSearch;