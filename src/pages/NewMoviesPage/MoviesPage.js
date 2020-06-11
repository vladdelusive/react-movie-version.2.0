import React, { useState, useEffect } from 'react'

import './MoviesPage.css'
import Content from "../../components/MoviesPage/Content";
import { NEWLY_MOVIES_URL, NEWLY } from '../../config'
import Loader from "../../components/Loader/Loader";
import ArrowTop from "../../components/ArrowTop/ArrowTop";
import { setLocalStorage, getLocalStorage} from "../../helpers/localStorage/localStorage";
import BtnLoader from '../../components/hoc/loaderBtn/btn'
import API from '../../API/API'

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <div className="section__head">
                <h1 className="section__title">NEWLY MOVIES</h1>
            </div>
            {
                loading
                    ? <Loader />
                    : <>
                        <div className="section__content">
                            <div className="section__content-container">
                                <Content
                                    results={results}
                                    path="/movies"
                                />
                            </div>
                            <BtnLoader handlerLoading={handlerLoading}>Load more movies...</BtnLoader>
                        </div>
                        <div className="section__footer">
                            <ArrowTop />
                        </div>
                    </>
            }
        </>
    )
}


export default MoviesPage;
