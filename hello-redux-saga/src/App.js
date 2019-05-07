import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {increment,incrementAsync} from './actions/counter';
import {getuser} from './actions/user';

class App extends Component{
  render(){
      const {isFetching,user,error} = this.props.user;
      console.log(this.props.user)
      let data;

      if (error) {
          data = error;
      } else if (isFetching) {
          data = "Loading..."
      } else {
          data = user && user.data[0].name
      }

      return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Learn React
              </a>
                {this.props.counter}
              <button onClick={this.props.increment}>+</button>
              <button onClick={this.props.incrementAsync}>async + </button>
                <button onClick={this.props.getuser}>get user</button>
                <h1>{data}</h1>
            </header>
          </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    counter:state.counter,
    user:state.user
  }
}

export default connect(mapStateToProps,{increment,incrementAsync,getuser})(App);
