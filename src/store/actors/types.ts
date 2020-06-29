import {ICastMovies, IDetailsActors, IPersonInfo} from "react-app-env";

export interface IActorsResult {
    adult: boolean,
    gender: number,
    id: number,
    known_for: [],
    known_for_department: [],
    media_type?: string,
    name: string,
    popularity: number,
    profile_path: string,
} 

export interface ITopActorsState {
    actors: IActorsResult[],
    page: number,
    loading: boolean
}

export interface IActorsState{
    topActors: ITopActorsState,
    actorsInfo: {
        [key: number]: IActorInfo
    }
}

export interface IActorInfo {
    moviesInfo: ICastMovies[],
    personInfo: (IDetailsActors & IPersonInfo)
}

export interface IActionTopActors<T = Record<any, any>> {
    type: string,
    payload: T
}

export interface IAction {
    type: string,
    id: number,
    movies: ICastMovies[],
    person: (IDetailsActors & IPersonInfo)
}

export interface IActorIdData {
    id: number,
    movies: ICastMovies[],
    person: (IDetailsActors & IPersonInfo)
}

export type IActionTypes = IActionTopActors<IActorsResult[]> & IActorIdData