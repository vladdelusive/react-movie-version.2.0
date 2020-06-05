import React, {useState, useEffect} from 'react'
import './InputPage.css'
import NoQuery from "./NoQuery/NoQuery";
import SearchContent from "./SearchContent/SearchContent";

function InputPage({location}) {
    if (!location.search) return <NoQuery/>
    const text = decodeURI(location.search.slice(7))
        .replace(/\s+/g, ' ').trim()
    if (!text) return <NoQuery/>

    return (
        <div className="section__search">
            <div className="section__title">Your search is
                "<span className="search-text">{text}</span>"
            </div>
            <SearchContent query={text} page={1}/>
        </div>
    )
}

export default InputPage