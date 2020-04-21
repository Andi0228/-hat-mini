import React from 'react';
import socket from './../socket';
import "./../index.css"

const JoinBlock = () => {
    return(
        <div className="join-block">
            <input type="text" placeholder="Room ID" />
            <input type="text" placeholder="Ваше имя"/>
            <button className="btn btn-success">ВОЙТИ</button>
        </div>
    )
}
export default JoinBlock;