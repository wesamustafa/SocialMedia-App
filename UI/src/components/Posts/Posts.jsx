import React, { useEffect } from 'react'
import { getTimelinePosts } from '../../actions/postAction'
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import './Posts.css'
// import { PostsData } from '../../Data/Posts'
import { useParams } from "react-router-dom";
const Posts = () => {
    // const params = useParams()
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    let { posts, loading } = useSelector((state) => state.postReducer);
    const params = useParams();
    useEffect(() => {
        dispatch(getTimelinePosts(user._id));
    }, []);
    if (!posts) return "no posts";
    if (params.id) posts = posts.filter((post) => post.userId === params.id)
    // if (!posts) return 'No Posts';
    // if (params.id) posts = posts.filter((post) => post.userId === params.id)
    return (
        <div className='Posts'>
            {loading ? "Fetching Posts..." :
                posts.map((post, id) => {
                    return <Post data={post} key={id} />
                })}


        </div>
    )
}

export default Posts