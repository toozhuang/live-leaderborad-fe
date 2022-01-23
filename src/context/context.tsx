/**
* date: 2022-01-23, Sun, 11:43
* author: TooZhun9
* feature： Wrapper Provider, Top Level of wrapping needed store
*/
import React, {useReducer} from 'react'
import {scoreInitialState, ScoreReducer} from "./reducer";


const ScoreContext = React.createContext(scoreInitialState)
const ScoreDispatchContext = React.createContext({})


export const ScoreProvider = ({children}:{children:JSX.Element})=>{
    const [scoreStore, dispatch] = useReducer(ScoreReducer,scoreInitialState);

    return (
        <ScoreContext.Provider value={scoreStore}>
            <ScoreDispatchContext.Provider value={dispatch}>
                {children}
            </ScoreDispatchContext.Provider>
        </ScoreContext.Provider>
    )

}
