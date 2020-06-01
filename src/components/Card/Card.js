import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

export default function Card({title, overview, poster, pathTo}) {
    return (
        <div className="card col-3 mb-5" style={{ width: 300 }}>
            <Link to={pathTo}>
                <img src={poster} className="card-img-top" alt="sorry" />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{overview}</p>
                <Link to={pathTo} className="btn btn-primary">Read more...</Link>
            </div>
        </div>
    )
}
