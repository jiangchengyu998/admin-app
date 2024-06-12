import { createStore } from 'redux';
import reducer from './reducer';

// 创建Redux Store
const store = createStore(reducer);

export default store;
