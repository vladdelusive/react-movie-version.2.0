import React, { useEffect } from "react";
import "./style.css";
import {Loader, BtnLoader, ArrowTop} from "components";
import {Content} from "./content";
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/new-movies/actions";
import {IMovies} from "../../react-app-env";

interface IMoviesPage {
  movies: IMovies[],
  loading: boolean,
}

export function MoviesPage() {
  const {movies, loading} = useSelector(({movies}: {movies: IMoviesPage })=>movies)
  const {fetchMovies} = useActions(actions)
  useEffect(() => {
    if(!movies.length){
      fetchMovies()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="section__head">
        <h1 className="section__title">NEWLY MOVIES</h1>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="section__content">
            <div className="section__content-container">
              <Content results={movies} path="/movies" />
            </div>
              <BtnLoader handlerLoading={fetchMovies}>
                  Load more movies...
              </BtnLoader>
          </div>
          <div className="section__footer">
            <ArrowTop />
          </div>
        </>
      )}
    </>
  );
}
