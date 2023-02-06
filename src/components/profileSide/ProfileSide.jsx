import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard.jsx/ProfileCard'
import './ProfileSide.css'
function ProfileSide() {
    return (
        <div className="ProfileSide">
            <LogoSearch />
            <ProfileCard />
        </div>
    )
}

export default ProfileSide