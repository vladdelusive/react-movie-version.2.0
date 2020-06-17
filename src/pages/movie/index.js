import React, { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./style.css";

import { badges } from "constants/constants";
import image from "assets/images/image.jpg";

import { makeImgUrl } from "helpers/make-img-url";
import {Loader, Cast} from "components";
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/movie/actions";
import {setRate} from "helpers/set-rate";

function PageMovie(props) {
  const {results, trailer, movieBadges, cast} = useSelector(({movie})=>movie)
  const {fetchData, clearData, setBadges} = useActions({
    fetchData: actions.fetchData,
    clearData: actions.clearData,
    setBadges: actions.setBadges,
  })
  useEffect(() => {
    fetchData(props.match.params.movie)
    return clearData
  }, [props.match.params.movie]);

  useEffect(() => {
    let badgesId = [];
    if (!results.genres) return;
    for (let i = 0; i < results.genres.length; i++) {
      let currentBadge = Math.round(Math.random() * 6);
      badgesId.some((badge) => currentBadge === badge)
        ? i--
        : badgesId.push(currentBadge);
    }

    const badgesList = results.genres.map((genre, id) => (
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
    setBadges(badgesList);
  }, [results]);

  const onDragEnd = ({ destination, source }) => {
    if (!destination) return;
    if (destination.index === source.index) return;
    const newStateBadges = [...movieBadges];
    const replacedItemFrom = newStateBadges[source.index];
    newStateBadges.splice(source.index, 1);
    newStateBadges.splice(destination.index, 0, replacedItemFrom);
    setBadges(newStateBadges);
  };
  return (
    <>
      <div className="movie">
        {trailer ? (
          <div className="movie__post">
            <img
              src={
                results.poster_path
                  ? makeImgUrl(results.poster_path, {size: "large"})
                  : image
              }
              alt="movie-post"
              className="movie__img"
            />
          </div>
        ) : (
          <Loader />
        )}
        <div className="movie__description">
          <div className="movie__section">
            <h1 className="movie__title">{results.title}</h1>
          </div>
          <hr className="line" />
          <div className="movie__section">
            <strong className="movie__type"> Description: </strong>
            <p className="movie__description-overview">
              {results.overview || "loading.."}
            </p>
          </div>
          <hr className="line" />
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="generes-wrapper">
              <strong className="movie__type">Generes: </strong>
              {movieBadges.length ? "" : "loading..."}
              <Droppable droppableId="droppable" direction="horizontal">
                {(provided) => (
                  <span
                    className="generes-items"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {movieBadges}
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
              <i>{Math.round(results.vote_average) || "?"}/10</i>
            </div>
            {setRate(results)}
          </div>
          <hr className="line" />
          <div className="movie__section">
            <div className="movie__trailer">
              <strong className="movie__type"> Trailer: </strong>
            </div>
            <div className="movie__trailer movie__trailer--youtube-trailer">
              {trailer ? (
                <iframe
                  frameBorder="0"
                  allowFullScreen="1"
                  title="YouTube video player"
                  src={`https://www.youtube.com/embed/${trailer}?controls=1`}
                />
              ) : (
                "loading..."
              )}
            </div>
          </div>
        </div>
      </div>

      {cast.length ? (
        <div className="cast-wrapper">
          <div className="section__title">
            <h1 className="cast-title">Credited cast:</h1>
          </div>
          <Cast cast={cast} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export { PageMovie };
