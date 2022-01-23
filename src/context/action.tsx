/**
 * date: 2022-01-23, Sun, 13:46
 * author: TooZhun9
 * feature： Action for refresh the scores
 */
import {PlayerScoreType} from "../components/playerBoard/dto/playerscore.type";
import {SCORE_COMMAND, ScoreActionType} from "./dto/action.type";
import {Dispatch} from "react";

export function updateScores(dispatch: Dispatch<ScoreActionType>, updatePayload: PlayerScoreType[]) {
    dispatch({type: SCORE_COMMAND.SCORE_UPDATE_SUCCESS, payload: updatePayload})
}

export function socketConnected(dispatch: Dispatch<ScoreActionType>) {
    dispatch({type: SCORE_COMMAND.SCORE_SERVER_CONNECTED})
}
