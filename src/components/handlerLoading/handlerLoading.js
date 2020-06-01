import {setLocalStorage} from '../localStorage/localStorage'

export const handlerLoading = async (self, urlFetch, type) => {
    const fetched = await fetch(urlFetch(self.state.page));
    const data = await fetched.json()
    self.setState((state) => {
        const newState = {
            results: [...state.results, ...data.results],
            page: state.page + 1,
            loading: false
        }
        setLocalStorage(type, newState)
        return newState
    })
}
