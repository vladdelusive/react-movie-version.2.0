import React, { useState, useEffect } from 'react'
import { SEARCH_URL, SEARCH, FETCH_INTERVAL } from '../config'
import './Input.css'
import Content from '../Content/Content'
import LoaderButton from '../LoaderButton/LoaderButton'
import { setLocalStorage, getLocalStorage } from '../localStorage/localStorage'
import NotFound from '../NotFound/NotFound'

import API from '../../API'

let timer;

function Input({location}) {
    const [inputValue, setInputValue] = useState("")
    const [page, setPage] = useState(1)
    const [results, setResults] = useState(undefined)
    const [allPages, setAllPages] = useState(0)

    useEffect(() => {
        const searchHost = getLocalStorage(SEARCH)
        if (searchHost) {
            setResults(searchHost.results)
            setAllPages(searchHost.allPages)
            setInputValue(searchHost.inputValue)
        }
    }, [])

    const valueTarget = ({ target }) => {

        setInputValue(target.value)
        clearTimeout(timer);
        if (target.value === "") {
            setResults(undefined)
            setAllPages(0)
            setPage(1)
            localStorage.removeItem(SEARCH);
            return
        }
        timer = setTimeout(doSearch.bind(null, target.value), FETCH_INTERVAL);
        return
    }

    const doSearch = async (value, nextPage = false) => {
        if (nextPage) {
            const url = `${SEARCH_URL(value)}&page=${nextPage}`;
            const fetched = await API(url);
            const {data} = fetched
            setResults([...results, ...data.results])
            setPage(page + 1)
        } else {
            const fetched = await API(SEARCH_URL(value));
            const {data} = fetched
            const newState = {
                results: [...data.results],
                allPages: data.total_pages,
                inputValue: value
            }
            setResults(newState.results)
            setAllPages(newState.allPages)

            setLocalStorage(SEARCH, newState)
        }
    }

    const handlerLoading = () => {
        const nextPage = page + 1;
        doSearch(inputValue, nextPage)
    }

    const handlerGoUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const leftData = () => {
        return allPages > page ? true : false
    }

    return <>
        <form
            onSubmit={e => e.preventDefault()}>
            <input
                type="search"
                value={inputValue}
                placeholder="Search film" aria-label="Search"
                onChange={valueTarget}
            />
        </form>
        {results
            ?
            <div>
                <div>
                    {
                        results.length > 0
                            ?
                            <Content
                                results={results}
                                path="/movies"
                            />
                            :
                            <NotFound />
                    }
                </div>
            </div>
            : ""
        }
        {
            results
                ?
                <LoaderButton
                    handlerLoading={handlerLoading}
                    handlerGoUp={handlerGoUp}
                    leftData={leftData}
                    data={results.length}
                />
                :
                ""
        }

    </>
}

export default Input
