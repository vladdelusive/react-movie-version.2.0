import React from "react";
import {SearchCard} from "components";
import {IActors} from "store/search/types";
import {ICastPropsActors} from "./types";

export const SearchCardsContentActors = React.memo<ICastPropsActors>( ({ cast }): any => {
  const identityId: number[] = [];
  const actors = cast.map((actor: IActors) => {
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

