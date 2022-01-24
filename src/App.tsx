/**
 * date: 2022-01-22, Sat, 23:4
 * author: TooZhun9
 * feature： Main Entry With Route
 */
import React from 'react';
import {BrowserRouter, Routes, Route,} from "react-router-dom"


import './App.css';

import routes, {RouteType} from "./common/routes";
import {SocketProvider} from "./context/socket/socket.context";

function App() {
    return (
        <SocketProvider>
            <BrowserRouter>
                <Routes>
                    {
                        routes.map((route: RouteType) => {
                            return route.paths.map(path => {
                                    return (<Route path={path}
                                                   key={path}
                                                   element={
                                                       (() => {
                                                           return <route.component/>
                                                       })()
                                                   }
                                        >
                                        </Route>
                                    )
                                }
                            )


                        })
                    }
                </Routes>
            </BrowserRouter>
        </SocketProvider>
    );
}

export default App;
