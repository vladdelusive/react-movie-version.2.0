import React, { useState, useEffect } from 'react'
import './InputPage.css'
import NoQuery from "./NoQuery/NoQuery";
import SearchContent from "./SearchContent/SearchContent";

function InputPage({location}) {
    const text = decodeURI(location.search.slice(7))
        .replace(/\s+/g,' ').trim()
    if(!location.search) return <NoQuery/>

    return (
        <div className="section__search">
                <div className="section__title">Your search is
                    "<span className="search-text">{text}</span>"
                </div>
            <SearchContent query={text}/>
        </div>
    )
}

export default InputPage