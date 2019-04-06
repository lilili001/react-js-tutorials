import React, { Component } from 'react';
import Todos from './components/Todos';
class App extends Component {
  state={
    todos:[
        {id:1,title:"Take out the trash",completed:false},
        {id:2,title:"Have dinner with husband",completed:false},
        {id:3,title:"Meeting boss",completed:false}
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
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}
               markComplete={this.markComplete}
               delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
