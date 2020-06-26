import {types} from "./actions";

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
