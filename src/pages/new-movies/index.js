import React, { useEffect } from "react";
import "./style.css";
import {Loader, BtnLoader, ArrowTop} from "components";
import {Content} from "./content";
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/new-movies/actions";

export function MoviesPage() {
  const {movies, loading} = useSelector(({movies})=>movies)
  const {fetchMovies} = useActions({
    fetchMovies: actions.fetchMovies,
  })
  useEffect(() => {
    fetchMovies()
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
