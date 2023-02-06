import React from 'react'
import './Home.css'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
const Home = () => {
    return (
        <div className="Home">
            <ProfileSide />
            <PostSide />
            <div className="right-Side">rightSide</div>
        </div>
    )
}

export default Home