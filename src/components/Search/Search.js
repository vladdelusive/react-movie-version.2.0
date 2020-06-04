import React from 'react'
import './Search.css'
import SearchItem from "./SearchItems/SearchItem";
import {Link} from "react-router-dom";

export default function Search({searchResultActors, searchResultMovies}) {
    const pixels = 45 * 5 + 10 + 20 + 50
    const searchedItemsMovies = [];
    if(!searchResultMovies) return null
    const toM = searchResultMovies.length > 4 ? 4 : searchResultMovies.length
    for (let i = 0; i < toM; i++) {
        searchedItemsMovies.push(<SearchItem
            key={searchResultMovies[i].id}
            title={searchResultMovies[i].title}
            image={searchResultMovies[i].poster_path}
            id={searchResultMovies[i].id}
            typeItem="movie"
        />)
    }
    // const searchedItemsActors = searchResultActors.map(item => {
    //     return <SearchItem
    //         movieTitle={}
    //         image={}
    //     />
    // })
    return (
        <div className="input-block__items" style={{height: pixels}}>
            <div className="category-search">
                <div className="category category__movies">Movies</div>
                {searchedItemsMovies}
            </div>
            <div className="category-search">
                <div className="category category__actors">Actors</div>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
            </div>
            <Link className="input-block__link" to={'/actors'}>More...</Link>
        </div>
    )
}