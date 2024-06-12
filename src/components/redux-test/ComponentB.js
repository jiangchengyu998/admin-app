import React from 'react';
import { useSelector } from 'react-redux';

const ComponentB = () => {
    const data = useSelector(state => state.data);

    return (
        <div>
            <h2>Component B</h2>
            <p>{data}</p>
        </div>
    );
};

export default ComponentB;
