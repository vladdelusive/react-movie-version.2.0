import React from "react";
import { Link } from "react-router-dom";

import { SearchItem } from "./items";
import { NoOneFound } from "./no-found";
import "./style.css";

import { actions } from 'store/search/actions'
import {useActions} from "hooks/use-actions";
import {ISearchProps} from "./types";

export const Search = React.memo<ISearchProps>(({ value, searchResultActors, searchResultMovies }) => {
  const {toggleSuggestions, reloadPage} = useActions(actions)

  if (!searchResultMovies || !searchResultActors) return null;

  const searchedItemsMovies = [];
  const toM = searchResultMovies.length > 2 ? 2 : searchResultMovies.length;
  for (let i = 0; i < toM; i++) {
    searchedItemsMovies.push(
      <SearchItem
        setShowSearchedItems={() => toggleSuggestions(false)}
        key={searchResultMovies[i].id}
        title={searchResultMovies[i].title}
        image={searchResultMovies[i].poster_path}
        id={searchResultMovies[i].id}
        typeItem="movie"
      />
    );
  }
  const searchedItemsActors = [];
  const toA = searchResultActors.length > 2 ? 2 : searchResultActors.length;
  for (let i = 0; i < toA; i++) {
    searchedItemsActors.push(
      <SearchItem
        setShowSearchedItems={() => toggleSuggestions(false)}
        key={searchResultActors[i].id}
        title={searchResultActors[i].name}
        image={searchResultActors[i].profile_path}
        id={searchResultActors[i].id}
        typeItem="actor"
      />
    );
  }

  const categoriesCount: number = +!!searchedItemsMovies.length + +!!searchedItemsActors.length;
  if (!categoriesCount) return <NoOneFound />;
  const pixels = 65 * (searchedItemsMovies.length + searchedItemsActors.length) + 22 * categoriesCount + 35;
  // (h.suggestions-movie*n.suggestions-actors)+(categHeight*n.categ)+heightMargingsPadding
  return (
    <div className="input-block__items" style={{ height: pixels }}>
      {searchedItemsMovies.length ? (
        <div className="category-search">
          <div className="category category__movies">Movies</div>
          {searchedItemsMovies}
        </div>
      ) : null}
      {searchedItemsActors.length ? (
        <div className="category-search">
          <div className="category category__actors">Actors</div>
          {searchedItemsActors}
        </div>
      ) : null}
      <Link
        className="input-block__link"
        to={`/search?query=${value}`}
        onClick={() => {toggleSuggestions(false); reloadPage()}}
      >
        More...
      </Link>
    </div>
  );
})
