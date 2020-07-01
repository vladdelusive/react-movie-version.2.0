import {IActors} from "store/search/types";
import {IMovies} from "react-app-env";

export interface ICastPropsActors {
    cast: IActors[],
}
export interface ICastPropsMovies {
    results: IMovies[] | any,
    path: string,
}