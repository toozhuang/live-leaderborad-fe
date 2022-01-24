import webSocket from 'socket.io-client'

import { createContext } from "react";
import {ISocketProvider} from "../dto/socket.type";

// @ts-ignore
const ws:any= new webSocket("ws://localhost:8080");

export const SocketContext = createContext(ws);


export const SocketProvider = (props: ISocketProvider) => (
    <SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>
);
