/**
 * date: 2022-01-23, Sun, 11:46
 * author: TooZhun9
 * feature： Store reducer including store state and reducer logic
 */
import {isEqual} from 'lodash-es'

import {ScoreDetail, ScoreState} from "./dto/state.type";
import {SCORE_COMMAND, ScoreAction} from "./dto/action.type";

export const scoreInitialState: ScoreState = {
    connected: false,
    scoreDetails: []
}

/**
 * decide if the score list changed
 * this wil have performance on the component re-render
 * @param previousScoreList
 * @param latestScoreList
 */
export function isScoreListChanged(previousScoreList: ScoreDetail[], latestScoreList: ScoreDetail[]) {
    return !isEqual(previousScoreList, latestScoreList);
}

export const scoreReducer = (previousState: ScoreState, acton: ScoreAction): ScoreState => {
    switch (acton.type) {
        case SCORE_COMMAND.SCORE_SERVER_CONNECTED: {
            return {
                ...previousState,
                connected: true
            }
        }
        case SCORE_COMMAND.SCORE_UPDATE_SUCCESS: {

            if (acton.payload) {
                if (isScoreListChanged(previousState.scoreDetails, acton.payload)) {
                    return {
                        ...previousState,
                        scoreDetails: acton.payload ? acton.payload : []
                    }
                } else {
                    return previousState
                }
            } else {
                return previousState
            }

        }
        case SCORE_COMMAND.SCORE_SERVER_DISCONNECTED:
            return {
                ...previousState,
                connected: false
            }
        default: {
            return previousState;
        }
    }
}
