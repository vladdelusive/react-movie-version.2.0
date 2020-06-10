import React, {useState, useEffect, createRef} from 'react'
import './SearchContent.css'

import SearchCardsContentMovies from "../SearchCard/SearchCardsContentMovies";
import API from "../../../API";
import {ACTOR_SEARCH, SEARCH_URL} from "../../config";
import Loader from "../../Loader/Loader";
import SearchCardsContentActors from "../SearchCard/SearchCardsContentActors";
import {ACSearchMoviePage, ACSearchActorPage } from '../../../store/SEARCH/actions/actionCreators'

import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import NotFound from "../../NotFound/NotFound"
import { useSelector } from 'react-redux';

import { useActions } from '../../../decorator'

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