import React from 'react';
import { useSelector } from 'react-redux';

const ComponentB = () => {
    const {data,items} = useSelector(state => state);
    console.log(items)

    return (
        <div>
            <h2>Component B</h2>
            <p>{data}</p>
        </div>
    );
};

export default ComponentB;
