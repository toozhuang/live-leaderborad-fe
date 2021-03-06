/**
 * date: 2022-01-23, Sun, 11:43
 * author: TooZhun9
 * feature： Wrapper Provider, Top Level of wrapping needed store
 */
import React, { Dispatch, useReducer } from 'react';
import { scoreInitialState, scoreReducer } from './reducer';

import { ScoreAction } from '../dto/action.type';
import { ScoreState } from '../dto/state.type';

// define Component Scope State
const ScoreContext = React.createContext(scoreInitialState);
const ScoreDispatchContext = React.createContext((action: ScoreAction) =>
    console.error(
        'Dispatched action outside of an AuthContext provider',
        action
    )
);

// define Component Score
/**
 * return the score store from redux store
 */
export function useScoreState(): ScoreState {
    const context = React.useContext(ScoreContext);
    if (context === undefined) {
        throw new Error(
            'useScoreState must Be used inside ScoreContext Provider'
        );
    }
    return context;
}

export function useScoreDispatch(): Dispatch<ScoreAction> {
    const context = React.useContext(ScoreDispatchContext);
    if (context === undefined) {
        throw new Error(
            'useScoreState must Be used inside ScoreContext Provider'
        );
    }
    return context;
}

// define Component Scope Provider
/**
 * Score Component wrap Score Page
 * Support Redux features
 * @param children
 * @constructor
 */
export const ScoreProvider = ({ children }: { children: JSX.Element }) => {
    const [scoreStore, dispatch]: [ScoreState, Dispatch<ScoreAction>] =
        useReducer(scoreReducer, scoreInitialState);

    return (
        <ScoreContext.Provider value={scoreStore}>
            <ScoreDispatchContext.Provider value={dispatch}>
                {children}
            </ScoreDispatchContext.Provider>
        </ScoreContext.Provider>
    );
};
