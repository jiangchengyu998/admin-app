// 定义Action类型
export const SET_DATA = 'SET_DATA';

// 创建Action
export const setData = (data) => ({
    type: SET_DATA,
    payload: data,
});

// 定义Action类型
export const ITEM_UPDATE = 'ITEM_UPDATE';

// 创建Action
export const setItem = (item) => ({
    type: ITEM_UPDATE,
    payload: item,
})

// 定义Action类型
export const ITEM_DELETE = 'ITEM_DELETE';

// 创建Action
export const removeItem = (item) => ({
    type: ITEM_DELETE,
    payload: item,
})
