import http from "http"

import {Server} from "socket.io"
import express from "express";
import { receiveMessageOnPort } from "worker_threads";
const app= express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000'],
        methods:["GET,POST"]
    }
});

export const getReceiverSocketId=(receiverId)=>{
    return userSocketMap[receiveMessageOnPort];
}
const userSocketMap={};

io.on('connection', (socket) => {
    console.log('A user connected',socket.id);

    const userId=socket.handshake.query.userId;
    if(userId!="undefined")
        {
            userSocketMap[userId]=socket.id
        }
        io.emit("getOnlineUsers",Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        console.log('User disconnected');
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });

    // Handle other events as needed
});


export {app,io,server}

