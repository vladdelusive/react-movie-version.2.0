import React, { useState, useEffect } from 'react'

import './MoviesPage.css'
import Content from '..//Content/Content'
import { NEWLY_MOVIES_URL, NEWLY } from '../config'
import Loader from '../Loader/Loader'
import ArrowTop from '../ArrowTop/ArrowTop'
import { setLocalStorage, getLocalStorage } from '../localStorage/localStorage'

import API from '../../API'

function MoviesPage() {
    const [results, setResults] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)

    const handlerLoading = async () => {
        const fetched = await API(NEWLY_MOVIES_URL(page));
        const {data} = fetched
        const state = {
            results: [...results, ...data.results],
            page: page + 1,
            loading: false
        }
        setLocalStorage(NEWLY, state)
        setResults([...results, ...data.results])
        setPage(page + 1)
    }

    useEffect(() => {
        if (getLocalStorage(NEWLY)) {
            const localState = getLocalStorage(NEWLY)
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
            <h1 className="title">NEWLY MOVIES</h1>
            {
                loading
                    ? <Loader />
                    : <>
                        <div className="container">
                            <div className="container__content">
                                <Content
                                    results={results}
                                    path="/movies"
                                />
                            </div>
                        </div>
                        <div>
                            <ArrowTop />
                            <button onClick={handlerLoading}>Load more..</button>
                        </div>
                    </>
            }
        </>
    )
}


export default MoviesPage;
