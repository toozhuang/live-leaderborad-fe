/**
* date: 2022-01-22, Sat, 23:4
* author: TooZhun9
* feature： 路由配置； Router Config
*/
import React from 'react'

import BaseLayout from "../components/layout";


export type RouteType = {
    paths: string[],
    component: () => JSX.Element,
    isPrivate: boolean
}

const routes: RouteType[] = [
    {
        paths: ['/','/scores'],
        component: () =>
            <BaseLayout/>
        ,
        isPrivate: true
    },
    // <ScoreProvider>
    //     <ScorePage></ScorePage>
    // </ScoreProvider>
    // </BaseLayout>
]

export default routes
