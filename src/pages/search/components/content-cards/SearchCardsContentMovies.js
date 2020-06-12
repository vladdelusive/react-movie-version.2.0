import React from 'react';
import { makeImgUrl} from "helpers/make-img-url";
import { CARD_SIZE } from 'constants/cards'
import {overviewEditor} from "helpers/overview-editor";

import image from 'assets/images/image.jpg';
import {SearchMovie as Card} from "components";

export const SearchCardsContentMovies = React.memo(({ results, path }) => {
    const identityId = []
    const cards = results.map((movie) => {
        if(identityId.find((el)=>el===movie.id)){
            return ""
        }
        identityId.push(movie.id)
        const poster = movie.poster_path
            ? makeImgUrl(movie.poster_path, CARD_SIZE)
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