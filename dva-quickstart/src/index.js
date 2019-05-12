import dva from 'dva';
import './index.css';
import { createBrowserHistory as createHistory } from 'history';
import createLoading from 'dva-loading';
import {createLogger} from 'redux-logger'

//自定义中间件
const logger = store => next => action => {
    console.log('dispatching',action);
    let result = next(action);
    console.log('next state',store.getState());
    return result;
}
//自定义中间件
const error = store => next => action => {
    try{
        next(action)
    }catch (e){
        console.log('error'+e)
    }
}

// 1. Initialize
const app = dva({
    history: createHistory(), //配置无# 形式路由
    onAction:[createLogger() ,error]//可以用自定义的中间件 Logger,onAction就是用来放中间件的,dispatch的时候触发
});

app.use(createLoading());

// 2. Plugins
// app.use({});

// 3. Model
 //app.model(require('./models/index').default);
require('./models').default.forEach(key => app.model(key.default));
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
//console.log(app)