import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

export default function Card({title, overview, poster, pathTo, searching}) {
    const styleCard = searching ? {width: 200, margin: 10, border: "2px solid"} : {width: 350}
    const styleImg = searching ? {width: 200} : {width: 350}
    return (
        <div className="card-movie" style={styleCard}>
            <div className="card-movie__post">
                <Link to={pathTo}>
                    <img style={styleImg} src={poster} alt="sorry" />
                </Link>
            </div>
            <div className="card-body">
                <h5 className="card-body__title">{title}</h5>
                {
                    searching || <>
                        <p className="card-body__overview">{overview}</p>
                        <Link className="card-body__link" to={pathTo}>Read more...</Link>
                    </>
                }
            </div>
        </div>
    )
}