import React, { useEffect, useState } from "react";
import {Loader, Cast, BtnLoader} from "components";
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/top-actors/actions";

export function Actors() {
  const {actors, loading} = useSelector(({actors})=>actors)
  const {fetchActors} = useActions({
    fetchActors: actions.fetchActors,
  })
  useEffect(() => {
    fetchActors()
  }, []);
  return (
    <>
      <div className="section__head">
        <h1 className="section__title">ACTORS</h1>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Cast cast={actors} />
          <div className="section__footer">
            <BtnLoader handlerLoading={fetchActors}>
              Load more actors...
            </BtnLoader>
          </div>
        </>
      )}
    </>
  );
}
