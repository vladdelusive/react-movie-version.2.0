import {ICastActors} from "../../react-app-env";

interface IDetailsMovies {
    backdrop_path: string,
    release_date: string,
    poster_path: string,
    overview: string,
    genres: string,
    title: string,
    vote_average: number,
}

interface IDetailsActors {
    biography: string,
    birthday: string,
    name: string,
    place_of_birth: string,
    profile_path: string,
}

interface IMoviesNewly {
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

interface ITopActors {
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

interface IActorsMovies {
    results: IMoviesNewly[] | ITopActors[],
    page: number,
    total_pages: number,
    total_results: number,
}

interface ICastMovies {
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

export const guards = {
    movActData: ({data}: { data: IActorsMovies }) => {
        // console.log("h")
        // if(Array.isArray(request.data.results)){
        //     return request.data.results
        // } else {
        //     return []
        // }
        return data.results
    },
    actorMovies: ({data}: { data: {cast: ICastActors[] | ICastMovies[]} }) => {
        //console.log(data)
        // if(Array.isArray(request.data.cast)){
        //     return request.data.cast
        // } else {
        //     return []
        // }
        return data.cast
    },
    detailsMov: ({data}: {data: IDetailsMovies}) => {
        // if(typeof data.backdrop_path !== "string") data.backdrop_path = null
        // if(typeof data.overview !== "string") data.overview = null
        // if(typeof data.poster_path !== "string") data.poster_path = null
        // if(typeof data.title !== "string") data.title = null
        // if(typeof data.release_date !== "string") data.release_date = null
        // if(typeof data.vote_average !== "number") data.vote_average = null
        // if(!Array.isArray(data.genres)) data.genres = null
        return data
    },
    detailsAct: ({data}: {data: IDetailsActors }) => {
        // if(typeof data.biography !== "string") data.biography = null
        // if(typeof data.birthday !== "string") data.birthday = null
        // if(typeof data.name !== "string") data.name = null
        // if(typeof data.place_of_birth !== "string") data.place_of_birth = null
        // if(typeof data.profile_path !== "string") data.profile_path = null
        return data
    },
    movieResults: ({data}: { data: { results:any } }) => {
        console.log(data)
        // if(Array.isArray(data.results) && data.results.length !== 0){
        //     return data.results
        // } else {
        //     return []
        // }
        return data.results
    },
    searchData: ({data}:any) => {
        const defaultData = {
            page: 1,
            total_results: 0, 
            total_pages: 0, 
            results: []
        }
        if( Array.isArray(data.results)
            && data.results.length !== 0
            && typeof data.total_results === 'number'
            && typeof data.total_pages === 'number'
            && typeof data.page === 'number')
        {
            return data
        }
        return defaultData
    },
}

