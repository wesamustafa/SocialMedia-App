import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'
const Home = () => {
    return (
        <div className="Home">
            <ProfileSide />
            <div className="post-side">posts</div>
            <div className="right-Side">rightSide</div>
        </div>
    )
}

export default Home