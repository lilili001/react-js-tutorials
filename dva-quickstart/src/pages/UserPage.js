import React from 'react';
import {connect} from 'dva'
const UserPage = (props) => {
    const {dispatch} = props;
    const {user,error} = props.user;
    //loading局部的可以用这个，全局的可以用props.loading.globle 监听多个listen
    let isFetching = props.loading.effects['user/fetch'];//loading

    let data;
    if (error) {
        data = error;
    } else if (isFetching) {
        data = "Loading..."
    } else {
        data = user && user.data[0].name
    }

    return (
        <div>
            <h1>{data}</h1>
            <button onClick={()=>{dispatch({type:'user/fetch'})}}>get user</button>
        </div>
    );
};
UserPage.propTypes = {
    
};

const mapStateToProps = (state) => {
    return {
        user:state.user,
        loading:state.loading
    }
}

export default connect(mapStateToProps)(UserPage) ;
