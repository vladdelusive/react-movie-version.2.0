import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

export default function Card({title, overview, poster, pathTo}) {
    return (
        <div className="card">
            <Link to={pathTo}>
                <img className="card__post" src={poster} alt="sorry" />
            </Link>
            <div className="card__description">
                <h5 className="card__title">{title}</h5>
                <p className="card__overview">{overview}</p>
                <Link className="card__button" to={pathTo}>Read more...</Link>
            </div>
        </div>
    )
}
