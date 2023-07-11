import React, { useState, useRef } from 'react'
import './PostShare.css'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import ProfileImage from '../../img/profileImg.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../actions/uploadAction'
const PostShare = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const loading = useSelector((state) => state.postReducer.uploading);
    const [image, setImage] = useState(null)
    const desc = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img);
        }
    };
    const imageRef = useRef();
    const reset = () => {
        setImage(null);
        desc.current.value = "";
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }
        if (image) {
            const data = new FormData()
            const fileName = Date.now() + image.name
            data.append("name", fileName)
            data.append("file", image)
            newPost.image = fileName
            console.log(newPost)
            try {
                dispatch(uploadImage(data));
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(uploadPost(newPost))
        reset()

    }
    return (
        <>
            <div className='PostShare'>
                <img src={user.coverPicture ? serverPublic + "/" + user.profilePicture : serverPublic + "/defaultProfile.png"} alt="" />
                <div>
                    <input ref={desc} type="text" placeholder="What's happening " required />
                    <div className="PostOptions">
                        <div className="option" style={{ color: "var(--photo)" }} onClick={() => { imageRef.current.click() }}>
                            <UilScenery />
                            Photo
                        </div>
                        <div className="option" style={{ color: "var(--video)" }}>
                            <UilPlayCircle />
                            Video
                        </div>
                        <div className="option" style={{ color: "var(--location)" }}>
                            <UilLocationPoint />
                            Location
                        </div>
                        <div className="option" style={{ color: "var(--shedule)" }}>
                            <UilSchedule />
                            Schedule
                        </div>
                        <button className='button ps-button' onClick={handleSubmit}>{loading ? "uploading" : "Share"}</button>
                        <div style={{ display: "none" }}>
                            <input type="file" name='myImage' ref={imageRef} onChange={onImageChange} />
                        </div>
                    </div>
                    {image && (
                        <div className="PerviewImage">
                            <UilTimes onClick={() => {
                                setImage(null)
                            }} />
                            <img src={URL.createObjectURL(image)} alt="imagePost" />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default PostShare