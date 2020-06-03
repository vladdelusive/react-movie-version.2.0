import React from 'react'
import './Search.css'
import SearchItem from "./SearchItems/SearchItem";
import {Link} from "react-router-dom";

export default function Search({searchResult, amountPages}) {
    const pixels = 45 * 5 + 10 + 20
    // const searchedItems = searchResult.map(item => {
    //     SearchItem
    // })
    return (
        <div className="input-block__items" style={{height: pixels}}>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <Link className="input-block__link" to={'/actors'}>More...</Link>
        </div>
    )
}