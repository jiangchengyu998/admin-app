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
export const updateItem = (item) => ({
    type: ITEM_UPDATE,
    payload: item,
})

// 定义Action类型
export const ITEM_UPDATE_ALL = 'ITEM_UPDATE_ALL';

// 创建Action
export const updateItemAll = (items) => ({
    type: ITEM_UPDATE_ALL,
    payload: items,
})

// 定义Action类型
export const ITEM_DELETE = 'ITEM_DELETE';

// 创建Action
export const removeItem = (item) => ({
    type: ITEM_DELETE,
    payload: item,
})

// 定义Action类型
export const ITEM_ADD = 'ITEM_ADD';

// 创建Action
export const addItem = (item) => ({
    type: ITEM_ADD,
    payload: item,
})


