import React from 'react';
import {connect} from 'dva';
import PropTypes from 'prop-types';

const Counter = (props) => {//这里的props也可以写成 {counter} 直接取counter
    const {counter111,dispatch} = props;
    return (
        <div>
            <div>counter</div>
            <h1>{counter111.count}</h1>
            <button onClick={()=>{dispatch({type:'counter/add'})} }>+</button>
            <button onClick={()=>{dispatch({type:'counter/addAsync',name:'alice'})} }>async +</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter111:state.counter
    }
};

Counter.propTypes = {
    counter111:PropTypes.object
};

export default connect(mapStateToProps)(Counter);
