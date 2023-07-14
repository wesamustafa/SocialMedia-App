import React, { useEffect, useState } from 'react';
import './Chat.css';
import LogoSearch from '../../components/LogoSearch/LogoSearch';
import { UilSetting } from '@iconscout/react-unicons';
import Home from '../../img/home.png';
import Noti from '../../img/noti.png';
import Comment from '../../img/comment.png';
import { useSelector } from 'react-redux';
import { userChats } from '../../api/ChatRequests';
import Conversation from '../../components/Conversation/Conversation';
import { Link } from 'react-router-dom';
import Chatbox from '../../components/Chatbox/Chatbox';
const Chat = () => {
    const { user } = useSelector((state) => state.authReducer.authData);
    console.log(user)
    const [chats, setChats] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await userChats(user._id)
                setChats(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        getChats()
    }, [user])
    return (
        <div className='Chat'>
            {/* left side */}
            <div className="Left-side-chat">
                <LogoSearch />
                <div className="Chat-container">

                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat) => (
                            <div onClick={() => setCurrentChat(chat)}>
                                <Conversation data={chat} currentUserId={user._id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="Right-side-chat">
                <div style={{ width: "20rem", alignSelf: "flex-end" }}>
                    <div className="NavIcons">
                        <Link to='../home'>
                            <img src={Home} alt="homeIcon" />
                        </Link>
                        <UilSetting />
                        <img src={Noti} alt="NOTIIcon" />
                        <Link to='../chat'>
                            <img src={Comment} alt="CommentIcon" />
                        </Link>
                    </div>
                </div>
                {/* chat body */}
                <Chatbox chat={currentChat} currentUser={user._id} />
            </div>
        </div>
    )
}

export default Chat