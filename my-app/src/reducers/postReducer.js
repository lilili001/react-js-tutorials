const initialState = {
    items:[],
    item:{}
}

export default function (state=initialState,action) {
    switch (action.type){
        case 'FETCH_POSTS': //接收从postAction的dispatch的数据
            return {
                ...state,
                items:action.payload // 接收 posts 数据列表
            }
        case 'NEW_POST':
            console.log(state)
            return {
                ...state,
                items:[...state.items,action.payload.data] //单个 post
            }
        default:
            return state;
    }
}