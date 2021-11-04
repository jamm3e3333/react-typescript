import React from 'react';
import Children from './Children';

const Parent: React.FC = () => {
    const buttonClickHandler = () => {
        console.log('button was clicked');
    }
    return (
        <Children color="red" onClick={buttonClickHandler}>
            <p>ahoj</p>
        </Children>
    )
}

export default Parent;