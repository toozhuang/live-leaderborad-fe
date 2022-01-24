import React, { createContext } from 'react';

import webSocket from 'socket.io-client';
import { ISocketProvider } from '../dto/socket.type';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ws = new webSocket('ws://localhost:8080');

export const SocketContext = createContext(ws);

export const SocketProvider = (props: ISocketProvider) => (
    <SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>
);
