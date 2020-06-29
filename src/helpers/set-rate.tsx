import React from "react";

type ISetRate = { vote_average: number }

export const setRate = (results: ISetRate) => {
    const movieRate = Math.round(results.vote_average) || 0;
    const stars = [];
    for (let i = 0; i < 10; i++) {
        stars[i] = (
            <span
                key={i}
                className={`fa fa-star${i < movieRate ? " checked" : ""}`}
            >
        </span>
        );
    }
    return stars;
};