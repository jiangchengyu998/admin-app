import {ITEM_ADD, ITEM_DELETE, ITEM_UPDATE, SET_DATA} from './actions';

// 定义初始状态
const initialState = {
    data: '',
    categories: ['手机', '电脑'],
    items: [
        {
            'id': '001',
            'title': '华为手机',
            'category': '手机',
            'price': 6000.00,
            'store': 4000,
            'updateTime': '2024-01-01'
        },
        {
            'id': '002',
            'title': '苹果手机',
            'category': '手机',
            'price': 8000.00,
            'store': 4000,
            'updateTime': '2024-01-01'
        },
        {
            'id': '003',
            'title': '小米手机',
            'category': '手机',
            'price': 6000.00,
            'store': 4000,
            'updateTime': '2024-01-01'
        },
        {
            'id': '004',
            'title': '小米手机1',
            'category': '手机',
            'price': 6000.00,
            'store': 4000,
            'updateTime': '2024-01-01'
        },
        {
            'id': '005',
            'title': '小米手机2',
            'category': '手机',
            'price': 6000.00,
            'store': 4000,
            'updateTime': '2024-01-01'
        },
        {
            'id': '006',
            'title': '小米手机3',
            'category': '手机',
            'price': 6000.00,
            'store': 4000,
            'updateTime': '2024-01-01'
        },
        {
            'id': '007',
            'title': '小米手机4',
            'category': '手机',
            'price': 6000.00,
            'store': 4000,
            'updateTime': '2024-01-01'
        },
    ]
};

// 创建Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            };
        case ITEM_UPDATE:
            return {
                ...state,
                items: state.items.map((item, index) => {
                        return item.id === action.payload.id ? action.payload : item
                    }
                ),
            };
        case ITEM_DELETE:
            return {
                ...state,
                items: state.items.filter((item, index) => item.id !== action.payload.id),
            };
        case ITEM_ADD:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        default:
            return state;
    }
};

export default reducer;
