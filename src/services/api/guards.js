
export const guards = {
    movActData: async (request) => {
        const {data} = await request
        if(Array.isArray(data.results)){
            return data.results
        } else {
            return []
        }
    },
    actorMovies: async (request) => {
        const { data } = await request;
        if(Array.isArray(data.cast)){
            return data.cast
        } else {
            return []
        }
    },
    actorDetails: async (request) => {
        const { data } = await request;
        if(data instanceof Object && data.cast && Object.keys(data.cast).length !== 0){
            return data.cast
        } else {
            return null
        }
    }
}

