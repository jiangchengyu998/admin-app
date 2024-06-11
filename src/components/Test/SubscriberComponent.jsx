import React, { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from '../PubsubService';

const SubscriberComponent = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const token = subscribe('MY_EVENT', (msg, data) => {
            setMessage(data.message);
        });

        // Cleanup subscription on component unmount
        return () => {
            unsubscribe(token);
        };
    }, []);

    return (
        <div>
            <h1>Subscriber Component</h1>
            <p>Received Message: {message}</p>
        </div>
    );
};

export default SubscriberComponent;
