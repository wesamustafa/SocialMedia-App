import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
const Post = ({ data }) => {
    const { user } = useSelector((state) => state.authReducer.authData)

    return (
        <div className='Post'>
            {/* <img src={process.env.REACT_APP_PUBLIC_FOLDER + data.image} alt="post-image" /> */}
            <img src={"images/" + data.image} alt="post-image" />
            <div className="PostReact">
                <img src={data.liked ? Heart : NotLike} alt="hear-img" />
                <img src={Comment} alt="comment-img" />
                <img src={Share} alt="share-img" />
            </div>
            <span style={{ color: "var(--gray)", fontSize: "12px" }}>{data.likes} likes</span>
            <div className='detail'>
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div >
    )
}

export default Post