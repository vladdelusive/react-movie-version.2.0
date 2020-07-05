import React, { useEffect } from "react";
import {Loader, Cast, BtnLoader} from "components";
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/actors/actions";
import {IStore} from "react-app-env";

export function Actors() {
  const {actors, loading} = useSelector(({actors}: IStore)=>actors.topActors)
  const {getActors} = useActions(actions)
  useEffect(() => {
    if(!actors.length){
      getActors()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <BtnLoader handlerLoading={getActors}>
              Load more actors...
            </BtnLoader>
          </div>
        </>
      )}
    </>
  );
}
