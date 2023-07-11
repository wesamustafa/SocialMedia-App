import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../api/UploadRequest';
import { updateUser } from '../../actions/userAction';

function ProfileModel({ modelOpened, setModelOpened, data }) {
    const theme = useMantineTheme();
    const { password, ...other } = data;
    const [formData, setFormData] = useState(other);
    const [profileImage, setProfileImage] = useState(null)
    const [coverImage, setCoverImage] = useState(null)
    const dispatch = useDispatch()
    const param = useParams()
    const { user } = useSelector((state) => state.authReducer.authData)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            event.target.name === "ProfileImage" ? setProfileImage(img) : setCoverImage(img);

        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let UserData = formData;
        if (profileImage) {
            const data = new FormData();
            const fileName = Date.now() + profileImage.name;
            data.append("name", fileName);
            data.append("file", profileImage);
            UserData.profilePicture = fileName;
            try {
                dispatch(uploadImage(data));
            } catch (error) {
                console.log(error);
            }

        }
        if (coverImage) {
            const data = new FormData();
            const fileName = Date.now() + coverImage.name;
            data.append("name", fileName);
            data.append("file", coverImage);
            UserData.coverPicture = fileName;
            try {
                dispatch(uploadImage(data));
            } catch (error) {
                console.log(error);
            }
        }
        dispatch(updateUser(param.id, UserData));
        setModelOpened(false);
    }
    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='55%'
            opened={modelOpened}
            onClose={() => setModelOpened(false)}
        >
            <form className="InfoForm">
                <h3>Your info</h3>
                <div>
                    <input type="text" className='InfoInput' name="firstname" placeholder="First Name" onChange={handleChange} value={formData.firstname} />
                    <input type="text" className='InfoInput' name="lastname" placeholder="Last Name" onChange={handleChange} value={formData.lastname} />
                </div>
                <div>
                    <input type="text" className='InfoInput' name="worksAt" placeholder="Works at" onChange={handleChange} value={formData.worksAt} />
                </div>
                <div>
                    <input type="text" className='InfoInput' name="livesin" placeholder="Lives in" onChange={handleChange} value={formData.livesin} />
                    <input type="text" className='InfoInput' name="country" placeholder="Country" onChange={handleChange} value={formData.country} />
                </div>
                <div>
                    <input type="text" className='InfoInput' name="relationship" placeholder="RealtionShip Status" onChange={handleChange} value={formData.relationship} />
                </div>
                <div>
                    Profile Image
                    <input type="file" name="ProfileImage" onChange={onImageChange} />
                    Cover Image
                    <input type="file" name="CoverImage" onChange={onImageChange} />
                </div>
                <button className="button InfoButton" onClick={handleSubmit}>Update</button>
            </form>
        </Modal>
    );
}
export default ProfileModel