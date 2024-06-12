import { SET_DATA } from './actions';

// 定义初始状态
const initialState = {
    data: '',
};

// 创建Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
