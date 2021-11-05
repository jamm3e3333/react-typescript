import React, { ChangeEvent, FormEvent, useState, useRef } from 'react';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const termInputRef = useRef<HTMLInputElement | null>(null);
    const { searchRepositories } = useActions();
    const { loading, error, data } = useTypedSelector((state) => state.repositories);

    const termInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    }

    const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!term.trim()) {
            return;
        }
        searchRepositories(term);

        setTerm('');

        if(termInputRef.current) {
            termInputRef.current.focus();
        }

    }

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <input 
                    type="text"     
                    onChange={termInputHandler} 
                    value={term}
                    ref={termInputRef}
                />
                <button type="submit">Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {(!loading && !error) && 
            <ul>
                {data.map(d => {
                   return <p key={d} >{d}</p>
                })}
            </ul>
            }
        </div>
    );
}

export default RepositoriesList;