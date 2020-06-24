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