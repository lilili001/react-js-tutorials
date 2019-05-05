//import {delay} from 'redux-saga';
import {takeEvery,put,delay} from 'redux-saga/effects';

//const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms))

function* incrementAsync() {
   yield delay(2000);
   //2s 后dispatch一个increment
   yield put({type:'INCREMENT'})
}
export function* watchIncrementAsync() {
    //takeEvery可以监听action
    yield takeEvery("INCREMENT_ASYNC",incrementAsync)
}