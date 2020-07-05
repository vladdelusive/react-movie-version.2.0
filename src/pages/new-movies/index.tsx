import React, { useEffect } from "react";
import "./style.css";
import {Loader, BtnLoader, ArrowTop} from "components";
import {Content} from "./content";
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/movies/actions";
import {IStore} from "react-app-env";
import {ITopMoviesSection} from "store/movies/types";

export function MoviesPage() {
  const {movies, loading} = useSelector<IStore, ITopMoviesSection>(({movies})=> movies.topMovies)
  const {getMovies} = useActions(actions)
  useEffect(() => {
    if(!movies.length){
      getMovies()
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
              <BtnLoader handlerLoading={getMovies}>
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
