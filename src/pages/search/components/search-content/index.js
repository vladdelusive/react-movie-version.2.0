import Pagination from 'rc-pagination';
import { useSelector } from 'react-redux';
import {API} from "services/api";

import React, {useState, useEffect, createRef} from 'react'
import {SearchCardsContentActors, SearchCardsContentMovies} from "../content-cards";
import {Loader} from "components";

import {NotFound} from "../not-found"
import './style.css'

import 'rc-pagination/assets/index.css';
import { actions } from 'store/search/actions'
import { useActions } from 'hooks/use-actions'


function SearchContent({query}) {
    const {pageActors, pageMovies, searchedMovies, searchedActors, loading, totalPagesMovies, totalPagesActors} =
        useSelector(({search})=>search)
    const {changeMoviePage, changeActorPage, fetchSearchActors, fetchSearchMovies } = useActions({
        changeMoviePage: actions.changeMoviePage,
        changeActorPage: actions.changeActorPage,
        fetchSearchActors: actions.fetchSearchActors,
        fetchSearchMovies: actions.fetchSearchMovies,
    })
    const moviesElementTitle = createRef()
    const actorsElementTitle = createRef()

    const onClickPageMovies = (pageNumber) => {
        moviesElementTitle.current.scrollIntoView({block: "start"});
        changeMoviePage(pageNumber)
    }

    const onClickPageActors = (pageNumber) => {
        actorsElementTitle.current.scrollIntoView({block: "start"});
        changeActorPage(pageNumber)
    }

    useEffect(() => {
        fetchSearchMovies(query, pageMovies);
        fetchSearchActors(query, pageActors);
    }, [query]);

    useEffect(() => {
        fetchSearchMovies(query, pageMovies);
    }, [pageMovies]);

    useEffect(() => {
        fetchSearchActors(query, pageActors);
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
}

export {SearchContent}