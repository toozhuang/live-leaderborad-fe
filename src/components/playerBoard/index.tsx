/**
 * date: 2022-01-23, Sun, 13:49
 * author: TooZhun9
 * feature： Displaying the Score for single player with pros pass in
 */

import React from "react";

import {ScoreDetail} from "../../context/dto/state.type";

import './playerboard.scss'

const PlayerBoard = (inProps: { playScoreDetail: ScoreDetail }) => {
    const {playScoreDetail} = inProps;
    return <div className="player-score-container">
        <span>
        {playScoreDetail.name}
        </span>
        <span>
        {playScoreDetail.score}
        </span>
    </div>
}

export default PlayerBoard;
