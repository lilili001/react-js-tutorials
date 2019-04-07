import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import uuid from 'uuid'

import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddItem from './components/AddItem'
import About from './pages/About'
import Posts from './pages/Posts'

import axios from 'axios'

import './app.css'

class App extends Component {
  state={
    todos:[

    ]
  }
  componentDidMount(){
      axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
          .then(res=>{
              this.setState({todos:res.data})
          })
  }
  //Togolle complete
   markComplete =(id)=> {
      console.log(this.state)
        this.setState({
            todos: this.state.todos.map(todo=>{
                if(todo.id == id) todo.completed=!todo.completed;
                return todo;
            })
        })
  }
  delTodo = (id)=>{
      axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}` ).then(res=>{
          this.setState({todos:this.state.todos.filter(todo=>todo.id!==id)})
      })
      //this.setState({todos:this.state.todos.filter(todo=>todo.id!==id)})
  }
  addItem = (title)=>{
      axios.post('http://jsonplaceholder.typicode.com/todos',{title,completed:false}).then(res=>{
          this.setState({todos:[...this.state.todos,res.data]})
      })
  }
  render() {
    return (
        <Router>
          <div className="App">
            <Header />
              <Route exact path="/" render={props=>(
                  <React.Fragment>
                      <AddItem addItem={this.addItem}/>
                      <Todos todos={this.state.todos}
                             markComplete={this.markComplete}
                             delTodo={this.delTodo}
                      />
                  </React.Fragment>
              )}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/post" component={Posts}></Route>
          </div>
        </Router>

    );
  }
}

export default App;
