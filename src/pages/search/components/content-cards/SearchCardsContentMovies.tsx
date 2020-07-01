import React from 'react';
import { makeImgUrl} from "helpers/make-img-url";

import image from 'assets/images/image.jpg';
import {SearchMovie as Card} from "components";
import {IMovies as IMovie} from "react-app-env";
import {ICastPropsMovies} from "./types";

export const SearchCardsContentMovies = React.memo<ICastPropsMovies>(({ results, path }) => {
    const identityId: number[] = []
    return results.map((movie: IMovie) => {
        if(identityId.find((el)=>el===movie.id)){
            return ""
        }
        identityId.push(movie.id)
        const poster = movie.poster_path
            ? makeImgUrl(movie.poster_path)
            : image;
        return (
            <Card
                title={movie.title}
                key={movie.id}
                poster={poster}
                pathTo={`${path}/${movie.id}`}
            />
        )
    })
})