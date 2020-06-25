import React from "react";
import {SearchCard} from "components";
import {ICast} from "react-app-env";

export const SearchCardsContentActors = React.memo( ({ cast }: {cast: ICast[]}): any => {
  const identityId: number[] = [];
  const actors = cast.map((actor: any) => {
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

