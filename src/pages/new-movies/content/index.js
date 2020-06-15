import React from "react";
import "./style.css";

import {Card} from "components";
import {makeImgUrl} from "helpers/make-img-url";
import image from "assets/images/image.jpg";
import {overviewEditor} from "helpers/overview-editor";

export const Content = React.memo(({ results, path }) => {
  const identityId = [];
  const cards = results.map((movie) => {
    if (identityId.find((el) => el === movie.id)) {
      return "";
    }
    identityId.push(movie.id);
    const poster = movie.poster_path
      ? makeImgUrl(movie.poster_path)
      : image;
    const overview =
      movie.overview.length > 150
        ? overviewEditor(movie.overview)
        : movie.overview;

    return (
      <Card
        title={movie.title}
        key={movie.id}
        overview={overview}
        poster={poster}
        pathTo={`${path}/${movie.id}`}
      />
    );
  });

  return cards;
});
