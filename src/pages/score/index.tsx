/**
 * date: 2022-01-23, Sun, 13:44
 * author: TooZhun9
 * feature： Display the Scores
 */

import React, { useCallback, useEffect} from "react";
import PlayerBoard from "../../components/playerBoard";
import {useScoreDispatch, useScoreState} from "../../context/context";
import {useSocket} from "../../socket/useSocket";
import {socketConnected, updateScores} from "../../context/action";

import './scorepage.scss'
import {PlayerScoreType} from "../../components/playerBoard/dto/playerscore.type";
import {Spin} from "antd";


const ScorePage = () => {
    const socket = useSocket()
    const store = useScoreState();
    const dispatch = useScoreDispatch()
    const {connected, scoreDetails} = store;

    const refreshScore = useCallback((event: { scores: PlayerScoreType[] }) => {
        const {scores} = event
        updateScores(dispatch, scores)
    }, [dispatch])


    useEffect(() => {
        const onConnected = () => {
            console.log('connected')
            socketConnected(dispatch)
        }

        socket.addEventListener('connect', onConnected)
        socket.addEventListener('scores', refreshScore)
        return () => {
            socket.removeEventListener('scores', refreshScore)
            socket.removeEventListener('connect')
        }

    }, [dispatch, refreshScore, socket])

    console.log('render:')

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
