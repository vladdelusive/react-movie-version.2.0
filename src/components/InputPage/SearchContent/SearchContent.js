import React, {useState, useEffect} from 'react'
import './SearchContent.css'

import Content from "../../Content/Content";
import API from "../../../API";
import {ACTOR_SEARCH, SEARCH_URL} from "../../config";
import Loader from "../../Loader/Loader";
import Cast from "../../Cast/Cast";

function SearchContent({query}) {
    const [dataMovies, setDataMovies] = useState(null)
    const [dataActors, setDataActors] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetch = async () => {
            const fetches = [
                API(SEARCH_URL(query)),
                API(ACTOR_SEARCH(query))
            ];
            const [MOVIES, ACTORS] = await Promise.all(fetches).then((res) =>
                Promise.all(res.map((r) => r.data))
            );
            setDataActors(ACTORS.results.length > 8 ? ACTORS.results.slice(0, 8) : ACTORS.results)
            setDataMovies(MOVIES.results.length > 8 ? MOVIES.results.slice(0, 8) : MOVIES.results)
            setLoading(false)
        }
        fetch()

    }, [query])

    return (
        <>
            <div className="section__content">
                <div className="title subtitle subtitle__movies">Movies:</div>
                <div className="section__content-container">
                    {
                        loading ?
                            <Loader/>
                            : <Content results={dataMovies} path="/movies"/>
                    }
                </div>
            </div>
            <div className="section__content">
                <div className="title subtitle subtitle__actors">Actors:</div>
                <div className="section__content-container">
                    {
                        loading ?
                            <Loader/>
                            : <Cast cast={dataActors} path="/actors"/>
                    }
                </div>
            </div>
        </>
    )
}

export default SearchContent