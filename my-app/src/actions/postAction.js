import axios from 'axios';

export const fetchPosts = () => dispatch=>{
        fetch('http://jsonplaceholder.typicode.com/posts?_limit=1')
            .then(res=>res.json())
            .then(posts=> dispatch({
                type:'FETCH_POSTS',
                payload:posts
            }))
}

export const createPost = postData => dispatch=>{
    axios.post('http://jsonplaceholder.typicode.com/posts',(postData))
        .then(post=> dispatch({
            type:'NEW_POST',
            payload:post
        }))
}