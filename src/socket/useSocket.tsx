/**
 * date: 2022-01-23, Sun, 15:39
 * author: TooZhun9
 * feature： generate a socket hook for global use
 */

import { useContext } from "react";
import {SocketContext} from "./socket.context";

export const useSocket = () => {
    const socket = useContext(SocketContext)

    if (socket === undefined) {
        throw new Error('useSocket must Be used inside Socket Provider')
    }
    return socket
}
