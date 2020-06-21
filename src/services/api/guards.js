
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
    actorDetails: (request) => {
        return request.data
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
        if(Array.isArray(data.results) && data.results.length !== 0){
            if(typeof data.total_results === 'number' && typeof data.total_pages === 'number' && typeof data.page === 'number') {
                return data
            }
        }
        return defaultData
    },
}

