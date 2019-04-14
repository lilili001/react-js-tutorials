import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'

function productReducer(state = [], action) {
    return state
}
function userReducer(state = '', {type,payload}) {
    switch (type){
        case 'updateUser':
            return payload
    }
    return state
}
const allReducers = combineReducers({
    products: productReducer,
    user: userReducer
})
const store = createStore(
    allReducers,
    {
        products: [{name: 'iPhone'}],
        user: 'Michael'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState())


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
