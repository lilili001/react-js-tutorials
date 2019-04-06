import React, { Component } from 'react';
class AddItem extends Component {
    state={
        title:''
    }
    onChange= (e)=>this.setState({[e.target.name]:e.target.value})//等同于 'title':e.target.value
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.addItem( this.state.title)
        this.setState({title:''})
    }
  render() {
    return (
      <form className="" onSubmit={this.onSubmit} style={{display:'flex'}}>
          <input value={this.state.title} onChange={this.onChange} type="text" name="title" style={{flex:10}} placeholder="Add Item ..."/>
          <button type="submit" value="submit"  className="btn" style={{flex:1}}>Submit</button>
      </form>
    );
  }
}

export default AddItem;
