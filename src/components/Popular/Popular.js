import React, { useState, useEffect } from 'react'

import Content from '../Content/Content'
import './Popular.css'
import { POPULAR_URL, POPULAR } from '../../config'
import Loader from '../Loader/Loader'
import ArrowTop from '../ArrowTop/ArrowTop'
import { setLocalStorage, getLocalStorage } from '../localStorage/localStorage'

import API from '../../API/API'


function Popular() {
    const [results, setResults] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)

    const handlerLoading = async () => {
        const fetched = await API(POPULAR_URL(page));
        const {data} = fetched
        const state = {
            results: [...results, ...data.results],
            page: page + 1,
            loading: false
        }
        setLocalStorage(POPULAR, state)

        setResults([...results, ...data.results])
        setPage(page + 1)
    }

    useEffect(() => {
        if (getLocalStorage(POPULAR)) {
            const localState = getLocalStorage(POPULAR)
            setResults(localState.results)
            setPage(localState.page)
            setLoading(false)
        } else {
            handlerLoading()
            setLoading(false)
        }
    }, [])

    return (
        <>
            <h1>Popular</h1>
            {
                loading
                    ? <Loader />
                    : <>
                        <div>
                            <div>
                                <Content
                                    results={results}
                                    path="/movies"
                                />
                            </div>
                        </div>
                        <div>
                            <ArrowTop />
                            <button
                                onClick={handlerLoading}>Load more..</button>
                        </div>
                    </>
            }
        </>
    )
}


export default Popular;
