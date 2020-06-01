import React, { useState, useEffect } from 'react'
import './Movie.css'
import image from './image.jpg'
import { API_URL, API_KEY, IMAGE_URL, EXTEND_SIZE, YOUTUBE_URL, DEFAULT_TRAILER } from '../config'
import { setLocalStorage, getLocalStorage } from '../localStorage/localStorage'
import Loader from '../Loader/Loader'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Cast from '../Cast/Cast'

function Movie(props) {
    const [results, setResults] = useState([])
    const [trailer, setTrailer] = useState("")
    const [badges] = useState([
        "success",
        "warning",
        "danger",
        "primary",
        "info",
        "secondary",
        "dark"
    ])
    const [movieBadges, setMovieBadges] = useState([])
    const [cast, setCast] = useState([])

    useEffect(() => {
        async function setFetchData() {
          const urlData = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
          const urlCast = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

          const fetches = [
            fetch(urlData),
            fetch(YOUTUBE_URL(movieId)),
            fetch(urlCast),
          ];

          const [INFO, TRA, CAST] = await Promise.all(fetches).then((res) =>
            Promise.all(res.map((r) => r.json()))
          );

          const trailer = TRA.results[0] ? TRA.results[0].key : DEFAULT_TRAILER;

          setLocalStorage(movieId, { results: INFO, trailer, cast: CAST.cast });
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
        if (!results.genres) return
        for (let i = 0; i < results.genres.length; i++) {
            let currentBadge = Math.round(Math.random() * 6)
            badgesId.some(badge => currentBadge === badge)
                ? i--
                : badgesId.push(currentBadge)
        }

        const badgesList = results.genres.map((genre, id) => (
            <Draggable draggableId={id + genre.name} index={id} key={id}>
                {(provided) => (
                    <span
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        key={id}
                        className={`badge badge-pill badge-${badges[badgesId[id]]}`}
                    >
                        {genre.name}
                    </span>
                )}
            </Draggable>
        ))
        setMovieBadges(badgesList)
    }, [badges, results])

    const averageRate = () => {
        return Math.round(results.vote_average);
    }

    const setRate = () => {
        const movieRate = averageRate() || 0;
        const stars = [];
        for (let i = 0; i < 10; i++) {
            stars[i] = (
                <span
                    key={i}
                    className={`fa fa-star${i < movieRate ? " checked" : ""}`}>
                </span>
            )
        }
        return stars
    }

    const onDragEnd = ({ destination, source }) => {
        if (!destination) return;
        if (destination.index === source.index) return;
        const newStateBadges = [...movieBadges]
        const replacedItemFrom = newStateBadges[source.index]
        newStateBadges.splice(source.index, 1)
        newStateBadges.splice(destination.index, 0, replacedItemFrom)
        setMovieBadges(newStateBadges)
    }

    return (
        <>
            <div>
                {
                    trailer
                        ?
                        <img src={results.poster_path
                            ? `${IMAGE_URL}${EXTEND_SIZE}${results.poster_path}`
                            : image} alt="movie-post" />
                        : <Loader />
                }
                <div>
                    <h1>{results.title}</h1>
                    <hr />
                    <strong> Description: </strong>
                    <p>
                        {results.overview || "loading.."}
                    </p>
                    <hr />
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div >
                            <strong>Generes: </strong>{movieBadges.length ? "" : "loading..."}
                            <Droppable droppableId="droppable" direction="horizontal">
                                {(provided) => (
                                    <span
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
                    <hr />
                    <div><strong>Rate: </strong><i>{averageRate() || "?"}/10</i></div>
                    {setRate()}
                    <hr />
                    <div>
                        <strong> Trailer: </strong>
                    </div>
                    <div>
                        {
                            trailer
                                ? (<iframe frameBorder="0" allowFullScreen="1"
                                    title="YouTube video player"
                                    src={`https://www.youtube.com/embed/${trailer}?controls=1`} />)
                                : "loading..."
                        }
                    </div>
                </div>

            </div>
            {
                cast.length
                    ? <>
                        <h1>Credited cast:</h1>
                        <Cast cast={cast}/>
                    </>
                    : <Loader />
            }
        </>
    )
}

export default Movie
