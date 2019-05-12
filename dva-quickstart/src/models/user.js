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
            yield put({type:'fetch/start'});
            try{
                const [user] = yield  all([
                    call( axios.get, "/api/users" ),
                    //call( axios.get, "https://jsonplaceholder.typicode.com/todos" )
                ]);
                //dispatch
                yield put({type:"fetch/user",user})
            }catch (e) {
                yield put({type:"fetch/error",error:e.message})
            }
        },
    },
    reducers:{//普通的方法
        'fetch/start'(state,action){
            return {
                //isFetching:true,
                error:null,
                user:null
            }
            //return {...state,...action.payload}
        },
        'fetch/user'(state,action){
            return {
                //isFetching:false,
                error:null,
                user:action.user
            }
        },
        'fetch/error'(state,action){
            return {
                //isFetching:false,
                error:null,
                user:action.error
            }
        }
    }
}