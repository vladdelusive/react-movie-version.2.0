import React from 'react'
import {IMAGE_URL, CARD_SIZE } from '../../../config'
import './Actor.css'

export default function Actor({path, id, gender, name}) {
    return (
        <div>
            <img src={`${IMAGE_URL}${CARD_SIZE}${path}`} alt="sorry" />
            <div>
                <h5>
                    <a href="/">{name}</a>
                </h5>
            </div>
        </div>
    )
}
