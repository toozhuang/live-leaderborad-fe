/**
 * date: 2022-01-23, Sun, 13:44
 * author: TooZhun9
 * feature： Display the Scores
 */

import React, { useCallback, useEffect} from "react";
import {Spin} from "antd";

import PlayerBoard from "../../components/playerBoard";
import {useScoreDispatch, useScoreState} from "../../context/context";
import {useSocket} from "../../context/socket/useSocket";
import {socketConnected, updateScores,socketDisConnected} from "../../context/action";


import {ScoreDetail} from "../../context/dto/state.type";
import './scorepage.scss'


const ScorePage = () => {
    const socket = useSocket()
    const store = useScoreState();
    const dispatch = useScoreDispatch()
    const {connected, scoreDetails} = store;

    const refreshScore = useCallback((event: { scores: ScoreDetail[] }) => {
        const {scores} = event
        updateScores(dispatch, scores)
    }, [dispatch])


    useEffect(() => {
        const onConnected = () => {
            socketConnected(dispatch)
        }

        const onDisconnected = () => {
            socketDisConnected(dispatch)
        }

        socket.addEventListener('connect', onConnected)

        socket.addEventListener('scores', refreshScore)

        socket.on('disconnect',onDisconnected)

        return () => {
            socket.removeEventListener('scores', refreshScore)
            socket.removeEventListener('connect')
        }

    }, [dispatch, refreshScore, socket])


    return <div className="score-container">
        <h2>Live Score Board</h2>
        {
            !connected && <Spin size="large"/>
        }
        {
            connected && scoreDetails.length > 0 && scoreDetails.map(item => {
                return <PlayerBoard
                    key={item.id}
                    playScoreDetail={item}/>
            })
        }

    </div>
}

export default ScorePage;
