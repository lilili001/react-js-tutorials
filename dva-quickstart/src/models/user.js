import {delay,put} from 'dva/saga';
import { routerRedux} from 'dva/router'
import queryString from 'query-string'
import pathToRegexp from 'path-to-regexp'

export default {
    namespace:"user",
    //相当于reducer的初始化的值
    state:{
        isFetching:false,
        error:null,
        user:null
    },
    //全局监听
    subscriptions:{
        //这里的函数名称可以任意 ,这里定义的方法会一次性全部执行完
        setup({dispatch,history}){}
    },
    effects: {//异步的方法
        *fetch(action, { call, put , select }) {  // eslint-disable-line //select 可以取出state的值
            yield put({type:'save'})
        },
    },
    reducers:{//普通的方法
        'save'(state,action){
            return {
                count: state.count+1
            }
            //return {...state,...action.payload}
        }
    }
}