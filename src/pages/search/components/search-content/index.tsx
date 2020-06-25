import Pagination from 'rc-pagination';
import { useSelector } from 'react-redux';
import React, {useEffect, createRef} from 'react'
import {SearchCardsContentActors, SearchCardsContentMovies} from "../content-cards";
import {Loader} from "components";

import {NotFound} from "../not-found"
import './style.css'

import 'rc-pagination/assets/index.css';
import { actions } from 'store/search/actions'
import { useActions } from 'hooks/use-actions'
import {ISearch} from "../../types";


export const SearchContent = React.memo(({query}: {query: string})=> {
    const {pageActors, pageMovies, searchedMovies, searchedActors, loading, totalPagesMovies, totalPagesActors} =
        useSelector(({search}: { search: ISearch })=> search)
    const {changeMoviePage, changeActorPage, fetchSearchActors, fetchSearchMovies } = useActions(actions)
    const moviesElementTitle = createRef<HTMLDivElement>()
    const actorsElementTitle = createRef<HTMLDivElement>()

    const onClickPageMovies = (pageNumber: number) => {
        moviesElementTitle.current!.scrollIntoView({block: "start"});
        changeMoviePage(pageNumber)
    }

    const onClickPageActors = (pageNumber: number) => {
        actorsElementTitle.current!.scrollIntoView({block: "start"});
        changeActorPage(pageNumber)
    }

    useEffect(() => {
        fetchSearchMovies(query, pageMovies);
        fetchSearchActors(query, pageActors);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    useEffect(() => {
        fetchSearchMovies(query, pageMovies);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageMovies]);

    useEffect(() => {
        fetchSearchActors(query, pageActors);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageActors]);

    return (
        <>
            <div className="section__content section__content--movies">
                <div ref={moviesElementTitle} className="subtitle subtitle__movies">Movies:</div>
                    <div className="pagination">
                        {
                            (!loading && searchedMovies.length) ? <Pagination
                                current={pageMovies}
                                total={totalPagesMovies}
                                onChange={changeMoviePage}
                            /> : ""
                        }
                    </div>
                <div className="section__content-container">
                    {
                        loading ?
                            <Loader/>
                            :
                            (searchedMovies.length ? <SearchCardsContentMovies results={searchedMovies} path="/movies"/>
                                : <NotFound/>)
                    }
                    {
                        (!loading && searchedMovies.length) ? <Pagination
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
                            (!loading && searchedActors.length) ? <Pagination
                                current={pageActors}
                                total={totalPagesActors}
                                onChange={changeActorPage}
                            /> : ""
                        }
                    </div>
                <div className="section__content-container">
                    {
                        loading ?
                            <Loader/>
                            : (searchedActors.length ?
                                <SearchCardsContentActors cast={searchedActors}/>
                                : <NotFound/>
                            )
                    }
                    {
                        (!loading && searchedActors.length) ? <Pagination
                            current={pageActors}
                            total={totalPagesActors}
                            onChange={onClickPageActors}
                        /> : ""
                    }
                </div>
            </div>
        </>
    )
})