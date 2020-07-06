import {
    ICastActors,
    IActorsMovies,
    ICastMovies,
    IDetailsMovies,
    IDetailsActors,
    IMovies,
    ITopActors, IPersonInfo, IMovieState
} from "react-app-env";

const typeError = new TypeError("Value type is not the expected.")

export const guards = {
    movData: ({data}: { data: IActorsMovies<IMovies> }) => {
        if(Array.isArray(data.results)){
            return data.results
        } else {
            throw typeError
        }
    },
    actData: ({data}: { data:  IActorsMovies<ITopActors> }) => {
        if(Array.isArray(data.results)){
            return data.results
        } else {
            throw typeError
        }
    },
    actorMovies: ({data}: { data: {cast: ICastActors[] & ICastMovies[]} }) => {
        if(Array.isArray(data.cast)){
            return data.cast
        } else {
            throw typeError
        }
    },
    detailsMov: ({data}: {data: IMovieState}) => {
        if ((typeof data.backdrop_path === "string" || data.backdrop_path === null) || (typeof data.overview === "string" || data.overview === null) ||
            (typeof data.poster_path === "string" || data.poster_path === null) || (typeof data.title === "string" ||  data.title === null) ||
            (typeof data.release_date === "string" ||  data.release_date === null) || (typeof data.vote_average === "number" || data.vote_average === null)
            || Array.isArray(data.genres)){
            return data
        }
        throw typeError
    },
    detailsAct: ({data}: {data: IDetailsActors & IPersonInfo }) => {
        if((typeof data.biography === "string" || data.biography === null) || (typeof data.birthday === "string" || data.birthday === null) || (typeof data.name === "string"
            || data.name === null) || (typeof data.place_of_birth === "string" || data.place_of_birth === null) || (typeof data.profile_path === "string" || data.profile_path === null) ) {
            return data
        }
        throw typeError
    },
    movieResults: ({data}: any ) => {
        if(Array.isArray(data.results)){
            return data.results
        } else {
            throw typeError
        }
    },
    searchData: <T>({data}: { data: IActorsMovies<T> }) => {
        if( Array.isArray(data.results)
            && typeof data.total_results === 'number'
            && typeof data.total_pages === 'number'
            && typeof data.page === 'number')
        {
            return data
        }
        throw typeError
    },
}

