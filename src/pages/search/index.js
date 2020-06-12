import React from "react";
import "./style.css";
import {NoQuery} from "./components/no-query";
import {SearchContent} from "./components/search-content";
import {EasterEgg} from "components";

export function InputPage({ location }) {
  if (!location.search) return <NoQuery />;
  const text = decodeURI(location.search.slice(7)).replace(/\s+/g, " ").trim();
  if (!text) return <NoQuery />;
  if (text.toLowerCase() === "товсточуб" || text.toLowerCase() === "tovstochub")
    return <EasterEgg />;

  return (
    <div className="section__search">
      <div className="section__title">
        Your search is "<span className="search-text">{text}</span>"
      </div>
      <SearchContent query={text} />
    </div>
  );
}
