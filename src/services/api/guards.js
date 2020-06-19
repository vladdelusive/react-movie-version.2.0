
export const guards = {
    movActData: (request) => {
        if(Array.isArray(request.data.results)){ 
            return request.data.results
        } else {
            console.log("REQUEST data is not found in our DB")
            return []
        }
    },
    actorMovies: (request) => {
        if(Array.isArray(request.data.cast)){
            return request.data.cast
        } else {
            console.log("REQUEST data is not found in our DB")
            return []
        }
    },
    actorDetails: (request) => {
        if(request.data instanceof Object){
            return request.data
        } else {
            console.log("REQUEST data is not found in our DB")
            return null
        }
    },
    movieResults: (request) => {
        if(request.data instanceof Object && Array.isArray(request.data.results) && request.data.results.length !== 0){
            return request.data.results
        } else {
            console.log("REQUEST data is not found in our DB")
            return []
        }
    },
    searchData: ({data}) => {
        if(data instanceof Object && Array.isArray(data.results) && data.results.length !== 0){
            if(typeof data.total_results === 'number' && typeof data.total_pages === 'number' && typeof data.page === 'number') {
                return data
            }
            console.log("REQUEST data is not found in our DB")
            return null
        } else {
            console.log("REQUEST data is not found in our DB")
            return {
                page: 1,
                total_results: 0, 
                total_pages: 0, 
                results: []
            }
        }
    },
}

