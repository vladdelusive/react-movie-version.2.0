import React from "react";

interface IPropsRate {
    starsNumber: number
    onClickHandler?: (i: number) => void
}

export const setRate = ({starsNumber, onClickHandler = ()=>{}}: IPropsRate) => {
    const movieRate = Math.round(starsNumber) || 0;
    const stars = [];
    for (let i = 0; i < 10; i++) {
        stars[i] = (
            <span
                onClick={()=>onClickHandler(i + 1)}
                key={i}
                className={`fa fa-star${i < movieRate ? " checked" : ""}`}
            />
        );
    }
    return stars;
};