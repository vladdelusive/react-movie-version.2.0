import React from 'react'
import './SearchCard.css'
import {Link} from 'react-router-dom'

export default function SearchCard({title, poster, pathTo}) {
    return (
        <div className="search-movie">
            <div className="search-movie__post">
                <Link to={pathTo}>
                    <img src={poster} alt="sorry" />
                </Link>
            </div>
            <div className="search-movie__body">
                <h5 className="search-movie__title">{title}</h5>
            </div>
        </div>
    )
}