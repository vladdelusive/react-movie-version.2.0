import React, { useState, useEffect } from 'react'

import './TopRated.css'
import Content from '..//Content/Content'
import { TOP_URL, TOP } from '../../config'
import Loader from '../Loader/Loader'
import ArrowTop from '../ArrowTop/ArrowTop'
import { setLocalStorage, getLocalStorage } from '../localStorage/localStorage'

import API from '../../API/API'

function TopRated() {
    const [results, setResults] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)

    const handlerLoading = async () => {
        const fetched = await API(TOP_URL(page));
        const {data} = fetched
        const state = {
            results: [...results, ...data.results],
            page: page + 1,
            loading: false
        }
        setLocalStorage(TOP, state)
        setResults([...results, ...data.results])
        setPage(page + 1)
    }

    useEffect(() => {
        if (getLocalStorage(TOP)) {
            const localState = getLocalStorage(TOP)
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
            <h1>Top Rated</h1>
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
                            <button onClick={handlerLoading}>Load more..</button>
                        </div>
                    </>
            }
        </>
    )
}


export default TopRated;
