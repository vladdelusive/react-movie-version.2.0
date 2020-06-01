import React from 'react'
import { IMAGE_URL, CARD_SIZE, } from '../../../config'
import { Link } from 'react-router-dom'
import image from './image.jpg'

export default function Movie({ id, img, title }) {
    return (
        <div className="card col-3 mb-5 actor" >
            <Link to={`/movies/${id}`} title={title}>
                <img 
                className="card-img-top" 
                src={img === null
                    ? image
                    : `${IMAGE_URL}${CARD_SIZE}${img}`}
                alt="movie_image" />
            </Link>
            <div className="card-body" >
                <Link to={`/movies/${id}`} title={title}>
                    <h5 className="card-title">{title}</h5>
                </Link>
            </div>
        </div>
    )
}
