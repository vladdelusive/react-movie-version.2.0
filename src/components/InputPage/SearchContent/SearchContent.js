import React, {useState, useEffect} from 'react'
import './SearchContent.css'

import Content from "../../Content/Content";
import API from "../../../API";
import {ACTOR_SEARCH, SEARCH_URL} from "../../config";
import Loader from "../../Loader/Loader";
import Cast from "../../Cast/Cast";
import {ACSearchMoviePage, ACSearchActorPage } from '../../../store/SEARCH/actions/actionCreators'

import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

import NotFound from "../../NotFound/NotFound"
//import Pagination from "../../Pagination/Pagination";
import { useSelector } from 'react-redux';

import { useActions } from '../../../decorator'

function SearchContent({query}) {
    const {pageActors, pageMovies} = useSelector(({search})=>search)
    const {
        ACSearchMoviePage: bindMoviePage,
        ACSearchActorPage: bindActorPage
    } = useActions({ACSearchMoviePage, ACSearchActorPage})

    const [dataMovies, setDataMovies] = useState(null)
    const [dataActors, setDataActors] = useState(null)
    const [loading, setLoading] = useState(true)

    const [totalPagesMovies, setTotalPagesMovies] = useState(null)
    const [totalPagesActors, setTotalPagesActors] = useState(null)

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
        fetch()
    }, [query, pageActors, pageMovies])
    return (
        <>
            <div className="section__content section__content--movies">
                <div className="subtitle subtitle__movies">Movies:</div>
                    <div className="pagination">
                        <Pagination
                            className="ant-pagination"
                            current={pageMovies}
                            total={totalPagesMovies}
                            onChange={(pageNumber)=>bindMoviePage(pageNumber)}
                        />
                    </div>

                <div className="section__content-container">
                    {
                        loading ?
                            <Loader/>
                            :
                            (dataMovies.length ? <Content results={dataMovies} path="/movies" searching={true}/>
                                : <NotFound/>)
                    }
                </div>
            </div>
            <div className="section__content section__content--actors">
                <div className="subtitle subtitle__actors">Actors:</div>
                    <div className="pagination">
                        <Pagination
                            className="ant-pagination"
                            current={pageActors}
                            total={totalPagesActors}
                            onChange={(pageNumber)=>bindActorPage(pageNumber)}
                        />
                    </div>
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