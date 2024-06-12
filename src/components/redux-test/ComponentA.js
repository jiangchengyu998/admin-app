import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../store/actions';

const ComponentA = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);

    const handleChange = (e) => {
        dispatch(setData(e.target.value));
    };

    return (
        <div>
            <h2>Component A</h2>
            <input type="text" value={data} onChange={handleChange} />
        </div>
    );
};

export default ComponentA;
