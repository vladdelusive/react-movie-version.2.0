import {IMovies, ITopActors} from "react-app-env";

export interface ISearchProps {
    value: string,
    searchResultActors: ITopActors[] | null ,
    searchResultMovies: IMovies[] | null,
}
