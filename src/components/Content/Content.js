import React from 'react'
import './Content.css'
import Card from '../Card/Card'
import { IMAGE_URL, CARD_SIZE } from '../config'
import image from '../Card/image.jpg'
import overviewEditor  from './overviewEditor'

export default React.memo(function Content({ results, path }) {
    const identityId = []
    const cards = results.map((movie) => {
        if(identityId.find((el)=>el===movie.id)){
            return ""
        }
        identityId.push(movie.id)
        const poster = movie.poster_path
        ? `${IMAGE_URL}${CARD_SIZE}${movie.poster_path}`
        : image;
        const overview = movie.overview.length > 150 ? overviewEditor(movie.overview) : movie.overview

        return (
            <Card
                title={movie.title}
                key={movie.id}
                overview={overview}
                poster={poster}
                pathTo={`${path}/${movie.id}`}
            />
        )
    })

    return cards
})
