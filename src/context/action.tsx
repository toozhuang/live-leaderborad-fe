/**
 * date: 2022-01-23, Sun, 13:46
 * author: TooZhun9
 * feature： Action for refresh the scores
 */
import {Dispatch} from "react";

import {SCORE_COMMAND, ScoreAction} from "./dto/action.type";
import {ScoreDetail} from "./dto/state.type";

export function updateScores(dispatch: Dispatch<ScoreAction>, updatePayload: ScoreDetail[]) {
    dispatch({type: SCORE_COMMAND.SCORE_UPDATE_SUCCESS, payload: updatePayload})
}

export function socketConnected(dispatch: Dispatch<ScoreAction>) {
    dispatch({type: SCORE_COMMAND.SCORE_SERVER_CONNECTED})
}

export function socketDisConnected(dispatch: Dispatch<ScoreAction>) {
    dispatch({type: SCORE_COMMAND.SCORE_SERVER_DISCONNECTED})
}

