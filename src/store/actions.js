// 定义Action类型
export const SET_DATA = 'SET_DATA';

// 创建Action
export const setData = (data) => ({
    type: SET_DATA,
    payload: data,
});

// 定义Action类型
export const ITEM_LIST = 'ITEM_LIST';

// 创建Action
export const setItem = (item) => ({
    type: ITEM_LIST,
    payload: item,
})
