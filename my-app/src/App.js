import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddItem from './components/AddItem'
import './app.css'
import uuid from 'uuid'
import About from './pages/About'

class App extends Component {
  state={
    todos:[
        {id:uuid.v4(),title:"Take out the trash",completed:false},
        {id:uuid.v4(),title:"Have dinner with husband",completed:false},
        {id:uuid.v4(),title:"Meeting boss",completed:false}
    ]
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
      this.setState({todos:this.state.todos.filter(todo=>todo.id!==id)})
  }
  addItem = (title)=>{
      const newTodo = {
          id:uuid.v4(),
          title,
          completed:false
      }
      this.setState({todos:[...this.state.todos,newTodo]})
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
          </div>
        </Router>

    );
  }
}

export default App;
