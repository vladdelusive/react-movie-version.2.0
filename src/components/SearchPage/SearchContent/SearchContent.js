import Pagination from 'rc-pagination';
import { useSelector } from 'react-redux';
import React, {useState, useEffect, createRef} from 'react'

import SearchCardsContentMovies from "../ContentCards/SearchCardsContentMovies";
import Loader from "components/Loader/Loader";
import SearchCardsContentActors from "../ContentCards/SearchCardsContentActors";
import NotFound from "../NotFound/NotFound"

import './SearchContent.css'
import 'rc-pagination/assets/index.css';

import {ACTOR_SEARCH, SEARCH_URL} from "config";
import { ACSearchMoviePage, ACSearchActorPage } from 'store/SEARCH/actions/actionCreators'
import { useActions } from 'store/useActions/decorator'
import API from "API/API";


function SearchContent({query}) {
    const {pageActors, pageMovies} = useSelector(({search})=>search)
    const {
        ACSearchMoviePage: bindMoviePage,
        ACSearchActorPage: bindActorPage
    } = useActions({ACSearchMoviePage, ACSearchActorPage})

    const moviesElementTitle = createRef()
    const actorsElementTitle = createRef()

    const [dataMovies, setDataMovies] = useState(null)
    const [dataActors, setDataActors] = useState(null)
    const [loading, setLoading] = useState(true)

    const [totalPagesMovies, setTotalPagesMovies] = useState(null)
    const [totalPagesActors, setTotalPagesActors] = useState(null)

    const onClickPageMovies = (pageNumber) => {
        moviesElementTitle.current.scrollIntoView({block: "start"});
        bindMoviePage(pageNumber)
    }

    const onClickPageActors = (pageNumber) => {
        actorsElementTitle.current.scrollIntoView({block: "start"});
        bindActorPage(pageNumber)
    }

    useEffect(() => {
        const fetch = async () => {
            const fetches = [
                API(SEARCH_URL(query, pageMovies)),
                API(ACTOR_SEARCH(query, pageActors))
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
        fetch().catch(()=>console.log("something went wrong"))
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
                                onChange={(pageNumber)=>bindMoviePage(pageNumber)}
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
                        onChange={(pageNumber) => onClickPageMovies(pageNumber)}
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
                                onChange={(pageNumber)=>bindActorPage(pageNumber)}
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
                            onChange={(pageNumber)=>onClickPageActors(pageNumber)}
                        /> : ""
                    }
                </div>
            </div>
        </>
    )
}

export default SearchContent