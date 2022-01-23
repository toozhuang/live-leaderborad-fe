/**
* date: 2022-01-23, Sun, 11:46
* author: TooZhun9
* feature： Store reducer including store state and reducer logic
*/
import {ScoreStateType} from "./dto/state.type";
import {SCORE_COMMAND, ScoreActionType,} from "./dto/action.type";

export const scoreInitialState:ScoreStateType = {
    scores:[1,2,3,4]
}

export const ScoreReducer=(previousState: ScoreStateType, acton:ScoreActionType)=>{
switch (acton.type){
    case SCORE_COMMAND.REQUEST_SCORE:
    case SCORE_COMMAND.SCORE_UPDATE_SUCCESS:
    case SCORE_COMMAND.SCORE_UPDATE_ERROR:
    default:{
        return previousState;
    }
}
}
