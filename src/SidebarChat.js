import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import db from './firebase';
import "./SidebarChat.css"

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if (roomName) {
            //....some database things
            db.collection("rooms").add({
                name: roomName,
            })
        }
    };
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`} />
                <div className='sidebarChat__info'>
                    <h2>{name}</h2>
                    <p>Last message....</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
