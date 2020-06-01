import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

export default function Card({title, overview, poster, pathTo}) {
    return (
        <div style={{ width: 300 }}>
            <Link to={pathTo}>
                <img src={poster} alt="sorry" />
            </Link>
            <div>
                <h5>{title}</h5>
                <p>{overview}</p>
                <Link to={pathTo}>Read more...</Link>
            </div>
        </div>
    )
}
