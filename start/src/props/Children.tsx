import React from 'react';

interface ChildrenProps {
    color: string;
    onClick: () => void;
}

const Children: React.FC<ChildrenProps> = (props) => {
    return (
        <div>
            {props.color}
            <button onClick={props.onClick}>Click me</button>
            {props.children}
        </div>
    )
}

export default Children;