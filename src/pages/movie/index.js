import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./style.css";

import { badges, DEFAULT_TRAILER } from "constants/constants";
import { EXTEND_SIZE} from "constants/cards";
import API from "http/index";
import image from "assets/images/image.jpg";
import {API_KEY, YOUTUBE_URL} from "api/config";
import { makeImgUrl } from "helpers/make-img-url";
import { getLocalStorage } from "helpers/local-storage";
import {Loader, Cast} from "components";

function PageMovie(props) {
  const [results, setResults] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [movieBadges, setMovieBadges] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function setFetchData() {
      const urlData = `movie/${movieId}?api_key=${API_KEY}`;
      const urlCast = `movie/${movieId}/credits?api_key=${API_KEY}`;

      const fetches = [API(urlData), API(YOUTUBE_URL(movieId)), API(urlCast)];
      const [INFO, TRA, CAST] = await Promise.all(fetches).then((res) =>
        Promise.all(res.map((r) => r.data))
      );
      const trailer = TRA.results[0] ? TRA.results[0].key : DEFAULT_TRAILER;

      localStorage.setItem(movieId, JSON.stringify({ results: INFO, trailer, cast: CAST.cast }));
      setResults(INFO);
      setTrailer(trailer);
      setCast(CAST.cast);
    }

    const movieId = props.match.params.movie;
    const movieLocalState = getLocalStorage(movieId);

    if (movieLocalState) {
      setResults(movieLocalState.results);
      setTrailer(movieLocalState.trailer);
      setCast(movieLocalState.cast);
    } else {
      setFetchData();
    }
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
    setMovieBadges(badgesList);
  }, [results]);

  const averageRate = () => {
    return Math.round(results.vote_average);
  };

  const setRate = () => {
    const movieRate = averageRate() || 0;
    const stars = [];
    for (let i = 0; i < 10; i++) {
      stars[i] = (
        <span
          key={i}
          className={`fa fa-star${i < movieRate ? " checked" : ""}`}
        >
        </span>
      );
    }
    return stars;
  };

  const onDragEnd = ({ destination, source }) => {
    if (!destination) return;
    if (destination.index === source.index) return;
    const newStateBadges = [...movieBadges];
    const replacedItemFrom = newStateBadges[source.index];
    newStateBadges.splice(source.index, 1);
    newStateBadges.splice(destination.index, 0, replacedItemFrom);
    setMovieBadges(newStateBadges);
  };

  return (
    <>
      <div className="movie">
        {trailer ? (
          <div className="movie__post">
            <img
              src={
                results.poster_path
                  ? makeImgUrl(results.poster_path, EXTEND_SIZE)
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
              <i>{averageRate() || "?"}/10</i>
            </div>
            {setRate()}
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
