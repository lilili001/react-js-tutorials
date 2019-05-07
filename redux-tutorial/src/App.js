import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'

import {updateUser,apiRequest} from './actons/userAction'

class App extends Component {
    constructor(props) {
        super(props);
        this.updateUser = this.updateUser.bind(this)
    }

    updateUser(event) {
        console.log(111)
        this.props.onUpdateUser(event.target.value);
    }
    componentDidMount(){
        this.props.onApiRequest()
    }
    render() {
        console.log(this.props)
        return (
            <div className="App">
                <header className="App-header">
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
const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest:apiRequest
}

export default connect(mapStateToProps, mapActionsToProps)(App);
