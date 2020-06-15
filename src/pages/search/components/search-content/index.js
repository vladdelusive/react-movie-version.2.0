import Pagination from 'rc-pagination';
import { useSelector } from 'react-redux';
import React, {useState, useEffect, createRef} from 'react'

import {SearchCardsContentActors, SearchCardsContentMovies} from "../content-cards";
import {Loader} from "components";
import {NotFound} from "../not-found"

import './style.css'
import 'rc-pagination/assets/index.css';

import {API} from "services/api";
import { actions } from 'store/search/actions'
import { useActions } from 'hooks/use-actions'
import axios from "services/http/index";


function SearchContent({query}) {
    const {pageActors, pageMovies} = useSelector(({search})=>search)
    const {
        ACChangeMoviePage,
        ACChangeActorPage,
    } = useActions({
        ACChangeMoviePage: actions.ACChangeMoviePage,
        ACChangeActorPage: actions.ACChangeActorPage
    })

    const moviesElementTitle = createRef()
    const actorsElementTitle = createRef()

    const [dataMovies, setDataMovies] = useState(null)
    const [dataActors, setDataActors] = useState(null)
    const [loading, setLoading] = useState(true)

    const [totalPagesMovies, setTotalPagesMovies] = useState(null)
    const [totalPagesActors, setTotalPagesActors] = useState(null)

    const onClickPageMovies = (pageNumber) => {
        moviesElementTitle.current.scrollIntoView({block: "start"});
        ACChangeMoviePage(pageNumber)
    }

    const onClickPageActors = (pageNumber) => {
        actorsElementTitle.current.scrollIntoView({block: "start"});
        ACChangeActorPage(pageNumber)
    }

    useEffect(() => {
        const fetchData = async () => {
            const fetches = [
                axios(API.SEARCH_MOVIE_PARAM_URL(query, pageMovies)),
                axios(API.SEARCH_ACTOR_PARAM_URL(query, pageActors))
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
        fetchData().catch(()=>console.log("something went wrong"))
    }, [query, pageActors, pageMovies])
    return (
        <>
            <div className="section__content section__content--movies">
                <div ref={moviesElementTitle} className="subtitle subtitle__movies">Movies:</div>
                    <div className="pagination">
                        {
                            (!loading && dataMovies.length) ? <Pagination
                                current={pageMovies}
                                total={totalPagesMovies}
                                onChange={ACChangeMoviePage}
                            /> : ""
                        }
                    </div>
                <div className="section__content-container">
                    {
                        loading ?
                            <Loader/>
                            :
                            (dataMovies.length ? <SearchCardsContentMovies results={dataMovies} path="/movies"/>
                                : <NotFound/>)
                    }
                    {
                        (!loading && dataMovies.length) ? <Pagination
                        current={pageMovies}
                        total={totalPagesMovies}
                        onChange={onClickPageMovies}
                        /> : ""
                    }
                </div>
            </div>
            <div className="section__content section__content--actors">
                <div ref={actorsElementTitle}  className="subtitle subtitle__actors">Actors:</div>
                    <div className="pagination">
                        {
                            (!loading && dataActors.length) ? <Pagination
                                current={pageActors}
                                total={totalPagesActors}
                                onChange={ACChangeActorPage}
                            /> : ""
                        }
                    </div>
                <div className="section__content-container">
                    {
                        loading ?
                            <Loader/>
                            : (dataActors.length ?
                                <SearchCardsContentActors cast={dataActors}/>
                                : <NotFound/>
                            )
                    }
                    {
                        (!loading && dataActors.length) ? <Pagination
                            current={pageActors}
                            total={totalPagesActors}
                            onChange={onClickPageActors}
                        /> : ""
                    }
                </div>
            </div>
        </>
    )
}

export {SearchContent}