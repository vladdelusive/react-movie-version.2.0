import React, { useEffect } from "react";
import {Loader, Cast, BtnLoader} from "components";
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/actors/actions";
import {ITopActors} from "react-app-env";

interface RootState {
  actors: ITopActors[],
  loading: boolean
}

export function Actors() {
  const {actors, loading} = useSelector(({actors}: {actors: {topActors: RootState}})=>actors.topActors) 
  const {fetchActors} = useActions(actions)
  useEffect(() => {
    if(!actors.length){
      fetchActors()
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
            <BtnLoader handlerLoading={fetchActors}>
              Load more actors...
            </BtnLoader>
          </div>
        </>
      )}
    </>
  );
}
