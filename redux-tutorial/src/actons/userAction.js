import axios from 'axios';

export const API_REQUEST_SUCCESS = 'users:updateUser';
export const API_REQUEST_ERROR = 'users:showError';

export function updateUser(newUser) {
    return {
        type:API_REQUEST_SUCCESS,
        payload:{
            user:newUser
        }
    }
}

//出错的时候 将错误作为state 数据抛出去
export function showError() {
    return {
        type:API_REQUEST_ERROR,
        payload:{
            user:'Error!'
        }
    }
}

export function onRequest() {
    return {
        type:'API_REQUEST_REQUEST',
    }
}

export function apiRequest(){
    return dispatch => {
        dispatch(onRequest())
        axios.get('http://google.com').then(res=>{
            console.log('success')
            dispatch(updateUser(res.newUser))
        }).catch(err=>{
            //console.log('error')
            dispatch(showError());//dispatch接收一个对象
        })
    }
}