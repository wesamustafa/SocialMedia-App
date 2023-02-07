import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
const InfoCard = () => {
    return (
        <div className="InfoCard">
            <div className="InfoHead">
                <h4>your Info</h4>
                <div>
                    <UilPen width='2rem' height='1.2rem' />
                </div>
            </div>
            <div className="info">
                <span><b>Status </b></span>
                <span>in Relationship</span>
            </div>
            <div className="info">
                <span><b>Lives in </b></span>
                <span>Shekih Zayed, Egypt</span>
            </div>
            <div className="info">
                <span><b>Works at </b></span>
                <span>Asgatech</span>
            </div>
            <button className='button logoout-button'>Logout</button>
        </div>
    )
}

export default InfoCard