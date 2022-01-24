import { createContext, ReactChild } from "react";
import webSocket from 'socket.io-client'


// @ts-ignore
const ws:any= new webSocket("ws://localhost:8080");

export const SocketContext = createContext(ws);

type ISocketProvider ={
    children: ReactChild;
}

export const SocketProvider = (props: ISocketProvider) => (
    <SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>
);
