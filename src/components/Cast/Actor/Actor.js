import React from 'react'
import {IMAGE_URL, CARD_SIZE} from '../../config'
import './Actor.css'
import male from './unknown_male.png'
import female from './unknown_female.png'
import {Link} from 'react-router-dom'

export default function Actor({path, id, gender, name}) {
    const image = path === null ? gender === 2 ? male : female : `${IMAGE_URL}${CARD_SIZE}${path}`
    return (
        <div className="actor">
            <Link to={`/actors/${id}`}> <img src={image} alt="actor_image" className="actor__photo"/> </Link>
            <div className="">
                <h5 className="actor__name">
                    <Link className="actor__name--link" to={`/actors/${id}`}> {name} </Link>
                </h5>
            </div>
        </div>
    )
}
