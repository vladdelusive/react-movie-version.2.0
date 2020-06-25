import { IMovies,} from "../../react-app-env";

export interface ISearchActors {
    adult: boolean,
    gender: number,
    id: number,
    known_for: [],
    known_for_department: string,
    name: string,
    popularity: number,
    profile_path: string,
}

export interface ISearch {
    inputValue: string,
    showSearchedItems: boolean,
    resultsActors: null | IActors[],
    resultsMovies: null | IMovies[],
    burgerActive: boolean,
    inputOpen: boolean,
    pageActors: number,
    pageMovies: number,
    searchedMovies: IMovies[],
    searchedActors: IActors[],
    loading: boolean,
    totalPagesMovies: number,
    totalPagesActors: number,
}

export interface IActionSearch {
    type?: string,
    payload?: any,
    actors?: IActorsMovies<IActors>,
    movies?: IActorsMovies<IMovies>
}

interface IActors {
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

