import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SEARCH_URL, SEARCH, FETCH_INTERVAL } from '../config'
import './Input.css'
import Content from '../Content/Content'
import LoaderButton from '../LoaderButton/LoaderButton'
import { setLocalStorage, getLocalStorage } from '../localStorage/localStorage'
import NotFound from '../NotFound/NotFound'

let timer;

function Input() {
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
            const fetched = await fetch(url);
            const data = await fetched.json();
            setResults([...results, ...data.results])
            setPage(page + 1)
        } else {
            const fetched = await fetch(SEARCH_URL(value));
            const data = await fetched.json();
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
        <form className="form-inline order-0 center"
            onSubmit={e => e.preventDefault()}>
            <input className="form-control mr-sm-2"
                type="search"
                value={inputValue}
                placeholder="Search film" aria-label="Search"
                onChange={valueTarget}
            />
        </form>
        {results
            ?
            <div className="container-fluid">
                <div className="card-deck row justify-content-center my-5">
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
