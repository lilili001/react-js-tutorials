import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

import {updateUser} from './actons/userAction'

class App extends Component {
    constructor(props) {
        super(props);
        this.updateUser = this.updateUser.bind(this)
    }

    updateUser(event) {
        console.log(111)
        this.props.onUpdateUser(event.target.value);
    }

    render() {
        console.log(this.props)
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <input onChange={this.updateUser}/>
                    {this.props.user}
                </header>

            </div>
        );
    }
}

const mapStateToProps = (state,props) => {
    return {
        products: state.products,
        user: state.user,
        userPlusProp:`${state.user} ${props.aRandomProps}`
    }
}

//mapActionsToProps是一个对象 其中的actions自动emit
const mapActionsToPros = {
    onUpdateUser: updateUser
}

const mergeProps = (propsFromState,propsFromDispatch,ownProps)=>{
    console.log( propsFromState)
    console.log( propsFromDispatch)
    console.log( ownProps)
    return {}
}

export default connect(mapStateToProps, mapActionsToPros,mergeProps)(App);
