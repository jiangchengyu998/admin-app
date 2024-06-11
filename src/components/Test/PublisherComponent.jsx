import React from 'react';
import { publish } from '../PubsubService';

const PublisherComponent = () => {
    const handleClick = () => {
        publish('item_list', { message: 'Hello from PublisherComponent!' });
    };

    return (
        <div>
            <button onClick={handleClick}>Publish Event</button>
        </div>
    );
};

export default PublisherComponent;
