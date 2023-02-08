import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModel({ modelOpened, setModelOpened }) {
    const theme = useMantineTheme();

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
                    <input type="text" className='InfoInput' name="FirstName" placeholder="First Name" />
                    <input type="text" className='InfoInput' name="LastName" placeholder="Last Name" />
                </div>
                <div>
                    <input type="text" className='InfoInput' name="WorksAt" placeholder="Works at" />
                </div>
                <div>
                    <input type="text" className='InfoInput' name="LivesIn" placeholder="Lives in" />
                    <input type="text" className='InfoInput' name="Country" placeholder="Country" />
                </div>
                <div>
                    <input type="text" className='InfoInput' name="RealtionShipStatus" placeholder="RealtionShip Status" />
                </div>
                <div>
                    Profile Image
                    <input type="file" name="ProfileImage" />
                    Cover Image
                    <input type="file" name="CoverImage" />
                </div>
                <button className="button InfoButton">Update</button>
            </form>
        </Modal>
    );
}
export default ProfileModel