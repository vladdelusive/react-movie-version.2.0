import Pagination from 'rc-pagination';
import { useSelector } from 'react-redux';
import React, {useEffect} from 'react'
import {SearchCardsContentActors, SearchCardsContentMovies} from "../content-cards";
import {Loader} from "components";

import {NotFound} from "../not-found"
import './style.css'

import 'rc-pagination/assets/index.css';
import { actions } from 'store/search/actions'
import { useActions } from 'hooks/use-actions'
import {ISearchState} from "store/search/types";
import {IStore} from "react-app-env";

export const SearchContent = React.memo(({query}: {query: string})=> {
    const {pageActors, pageMovies, searchedMovies, searchedActors, loading, totalPagesMovies, totalPagesActors} =
        useSelector<IStore, ISearchState>(({search})=> search)
    const {changeMoviePage, changeActorPage, getSearchActors, getSearchMovies } = useActions(actions)

    const onClickPageMovies = (pageNumber: number) => {
        changeMoviePage(pageNumber)
    }

    const onClickPageActors = (pageNumber: number) => {
        changeActorPage(pageNumber)
    }

    useEffect(() => {
        getSearchMovies(query, pageMovies);
        getSearchActors(query, pageActors);
        // eslint-disable-next-line
    }, [query]);

    useEffect(() => {
        getSearchMovies(query, pageMovies);
        // eslint-disable-next-line
    }, [pageMovies]);

    useEffect(() => {
        getSearchActors(query, pageActors);
        // eslint-disable-next-line
    }, [pageActors]);

    return (
        <>
            <div className="section__content section__content--movies">
                <div className="subtitle subtitle__movies">Movies:</div>
                    <div className="pagination">
                        {
                            (!loading && searchedMovies?.length) ? <Pagination
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
                            (searchedMovies?.length ? <SearchCardsContentMovies results={searchedMovies} path="/movies"/>
                                : <NotFound/>)
                    }
                    {
                        (!loading && totalPagesMovies > 1) ? <Pagination
                        current={pageMovies}
                        total={totalPagesMovies}
                        onChange={onClickPageMovies}
                        /> : ""
                    }
                </div>
            </div>
            <div className="section__content section__content--actors">
                <div className="subtitle subtitle__actors">Actors:</div>
                    <div className="pagination">
                        {
                            (!loading && searchedActors?.length) ? <Pagination
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
                            : (searchedActors?.length ?
                                <SearchCardsContentActors cast={searchedActors}/>
                                : <NotFound/>
                            )
                    }
                    {
                        (!loading && totalPagesActors > 1) ? <Pagination
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