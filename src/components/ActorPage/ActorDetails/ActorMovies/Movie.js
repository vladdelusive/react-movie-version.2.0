import React from 'react'
import {IMAGE_URL, CARD_SIZE,} from '../../../config'
import {Link} from 'react-router-dom'
import image from './image.jpg'
import './Movie.css'

export default function Movie({id, img, title}) {
    return (
        <div className="card actor-movie">
            <div className="card__body">
                <Link to={`/movies/${id}`} title={title}>
                    <img
                        className="actor-movie"
                        src={img === null
                            ? image
                            : `${IMAGE_URL}${CARD_SIZE}${img}`}
                        alt="movie_image"/>
                </Link>
            </div>
            <div className="card__title">
                <Link className="card__title card__title--underline" to={`/movies/${id}`} title={title}>
                    <h5 className="card__title card__title--link">{title}</h5>
                </Link>
            </div>
        </div>
    )
}
