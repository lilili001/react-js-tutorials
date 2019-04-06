import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';
class Todos extends Component {
    markComplete(){
        console.log(111)
    }
    render() {
        return this.props.todos.map((todo)=>{
            return <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete}/>
        })
    }
}
Todos.propTypes={
    todos:PropTypes.array.isRequired
}
export default Todos;
