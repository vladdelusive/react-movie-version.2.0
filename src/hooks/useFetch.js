import { useState, useEffect } from 'react'

export const useFetchHook = (url, page) => {
    const [fetchResult, setFetchResult] = useState({});
    useEffect(() => {
        async function fetchData() {
            const fetched = await fetch(url(page));
            const result = await fetched.json()
            
            setFetchResult({
                fetchData: [...result.results],
                fetchPage: page + 1,
                fetchLoading: false
            })
        }
        fetchData()
    }, [url, page, setFetchResult])
    
    return fetchResult;
}
