import React, { useState, useEffect } from "react";
import { NEWLY_MOVIES_URL } from "api/config";

import API from "http/axios";
import "./style.css";
import {Loader} from "components/loader";
import {ArrowTop} from "components/arrow-top";
import {BtnLoader} from "components/loader-btn";
import {Content} from "components/movies-page";

export function MoviesPage() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handlerLoading = async () => {
    const fetched = await API.get(NEWLY_MOVIES_URL(page));
    const { data } = fetched;
    setResults([...results, ...data.results]);
    setPage(page + 1);
  };

  useEffect(() => {
      handlerLoading();
      setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="section__head">
        <h1 className="section__title">NEWLY MOVIES</h1>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="section__content">
            <div className="section__content-container">
              <Content results={results} path="/movies" />
            </div>
            <BtnLoader handlerLoading={handlerLoading}>
              Load more movies...
            </BtnLoader>
          </div>
          <div className="section__footer">
            <ArrowTop />
          </div>
        </>
      )}
    </>
  );
}