import React, { useEffect, useRef, useState } from 'react';
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
import { io } from 'socket.io-client';
const Chat = () => {
    const { user } = useSelector((state) => state.authReducer.authData);
    console.log(user)
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [sendMessage, setSendMessage] = useState(null)
    const [receiveMessage, setReceiveMessage] = useState(null)
    const socket = useRef()
    // sending message to socket server
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit('send-message', sendMessage)
        }
    }, [sendMessage])


    useEffect(() => {
        socket.current = io('http://localhost:8800');
        socket.current.emit("new-user-add", user._id)
        socket.current.on('get-users', (users) => {
            setOnlineUsers(users);
            // console.log(onlineUsers);
        })
    }, [user])
    // reveive message from socket to server
    useEffect(() => {
        socket.current.on("receive-message", (data) => {
            console.log("Data Received in parent chat.jsx", data)
            setReceiveMessage(data);
        })

    }, [])
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
                <Chatbox chat={currentChat} currentUser={user._id} setSendMessage={setSendMessage} receiveMessage={receiveMessage} />
            </div>
        </div>
    )
}

export default Chat