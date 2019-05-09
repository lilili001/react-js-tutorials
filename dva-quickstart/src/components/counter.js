import React from 'react';
import {connect} from 'dva';
import PropTypes from 'prop-types';
import {counterAdd,counteraddAsync} from '../actions';
import {withRouter,Link,routerRedux} from 'dva/router'
const Counter = (props) => {//这里的props也可以写成 {counter} 直接取counter
    const {counter111,dispatch,counterAdd,counteraddAsync,history} = props;
    return (
        <div>
            <div>counter</div>
            <h1>{counter111.count}</h1>
            <button onClick={()=>{history.push('/')}}>返回首页</button>
            <Link to="/">HomePage</Link>
            <button onClick={()=>{dispatch({type:'counter/add'})}}>+</button>
            {/*可以使用redux-actions来管理dispatch, 下面这行不需要用dispatch*/}
            <button onClick={()=>{counteraddAsync() } }>async +</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter111:state.counter,
    }
};

Counter.propTypes = {
    counter111:PropTypes.object
};

export default  withRouter(connect(mapStateToProps,{counterAdd,counteraddAsync})(Counter));
