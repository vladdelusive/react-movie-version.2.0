import React from 'react'
import { IMAGE_URL, CARD_SIZE, } from '../../../config'
import { Link } from 'react-router-dom'
import image from './image.jpg'

export default function Movie({ id, img, title }) {
    return (
        <div>
            <Link to={`/movies/${id}`} title={title}>
                <img
                src={img === null
                    ? image
                    : `${IMAGE_URL}${CARD_SIZE}${img}`}
                alt="movie_image" />
            </Link>
            <div>
                <Link to={`/movies/${id}`} title={title}>
                    <h5>{title}</h5>
                </Link>
            </div>
        </div>
    )
}
