import React from 'react';
import {connect} from 'dva'
const UserPage = (props) => {
    const {dispatch} = props;
    const {isFetching,user,error} = props.user;
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
        user:state.user
    }
}

export default connect(mapStateToProps)(UserPage) ;
