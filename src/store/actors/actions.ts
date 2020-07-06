import {IActorsResult, IActionTopActors, IAction, IActorIdData } from "./types";

export const types = {
    GET_TOP_ACTORS: "@actors/top_actors/GET_TOP_ACTORS",
    LOAD_TOP_ACTORS: "@actors/top_actors/LOAD_TOP_ACTORS",
    SET_ACTOR_INFO: "@actors/actors_info/SET_DATA",
    GET_ACTOR_INFO: "@actors/actors_info/GET_ACTOR_INFO",
}

export const actions = { 
    getActors: () => ({type: types.GET_TOP_ACTORS}),
    saveActors: (payload: IActorsResult[]): IActionTopActors<IActorsResult[]> => ({type: types.LOAD_TOP_ACTORS, payload}),
    getActorInfo: (id: number) => ({type: types.GET_ACTOR_INFO, id}),
    setActorIdData: ({person, movies, id}: IActorIdData): IAction => ({type: types.SET_ACTOR_INFO, person, movies, id}),
}
