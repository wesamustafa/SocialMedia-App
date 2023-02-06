import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'
const ProfileCard = () => {
    return (
        <div className='ProfileCard'>
            <div className='ProfileImages'>
                <img src={Cover} alt="ImageCover" />
                <img src={Profile} alt="ImageProfile" />
            </div>
            <div className='ProfileName'>
                <span>Wessam Mustafa</span>
                <span>Front-end Developer</span>
            </div>
            <div className='FollowStatus'>
                <hr />
                <div>
                    <div className="follow">
                        <span>6, 890</span>
                        <span>Following</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>1</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />
            </div>
            <span>
                My Profile
            </span>
        </div>
    )
}

export default ProfileCard