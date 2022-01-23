/**
 * date: 2022-01-23, Sun, 11:46
 * author: TooZhun9
 * feature： Store reducer including store state and reducer logic
 */
import {isEqual} from 'lodash-es'

import {scoreDetail, ScoreStateType} from "./dto/state.type";
import {SCORE_COMMAND, ScoreActionType,} from "./dto/action.type";

export const scoreInitialState: ScoreStateType = {
    connected: false,
    scoreDetails: []
}

/**
 * decide if the score list changed
 * this wil have performance on the component re-render
 * @param previousScoreList
 * @param latestScoreList
 */
export function isScoreListChanged(previousScoreList:scoreDetail[], latestScoreList: scoreDetail[]) {
    return !isEqual(previousScoreList, latestScoreList);
}

export const scoreReducer = (previousState: ScoreStateType, acton: ScoreActionType): ScoreStateType => {
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
                        scoreDetails:acton.payload?acton.payload:[]
                    }
                } else {
                    return previousState
                }
            } else {
                return previousState
            }

        }
        case SCORE_COMMAND.SCORE_SERVER_DISCONNECTED:
        default: {
            return previousState;
        }
    }
}
