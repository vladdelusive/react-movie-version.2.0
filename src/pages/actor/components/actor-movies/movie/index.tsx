import React from "react";
import { makeImgUrl } from "helpers/make-img-url";

import { Link } from "react-router-dom";
import image from "assets/images/image.jpg";

interface IPropsMovie {
    id: number,
    title: string,
    img: string
}

export function Movie({ id, img, title }: IPropsMovie) {
  return (
    <div className="card">
      <div className="card__header">
        <Link to={`/movies/${id}`} title={title}>
          <img
            src={img === null ? image : makeImgUrl(img)}
            alt="movie_image"
          />
        </Link>
      </div>
      <div className="card__body">
        <Link className="card__title" to={`/movies/${id}`} title={title}>
          <h5 className="card__title">{title}</h5>
        </Link>
      </div>
    </div>
  );
}
