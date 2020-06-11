import React from 'react';
import { IMAGE_URL } from 'api/config';
import { CARD_SIZE } from 'constants/constants'
import {overviewEditor} from "helpers/overview-editor";

import image from 'assets/images/image.jpg';
import {Card} from "components/cards/card";

export const SearchCardsContentMovies = React.memo(({ results, path }) => {
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