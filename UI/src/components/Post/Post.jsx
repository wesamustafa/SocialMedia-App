import React, { useState } from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../api/PostRequest'
const Post = ({ data }) => {
    const { user } = useSelector((state) => state.authReducer.authData)
    const [liked, setLiked] = useState(data.likes.includes(user._id))
    const [likes, setLikes] = useState(data.likes.length)
    const handleLike = () => {
        setLiked((prev) => !prev)
        likePost(data._id, user._id)
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
    }
    return (
        <div className='Post'>
            {/* <img src={process.env.REACT_APP_PUBLIC_FOLDER + data.image} alt="post-image" /> */}
            <img src={"images/" + data.image} alt="post-image" />
            <div className="PostReact">
                <img src={liked ? Heart : NotLike} alt="hear-img" style={{ cursor: "pointer" }} onClick={handleLike} />
                <img src={Comment} alt="comment-img" />
                <img src={Share} alt="share-img" />
            </div>
            <span style={{ color: "var(--gray)", fontSize: "12px" }}>{likes} likes</span>
            <div className='detail'>
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div >
    )
}

export default Post