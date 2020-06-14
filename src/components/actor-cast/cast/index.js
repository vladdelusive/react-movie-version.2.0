import React from "react";
import {Actor, ArrowTop} from "components";

export const Cast = React.memo(function({ cast }) {
  const identityId = [];
  const actors = cast.map((actor) => {
    if (identityId.find((el) => el === actor.id)) {
      return "";
    }
    identityId.push(actor.id);
    return (
      <Actor
        name={actor.name}
        key={actor.id}
        id={actor.id}
        gender={actor.gender}
        path={actor.profile_path}
      />
    );
  });
  return (
    <div className="section__content">
      <div className="section__content-container">{actors}</div>
      {actors.length > 12 ? <ArrowTop /> : ""}
    </div>
  );
});
