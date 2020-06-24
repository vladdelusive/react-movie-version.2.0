import {types} from "./actions";

export interface IActorsResult {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    popularity: number,
    profile_path: string,
}

export interface ITopActors {
    readonly actors: IActorsResult[],
    readonly page: 1,
    readonly loading: true
}

export interface IActionActors {
    type: string,
    payload: []
}

export interface ILoadActors {
    type: typeof types.LOAD_ACTORS,
    payload: IActorsResult[]
}