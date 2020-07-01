/// <reference types="react-scripts" />
import {ISearchState} from "./store/search/types";
import { IMoviesState } from 'store/movies/types'
import { IActorsState } from 'store/actors/types'
import * as H from "history";

export interface IStore {
    search: ISearchState,
    movies: IMoviesState,
    actors: IActorsState,
}

export interface ICastActors {
    cast_id: number,
    character: string,
    credit_id: string,
    gender: number,
    id: number,
    name: string,
    order: number,
    profile_path: string,
}

export interface ICard {
    path?: string,
    id: number,
    gender: number,
    name: string,
}

export interface ITopActors {
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

export interface IMovies {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface IActorsMovies<T> {
    results: T[],
    page: number,
    total_pages: number,
    total_results: number,
}

export interface ICastMovies {
    adult: boolean,
    backdrop_path: string,
    character: string,
    credit_id: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface IDetailsMovies {
    backdrop_path: string,
    release_date: string,
    poster_path: string,
    overview: string,
    genres: Array<{id: number, name: string}>,
    title: string,
    vote_average: number,
}

export interface IDetailsActors {
    biography: string,
    birthday: string,
    name: string,
    place_of_birth: string,
    profile_path: string,
}

interface IPersonInfo {
    adult: boolean,
    gender: number,
    id: number,
    deathday: null | string,
    known_for_department: [],
    media_type?: string,
    popularity: number,
    biography: string,
    birthday: string,
    name: string,
    place_of_birth: string,
    profile_path: string,
    also_known_as: [] | null,
    homepage: null | string
}


interface ISpokenLanguages {
    iso_639_1: string,
    name: string
}

interface IGenre {
    id: number,
    name: string
}

export interface IMovieState {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null | object
    budget: number,
    genres: IGenre[],
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    release_date: string,
    revenue: number,
    runtime: number | null,
    spoken_languages: ISpokenLanguages[],
    status: string,
    tagline: string | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface IReviewsMovies {
    author: string,
    content: string,
    id: string,
    url?: string,
    photoField?: object | null,
    rateField?: number
}

export interface RouteComponentProps<P> {
    match: match<P>;
    location: H.Location;
    history: H.History;
    staticContext?: any;
}

export interface match<P> {
    params: P;
    isExact: boolean;
    path: string;
    url: string;
}
