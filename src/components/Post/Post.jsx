import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
const Post = ({ data }) => {
    return (
        <div className='Post'>
            <img src={data.img} alt="post-image" />
            <div className="PostReact">
                <img src={data.liked ? Heart : NotLike} alt="hear-img" />
                <img src={Comment} alt="comment-img" />
                <img src={Share} alt="share-img" />
            </div>
            <span>{data.likes} likes</span>
            <div className='detail'>
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    )
}

export default Post