import PubSub from 'pubsub-js';

 export const subscribe = (event, callback) => {
    return PubSub.subscribe(event, callback);
};

 export const unsubscribe = (token) => {
    PubSub.unsubscribe(token);
};

export const publish = (event, data) => {
    PubSub.publish(event, data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    subscribe,
    unsubscribe,
    publish
};
