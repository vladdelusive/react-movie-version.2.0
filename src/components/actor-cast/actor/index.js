import React from 'react'
import { IMAGE_URL } from 'api/config'
import { CARD_SIZE } from 'constants/constants'
import 'components/actor-cast/actor/style.css'
import male from 'assets/images/unknown_male.png'
import female from 'assets/images/unknown_female.png'
import {Link} from 'react-router-dom'

export function Actor({path, id, gender, name}) {
    const image = path === null ? gender === 2 ? male : female : `${IMAGE_URL}${CARD_SIZE}${path}`
    return (
        <div className="card-actor">
            <div className="card-actor__photo">
                <Link className="card-actor__photo-img" to={`/actors/${id}`}>
                    <img src={image} alt="actor_image"/>
                </Link>
            </div>
            <div className="card-actor__name">
                <Link className="card-actor__name-link" to={`/actors/${id}`}>
                    <h5 className="card-actor__name-link card-actor__name-link--text">{name}</h5>
                </Link>
            </div>
        </div>
    )
}
