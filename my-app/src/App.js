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
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;