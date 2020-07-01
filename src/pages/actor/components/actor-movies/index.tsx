import React, { memo } from "react";
import {Movie} from "./movie";
import {ArrowTop} from "components";
import {ICastMovies as ICastMovie} from "react-app-env";
import {IPropsCastMovies} from "./types";

export const ActorMovies: React.FC<IPropsCastMovies> = memo<IPropsCastMovies>(function({ cast }) {
  const identityId: number[] = [];
  const movies = cast.map((movie: ICastMovie) => {
    if (identityId.find((el: number) => el === movie.id)) {
      return "";
    }
    identityId.push(movie.id);
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        img={movie.poster_path}
        title={movie.title}
      />
    );
  });
  return (
    <>
      <div className="section__content-container">{movies}</div>
      {movies.length > 12 ? <ArrowTop /> : ""}
    </>
  );
});
