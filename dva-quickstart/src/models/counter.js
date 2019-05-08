import {delay} from 'dva/saga';
export default {
    namespace:"counter",
    //相当于reducer的初始化的值
    state:{
        count:1
    },
    effects: {
        *addAsync(action, { call, put , select }) {  // eslint-disable-line //select 可以取出state的值
            console.log(action)
            //const counter = yield select(state=>state.counter);

            //或者这样
            //const counter = yield select(_=>_.counter)

            //或者这样
            const {counter} = yield select(_=>_);

            console.log(counter);
            yield call(delay,2000);//延迟1秒执行 add
            yield put({ type: 'add' });
        },
    },
    reducers:{
        'add'(state,action){
            return {
                count: state.count+1
            }
            //return {...state,...action.payload}
        }
    }
}