import React, { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./style.css";

import { badges } from "constants/constants";
import image from "assets/images/image.jpg";
import {Reviews} from './components/index'

import { makeImgUrl } from "helpers/make-img-url";
import {Loader, Cast} from "components";
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/movie/actions";
import {setRate} from "helpers/set-rate";

export const PageMovie = React.memo((props) =>{
  const {movies, loading} = useSelector(({movieInfo})=>movieInfo)
  const {fetchData, setBadges, changeLoading} = useActions(actions)
  const thisMovie = movies[props.match.params.movie]
  useEffect(() => {
    if(!thisMovie){
      fetchData(props.match.params.movie);
    } else {
      changeLoading(false)
    }
    return () => changeLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.movie]);

  useEffect(() => {
    let badgesId = [];
    if (!thisMovie?.results?.genres) return;
    for (let i = 0; i < thisMovie.results.genres.length; i++) {
      let currentBadge = Math.round(Math.random() * 6);
      badgesId.some((badge) => currentBadge === badge)
        ? i--
        : badgesId.push(currentBadge);
    }

    const badgesList = thisMovie.results.genres.map((genre, id) => (
      <Draggable draggableId={id + genre.name} index={id} key={id}>
        {(provided) => (
          <span
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            key={id}
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

  const onDragEnd = ({ destination, source }) => {
    if (!destination) return;
    if (destination.index === source.index) return;
    const newStateBadges = [...thisMovie.movieBadges];
    const replacedItemFrom = newStateBadges[source.index];
    newStateBadges.splice(source.index, 1);
    newStateBadges.splice(destination.index, 0, replacedItemFrom);
    setBadges(newStateBadges, props.match.params.movie);
  };
  
  if(loading) return <Loader/>  
  return (
    <>
      <div className="movie">
          <div className="movie__post">
            <img
              src={
                thisMovie.results.poster_path
                  ? makeImgUrl(thisMovie.results.poster_path, {size: "large"})
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
            {setRate(thisMovie.results)}
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
                  allowFullScreen="1"
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
        movieName={thisMovie.results.title} 
        reviews={thisMovie.reviews}
      />
      
      {thisMovie.cast.length ? (
        <div className="cast-wrapper">
          <div className="section__title">
            <h1 className="cast-title">Credited cast:</h1>
          </div>
          <Cast cast={thisMovie.cast} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
})
