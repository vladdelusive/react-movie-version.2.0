import React, { useEffect, useState } from "react";
import { TRENDY_ACTORS_URL } from "api/config";

import { ACTORS } from 'constants/constants'
import { getLocalStorage, setLocalStorage } from "helpers/local-storage";
import {Loader} from "components/loader";
import {Cast} from "components/actor-cast/cast";
import {BtnLoader} from "components/loader-btn";
import API from "http/axios";

export function Actors() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handlerLoading = async () => {
    const fetched = await API(TRENDY_ACTORS_URL(page));
    const { data } = fetched;
    const state = {
      results: [...results, ...data.results],
      page: page + 1,
      loading: false,
    };
    setLocalStorage(ACTORS, state);
    setResults([...results, ...data.results]);
    setPage(page + 1);
    page === 1 && setLoading(false);
  };

  useEffect(() => {
    if (getLocalStorage(ACTORS)) {
      const localState = getLocalStorage(ACTORS);

      setResults(localState.results);
      setPage(localState.page);
      setLoading(false);
    } else {
      handlerLoading();
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
          <Cast cast={results} />
          <div className="section__footer">
            <BtnLoader handlerLoading={handlerLoading}>
              Load more actors...
            </BtnLoader>
          </div>
        </>
      )}
    </>
  );
}
