import {ICastMovies} from "react-app-env";

export interface ISearch {
    inputValue: string,
    showSearchedItems: boolean,
    resultsActors: null | IActors[],
    resultsMovies: null | ICastMovies[],
    burgerActive: boolean,
    inputOpen: boolean,
    pageActors: number,
    pageMovies: number,
    searchedMovies: null | ICastMovies[],
    searchedActors: null | IActors[],
    loading: boolean,
    totalPagesMovies: number,
    totalPagesActors: number,
}

export interface IActionSearch {
    type: string,
    payload: any,
}

export interface IActors {
    adult: boolean,
    gender: number,
    id: number,
    known_for: [],
    known_for_department: [],
    name: string,
    popularity: number,
    profile_path: string,
}

interface IActorsMovies<T> {
    results: T[]
    page: number,
    total_pages: number,
    total_results: number,
}

export type IActionSetPayloadActorsAndMovies = { actors: IActors[], movies: ICastMovies[], type: string }

export type IActionSetPayloadActors = IActionPayloadActorsSearch & {type: string}
export type IActionSetPayloadMovies = IActionPayloadMoviesSearch & {type: string}

export type IActionPayloadActorsSearch = {actors: IActorsMovies<IActors>}
export type IActionPayloadMoviesSearch = {movies: IActorsMovies<ICastMovies>}

export type ActionTypes = (IActionSetPayloadActorsAndMovies & IActionSetPayloadActors & IActionSetPayloadMovies & IActionSearch)

