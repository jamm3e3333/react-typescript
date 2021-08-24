import React, { useState } from 'react';
import FindGuests from './FindGuests';

interface people {
    name: string,
    age: string
}

const App: React.FC = (): React.ReactElement => {
    const [users, setUsers] = useState<people[] | undefined>([]);
    const [name, setName] =useState<string>('');
    const [age, setAge] = useState<string>('');

    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    }
    const ageHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setAge(e.target.value);
    }

    const submitHandler = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setUsers((prevState) => {
            if(!prevState) {
                return [{name, age}];
            }
            else {
                return prevState.concat({name,age});
            }
        })
    }

    return (
        <>
            <h3>Guest List</h3>
            <div>
                <ul>
                    {users ? 
                    users.map((user) => {
                        return (
                            <li key={user.name} id={user.name}>
                                <p>Name: {user.name}</p>
                                <p>Age: {user.age}</p>
                            </li>
                        )
                    })
                : undefined}
                </ul>
                <form onSubmit={submitHandler}>
                    <label htmlFor="userName">Name</label>
                    <input 
                        type="text"
                        onChange={nameHandler}
                        value={name}
                    />
                    <label htmlFor="userAge">Age</label>
                    <input
                        type="number"
                        min="0"
                        max="150"
                        onChange={ageHandler}
                        value={age}
                    />
                    <button 
                        type="submit"
                        name="btn-submit"
                    >
                        Add name
                    </button>
                </form>        
            </div>
            <FindGuests />
        </>
    )
}

export default App;