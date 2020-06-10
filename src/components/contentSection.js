import React from 'react'

import './contentSection.css'
import Content from './Content/Content'
import { TOP_URL, TOP, POPULAR_URL, POPULAR } from '../config'
import Loader from './Loader/Loader'
import ArrowTop from './ArrowTop/ArrowTop'
import { useState, useEffect } from 'react'
import { setLocalStorage, getLocalStorage } from './localStorage/localStorage'

function ContentSection({section}) {
    const constSection = section === "top" ? TOP : POPULAR;
    const constUrlSection = section === "top" ? TOP_URL : POPULAR_URL;

    const [results, setResults] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)

    const handlerLoading = async () => {
        const fetched = await fetch(constUrlSection(page));
        const data = await fetched.json()
        const state = {
            results: [...results, ...data.results],
            page: page + 1,
            loading: false
        }
        setLocalStorage(constSection, state)
        setResults([...results, ...data.results])
        setPage(page + 1)
    }

    useEffect(() => {
        if (getLocalStorage(constSection)) {
            const localState = getLocalStorage(constSection)
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
            <h1>{section === "top" ? "Top Rated" : "Popular"}</h1>
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


export default ContentSection;