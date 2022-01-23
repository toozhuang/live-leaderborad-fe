/**
* date: 2022-01-23, Sun, 13:31
* author: TooZhun9
* feature： Score Store Action Type
*/

export enum SCORE_COMMAND{
    REQUEST_SCORE='REQUEST_SCORE',
    SCORE_UPDATE_SUCCESS='SCORE_UPDATE_SUCCESS',
    SCORE_UPDATE_ERROR='SCORE_UPDATE_ERROR'
}

export type ScoreCommandType = |'REQUEST_SCORE'|'SCORE_UPDATE_SUCCESS'|'SCORE_UPDATE_ERROR'

export type ScoreActionType = {
    type: ScoreCommandType,
    payload: object,
}
