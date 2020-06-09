import React from 'react'
import {IMAGE_URL, CARD_SIZE} from '../../../config'
import './SearchCard.css'
import male from '../../../Cast/Actor/unknown_male.png'
import female from '../../../Cast/Actor/unknown_female.png'

import {Link} from 'react-router-dom'

export default function SearchCard({path, id, gender, name}) {
    const image = path === null ? gender === 2 ? male : female : `${IMAGE_URL}${CARD_SIZE}${path}`
    return (
        <div className="search-actor">
            <div className="search-actor__photo">
                <Link className="search-actor__photo-img" to={`/actors/${id}`}>
                    <img src={image} alt="actor_image"/>
                </Link>
            </div>
            <div className="search-actor__name">
                <Link className="search-actor__name-link" to={`/actors/${id}`}>
                    <h5 className="search-actor__name-text">{name}</h5>
                </Link>
            </div>
        </div>
    )
}