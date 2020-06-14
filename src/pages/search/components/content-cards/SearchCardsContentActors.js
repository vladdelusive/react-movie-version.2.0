import React from "react";
import {SearchCard} from "components";

export const SearchCardsContentActors = React.memo(function SearchCardsContentActors({ cast }) {
  const identityId = [];
  const actors = cast.map((actor) => {
    if (identityId.find((el) => el === actor.id)) {
      return "";
    }
    identityId.push(actor.id);
    return (
      <SearchCard
        name={actor.name}
        key={actor.id}
        id={actor.id}
        gender={actor.gender}
        path={actor.profile_path}
      />
    );
  });
  return actors
});
