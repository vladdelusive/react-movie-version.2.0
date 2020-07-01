import React, { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./style.css";

import { badges } from "constants/constants";
import image from "assets/images/image.jpg";
import {Reviews} from './components/reviews'
import { makeImgUrl } from "helpers/make-img-url";
import {Loader, Cast} from "components";
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/movies/actions";
import {setRate} from "helpers/set-rate";

import {IStore} from "react-app-env";
import {IPropsMovie} from "./types";
import {IMovieInfoSection} from "store/movies/types";

export const PageMovie: React.FC<IPropsMovie> = React.memo<IPropsMovie>((props) =>{
  const movieInfo = useSelector<IStore, IMovieInfoSection>(({movies} )=> movies.moviesInfo)
  const {fetchData, setBadges, addReview} = useActions(actions)
  const thisMovie = movieInfo[props.match.params.movie]

  useEffect(() => {
    if(!thisMovie){
      fetchData(props.match.params.movie);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.movie]);

  useEffect(() => {
    if (!thisMovie?.results?.genres) return;
    let badgesId: Array<number> = [];
    for (let i = 0; i < thisMovie.results.genres.length; i++) {
      let currentBadge = Math.round(Math.random() * 6);
      badgesId.some((badge) => currentBadge === badge)
        ? i--
        : badgesId.push(currentBadge);
    }

    const badgesList = thisMovie.results.genres.map((genre: any, id: number) => (
      <Draggable draggableId={genre.name + genre.id} index={id} key={genre.id}>
        {(provided) => (
          <span
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            key={genre.id}
            className={`${badges[badgesId[id]]} badge__pill`}
          >
            {genre.name}
          </span>
        )}
      </Draggable>
    ));
    setBadges(badgesList, props.match.params.movie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thisMovie?.results]);

  if(!thisMovie) return <Loader/> 

  const onDragEnd = ({ destination, source }: any) => {
    if (!destination) return;
    if (destination.index === source.index) return;
    const newStateBadges = [...thisMovie.movieBadges];
    const replacedItemFrom = newStateBadges[source.index];
    newStateBadges.splice(source.index, 1);
    newStateBadges.splice(destination.index, 0, replacedItemFrom);
    setBadges(newStateBadges, props.match.params.movie);
  }
  return (
    <>
      <div className="movie">
          <div className="movie__post">
            <img
              src={
                thisMovie.results.poster_path
                  ? makeImgUrl!(thisMovie.results.poster_path, {size: "large"})
                  : image
              }
              alt="movie-post"
              className="movie__img"
            />
          </div>
        <div className="movie__description">
          <div className="movie__section">
            <h1 className="movie__title">{thisMovie.results.title}</h1>
          </div>
          <div className="movie__section">
            <div className="release">
              <span className="release__text">{"Released date: "}
                {thisMovie.results.release_date ? thisMovie.results.release_date : "unknown"}
              </span>
            </div>
          </div>
          <hr className="line" />
          <div className="movie__section">
            <strong className="movie__type"> Description: </strong>
            <p className="movie__description-overview">
              {thisMovie.results.overview || "not found...."}
            </p>
          </div>
          <hr className="line" />
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="generes-wrapper">
              <strong className="movie__type">Generes: </strong>
              <Droppable droppableId="droppable" direction="horizontal">
                {(provided) => (
                  <span
                    className="generes-items"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {thisMovie.movieBadges}
                    {provided.placeholder}
                  </span>
                )}
              </Droppable>
            </div>
          </DragDropContext>
          <hr className="line" />
          <div className="movie__section">
            <div>
              <strong className="movie__type">Rate: </strong>
              <i>{Math.round(thisMovie.results.vote_average) || "not found..."}/10</i>
            </div>
            {setRate({starsNumber: thisMovie.results.vote_average})}
          </div>
          <hr className="line" />
          <div className="movie__section">
            <div>
              <strong className="movie__type">Runtime: </strong>
              <span className="movie__type-runtime">{thisMovie.results.runtime} min</span>
            </div>
          </div>
          <hr className="line" />
          <div className="movie__section">
            <div className="movie__trailer">
              <strong className="movie__type"> Trailer: </strong>
            </div>
            <div className="movie__trailer movie__trailer--youtube-trailer">
              {thisMovie.trailer ? (
                <iframe
                  frameBorder="0"
                  title="YouTube video player"
                  src={`https://www.youtube.com/embed/${thisMovie.trailer}?controls=1`}
                />
              ) : (
                "not found..."
              )}
            </div>
          </div>
        </div>
      </div>
      <Reviews
        movieId={props.match.params.movie}
        addReview={addReview}
        movieInfo={thisMovie}
      />

      {thisMovie.cast.length ? (
        <div className="cast-wrapper">
          <div className="section__title">
            <h1 className="cast-title">Credited cast:</h1>
          </div>
          <Cast cast={thisMovie.cast} />
        </div>
      ) : (
        ""
      )}
    </>
  );
})
