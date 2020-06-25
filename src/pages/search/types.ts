import {IMoviesNewly as ISearchMovies} from "../../react-app-env";
import {ISearchActors} from "../../store/search/types";

export interface ISearch {
    pageActors: number,
    pageMovies: number,
    searchedMovies: ISearchMovies[],
    searchedActors: ISearchActors[],
    loading: boolean,
    totalPagesMovies: number,
    totalPagesActors: number,
}