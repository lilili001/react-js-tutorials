import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    getStyle=()=>{
        if(this.props.todo.completed){
            return {
                textDecoration:'line-through'
            }
        }else{
            return {
                textDecoration:'none'
            }
        }
    }
  render() {
    return (
        <div>
        <div style={{backgroundColor:'#f4f4f4'}}>{this.props.todo.title}</div>
        <div style={itemStyle}>{this.props.todo.title}</div>
        <div style={this.getStyle()}>{this.props.todo.title}</div>
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

export default TodoItem;
