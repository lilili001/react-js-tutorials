import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    getStyle(){
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px solid #ccc',
            textDecoration:this.props.todo.completed? 'line-through' : 'none',
        }
    }

  render() {
        const {id,title} = this.props.todo;
    return (
        <div>
        {/*<div style={{backgroundColor:'#f4f4f4'}}>{this.props.todo.title}</div>*/}
        {/*<div style={itemStyle}>{this.props.todo.title}</div>*/}
        <div style={this.getStyle()}>
            <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
            {this.props.todo.title}
            <button onClick={this.props.delTodo.bind(this,id)} style={buttonStyle}>x</button>
        </div>
        </div>
     );
  }
}
TodoItem.propTypes={
  todo:PropTypes.object.isRequired
}

const itemStyle = {
  backgroundColor:'#5f5f5'
}
const buttonStyle = {
    background:'#cc0000',
    color:'#fff',
    borderRadius:'5px 8px',
    border:'none',
    float:'right'
}
export default TodoItem;
