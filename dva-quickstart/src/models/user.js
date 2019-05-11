import {delay,put} from 'dva/saga';
import { routerRedux} from 'dva/router'
import queryString from 'query-string'
import pathToRegexp from 'path-to-regexp'
import axios from 'axios'

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
        *fetch(action, { call, put , select,all }) {  // eslint-disable-line //select 可以取出state的值
            yield put({type:'FETCH_USER_START'});
            try{
                const [user] = yield  all([
                    call( axios.get, "https://jsonplaceholder.typicode.com/users" ),
                    //call( axios.get, "https://jsonplaceholder.typicode.com/todos" )
                ]);
                //dispatch
                yield put({type:"FETCH_USER_SUCCESS",user})
            }catch (e) {
                yield put({type:"FETCH_USER_ERROR",error:e.message})
            }
        },
    },
    reducers:{//普通的方法
        'FETCH_USER_START'(state,action){
            return {
                isFetching:true,
                error:null,
                user:null
            }
            //return {...state,...action.payload}
        },
        'FETCH_USER_SUCCESS'(state,action){
            return {
                isFetching:false,
                error:null,
                user:action.user
            }
        },
        'FETCH_USER_ERROR'(state,action){
            return {
                isFetching:false,
                error:null,
                user:action.error
            }
        }
    }
}