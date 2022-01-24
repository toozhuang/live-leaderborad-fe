/**
 * date: 2022-01-23, Sun, 13:31
 * author: TooZhun9
 * feature： Score Store Action Type
 */

import { ScoreDetail } from './state.type';

export enum SCORE_COMMAND {
    SCORE_SERVER_CONNECTED = 'SCORE_SERVER_CONNECTED',
    SCORE_UPDATE_SUCCESS = 'SCORE_UPDATE_SUCCESS',
    SCORE_SERVER_DISCONNECTED = 'SCORE_SERVER_DISCONNECTED',
}

export type ScoreCommand =
    | 'SCORE_SERVER_CONNECTED'
    | 'SCORE_UPDATE_SUCCESS'
    | 'SCORE_SERVER_DISCONNECTED';

export type ScoreAction = {
    type: ScoreCommand;
    payload?: ScoreDetail[];
};
