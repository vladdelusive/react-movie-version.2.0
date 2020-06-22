
export const guards = {
    movActData: (request) => {
        if(Array.isArray(request.data.results)){ 
            return request.data.results
        } else {
            return []
        }
    },
    actorMovies: (request) => {
        if(Array.isArray(request.data.cast)){
            return request.data.cast
        } else {
            return []
        }
    },
    detailsMov: ({data}) => {
        if(typeof data.backdrop_path !== "string") data.backdrop_path = null
        if(typeof data.overview !== "string") data.overview = null
        if(typeof data.poster_path !== "string") data.poster_path = null
        if(typeof data.title !== "string") data.title = null
        if(typeof data.release_date !== "string") data.release_date = null
        if(typeof data.vote_average !== "number") data.vote_average = null
        if(!Array.isArray(data.genres)) data.genres = null
        return data
    },
    detailsAct: ({data}) => {
        if(typeof data.biography !== "string") data.biography = null
        if(typeof data.birthday !== "string") data.birthday = null
        if(typeof data.name !== "string") data.name = null
        if(typeof data.place_of_birth !== "string") data.place_of_birth = null
        if(typeof data.profile_path !== "string") data.profile_path = null
        return data
    },
    movieResults: (request) => {
        if(Array.isArray(request.data.results) && request.data.results.length !== 0){
            return request.data.results
        } else {
            return []
        }
    },
    searchData: ({data}) => {
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

