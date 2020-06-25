import React from 'react';
import { makeImgUrl} from "helpers/make-img-url";

import image from 'assets/images/image.jpg';
import {SearchMovie as Card} from "components";
import {IMovies} from "react-app-env";

interface Interface {
    results: IMovies[] | any,
    path: string,
}

export const SearchCardsContentMovies = React.memo<Interface>(({ results, path }) => {
    console.log(results)
    const identityId: number[] = []
    return results.map((movie: IMovies) => {
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