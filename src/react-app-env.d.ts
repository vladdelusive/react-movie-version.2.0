/// <reference types="react-scripts" />
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
    path: string,
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
    media_type: string,
    name: string,
    popularity: number,
    profile_path: string | null,
}

export interface IMoviesNewly {
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