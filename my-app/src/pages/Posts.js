import React, {Component} from 'react';
import PostForm from '../components/PostForm'
import PropTypes from 'prop-types';

//从store获取数据
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/postAction'

class Posts extends Component {
    componentDidMount(){
        this.props.fetchPosts()
    }
    componentWillReceiveProps(nextProps){
        if(!!nextProps.newPost){
            //if((nextProps.newPost)['data']) this.props.posts.unshift(nextProps.newPost.data)
        }
    }
    render() {
        //变量也可以插入到dom中
        const PostItems = this.props.posts.map((post,index)=>(
            <div key={index}>
                <h3>{post.id}-{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                <PostForm/>
                {PostItems}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts : PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired,
    newPost:PropTypes.object.isRequired
}

//export default Posts;
const mapStateToProps = state =>  ({
    posts:state.posts.items,
    newPost:state.posts.item
})

export default connect(mapStateToProps,{fetchPosts})(Posts)
