import React from 'react'
import {IMAGE_URL, CARD_SIZE } from '../../../config'
import './Actor.css'

export default function Actor({path, id, gender, name}) {
    return (
        <div className="card col-3 mb-5 actor" >
            <img src={`${IMAGE_URL}${CARD_SIZE}${path}`} className="card-img-top" alt="sorry" />
            <div className="card-body">
                <h5 className="card-title">
                    <a href="/">{name}</a>
                </h5>
            </div>
        </div>
    )
}
