import React from 'react'
import { IMAGE_URL, CARD_SIZE } from '../../config'
import './Actor.css'
import male from './unknown_male.png'
import female from './unknown_female.png'
import {Link} from 'react-router-dom'

export default function Actor({ path, id, gender, name }) {
    const image = path === null ? gender === 2 ? male : female : `${IMAGE_URL}${CARD_SIZE}${path}`
    return (
        <div className="card col-3 mb-5 actor" >
            <img src={image} className="card-img-top" alt="actor_image" />
            <div className="card-body" >
                <h5 className="card-title" >
                    <Link to={`/actors/${id}`} > {name} </Link>
                </h5>
            </div>
        </div>
    )
}
