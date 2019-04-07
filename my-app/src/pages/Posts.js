import React, {Component} from 'react';
import PostForm from '../components/PostForm'
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts:[]
        }
    }

    componentWillMount() {
        fetch('http://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(res=>res.json())
            .then(data=>this.setState({posts:data}))
    }

    render() {
        //变量也可以插入到dom中
        const PostItems = this.state.posts.map(post=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
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

export default Posts;
