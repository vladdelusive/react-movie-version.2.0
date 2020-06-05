import React, {useState, useEffect, useContext} from 'react'
import './SearchContent.css'

import Content from "../../Content/Content";
import API from "../../../API";
import {ACTOR_SEARCH, SEARCH_URL} from "../../config";
import Loader from "../../Loader/Loader";
import Cast from "../../Cast/Cast"

import NotFound from "../../NotFound/NotFound"
import Pagination from "../../Pagination/Pagination";
import {ContextPage} from "../../../App";

function SearchContent({query}) {
    const page = useContext(ContextPage);

    const [dataMovies, setDataMovies] = useState(null)
    const [dataActors, setDataActors] = useState(null)
    const [loading, setLoading] = useState(true)

    const [currentPageMovies, setCurrentPageMovies] = useState(page)
    const [currentPageActors, setCurrentPageActors] = useState(page)

    const [totalPagesMovies, setTotalPagesMovies] = useState(null)
    const [totalPagesActors, setTotalPagesActors] = useState(null)

    useEffect(() => {
        const fetch = async () => {
            const fetches = [
                API(SEARCH_URL(query, currentPageMovies)),
                API(ACTOR_SEARCH(query))
            ];
            const [MOVIES, ACTORS] = await Promise.all(fetches).then((res) =>
                Promise.all(res.map((r) => r.data))
            );

            setDataActors(ACTORS.results)
            setDataMovies(MOVIES.results)
            setLoading(false)

            setTotalPagesMovies(MOVIES.total_pages)
            setTotalPagesActors(ACTORS.total_pages)
        }
        fetch()
    }, [query, currentPageMovies])

    useEffect(()=>{
        console.log("d")
    }, [])

    return (
        <>
            <div className="section__content section__content--movies">
                <div className="subtitle subtitle__movies">Movies:</div>
                <div className="section__content-container">
                    {
                        loading ?
                            <Loader/>
                            :
                            (dataMovies.length ?
                                <>
                                    <Content results={dataMovies} path="/movies" searching={true}/>
                                    <Pagination
                                        total_pages={totalPagesMovies}
                                        currentPage={currentPageMovies}
                                        setCurrentPage={(page) => setCurrentPageMovies(page)}
                                    />
                                </>
                                : <NotFound/>)
                    }
                </div>

            </div>
            <div className="section__content section__content--actors">
                <div className="subtitle subtitle__actors">Actors:</div>
                <div className="section__content-container">
                    {
                        loading ?
                            <Loader/>
                            : (dataActors.length ?
                                <Cast cast={dataActors} searching={true}/>
                                : <NotFound/>
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default SearchContent