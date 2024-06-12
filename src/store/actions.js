// 定义Action类型
export const SET_DATA = 'SET_DATA';

// 创建Action
export const setData = (data) => ({
    type: SET_DATA,
    payload: data,
});
