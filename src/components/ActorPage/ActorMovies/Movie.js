import React from 'react'
import {IMAGE_URL, CARD_SIZE,} from '../../../config'
import {Link} from 'react-router-dom'
import image from '../../../assets/images/image.jpg'

export default function Movie({id, img, title}) {
    return (
        <div className="card">
            <div className="card__header">
                <Link to={`/movies/${id}`} title={title}>
                    <img
                        src={img === null
                            ? image
                            : `${IMAGE_URL}${CARD_SIZE}${img}`}
                        alt="movie_image"/>
                </Link>
            </div>
            <div className="card__body">
                <Link className="card__title" to={`/movies/${id}`} title={title}>
                    <h5 className="card__title">{title}</h5>
                </Link>
            </div>
        </div>
    )
}
