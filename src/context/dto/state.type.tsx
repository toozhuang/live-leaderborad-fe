/**
* date: 2022-01-23, Sun, 13:23
* author: TooZhun9
* feature： Redux State type for using
*/
export type ScoreStateType ={
    connected: boolean,
    scoreDetails:scoreDetail[] ;
}

export type scoreDetail ={
    name: string;
    score: number;
    id:string;
}
