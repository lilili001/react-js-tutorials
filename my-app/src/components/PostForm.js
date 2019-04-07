import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createPost} from '../actions/postAction'
import PropTypes from 'prop-types';

import axios from 'axios'
class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:"",
            body:""
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const post = {
            title:this.state.title,
            body:this.state.body
        }
        this.props.createPost(post);
    }
    render() {
        return (
            <div>
                Add Post
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div>
                        <label>Title</label>
                        <input type="text" value={this.state.title} onChange={this.onChange} name="title"/>
                    </div>
                    <div>
                        <label>Body</label>
                        <input type="text"value={this.state.body} onChange={this.onChange} name="body"/>
                    </div>
                    <div><button type="submit">Submit</button></div>
                </form>
            </div>
        );
    }
}
//createPost方法 绑定到当前组件上, 所以可以用this.props.createPost
PostForm.propTypes = {
    createPost : PropTypes.func.isRequired
}
//export default PostForm;
export default connect(null,{createPost})(PostForm)