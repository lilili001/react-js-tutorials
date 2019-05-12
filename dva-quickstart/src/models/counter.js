import {delay,put} from 'dva/saga';
import { routerRedux} from 'dva/router'
import queryString from 'query-string'
import pathToRegexp from 'path-to-regexp'

export default {
    namespace:"counter",
    //相当于reducer的初始化的值
    state:{
        count:1
    },
    //全局监听
    subscriptions:{
        //这里的函数名称可以任意 ,这里定义的方法会一次性全部执行完
        setup({dispatch,history}){//dispatch,history
            window.onresize=()=>{
                dispatch({type:'add'})
            }
        },
        a({dispatch,history}){
            document.addEventListener('click',function () {
                //dispatch({type:'addAsync'})
            })
        },
        //监听路由切换
        watchHistory({dispatch,history}){
            history.listen((location)=>{
                // if(location.pathname=='/counter'){
                //     dispatch({type:'add'})
                // }
                /*var re = pathToRegexp('/foo/:bar');     // 匹配规则
                var match1 = re.exec('/foo/route');*/
                const match = pathToRegexp('/counter').exec(location.pathname);
                if(match){
                    //todo
                }
                console.log('当前路由：',location)
            })
        }
    },
    effects: {//异步的方法
        *addAsync(action, { call, put , select }) {  // eslint-disable-line //select 可以取出state的值
            //console.log(action)
            //const counter = yield select(state=>state.counter);
            //或者这样
            //const counter = yield select(_=>_.counter)
            //或者这样
            const {counter} = yield select(_=>_);

            //console.log(counter);
            yield call(delay,2000);//延迟1秒执行 add
            yield put({ type: 'add' });
            //路由跳转
            yield put(routerRedux.push({
                pathname:'/',
               // hash:'hello',
                search:queryString.stringify({
                    name:'alice'
                }),
                state:'sss'
            }))
        },
    },
    reducers:{//普通的方法
        'add'(state,action){
            return {
                count: state.count+1
            }
            //return {...state,...action.payload}
        }
    }
}