import React, { useEffect, useState } from "react";
import { TRENDY_ACTORS_URL } from "services/api/config";

import {Loader, Cast, BtnLoader} from "components";
import API from "services/http/index";

export function Actors() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handlerLoading = async () => {
    const fetched = await API.get(TRENDY_ACTORS_URL(page));
    const { data } = fetched;

    setResults([...results, ...data.results]);
    setPage(page + 1);
    page === 1 && setLoading(false);
  };

  useEffect(() => {
      handlerLoading();
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
