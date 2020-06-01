import React, { memo } from 'react'
import Movie from './Movie'
import ArrowTop from '../../../ArrowTop/ArrowTop'

export default memo(function ActorMovies({ cast }) {
    const movies = cast.map(movie => {
        return <Movie
            key={movie.id}
            id={movie.id}
            img={movie.poster_path}
            title={movie.title}
        />
    })
    return <>
        <div>
            {movies}
        </div>
        {movies.length > 12 ? <ArrowTop/> : ""}
    </>
})
