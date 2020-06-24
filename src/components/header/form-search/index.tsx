import React, { useState, useEffect } from "react";
import "./style.css";
import { FETCH_TIMEOUT } from 'constants/constants'

import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Search} from "./suggestions";

import {actions} from 'store/search/actions'
import {useActions} from "hooks/use-actions";

import { ITopActors, IMoviesNewly } from "react-app-env";

let fetchTimer: ReturnType<typeof setTimeout>
const rootElement: HTMLElement | null = document.getElementById('root');

interface RootState {
    inputValue: string,
    resultsActors: ITopActors[],
    showSearchedItems: boolean,
    resultsMovies: IMoviesNewly[],
    inputOpen: boolean,
}

interface ITarget {
    target: HTMLInputElement;
}

export const FormSearch = React.memo(() => {
    const {inputValue, resultsActors, showSearchedItems, resultsMovies, inputOpen} = useSelector(({search}: { search: RootState}) => search);
    const {inputIsActive, reloadPage,toggleSuggestions, setInput, offloadData, fetchInputValue } = useActions(actions)

    const [classes, setClasses] = useState({ inputClass: "", btnClass: "",
        closeClass: "hide", sendClass: "hide"});

    const onClickOpenSearch = () => {
        setClasses({inputClass: "show", btnClass: "hide",closeClass: "", sendClass: ""})
        inputIsActive(true)
    };
    const onClickCloseSearch = () => {
        setClasses({inputClass: "", btnClass: "", closeClass: "hide", sendClass: "hide"})
        toggleSuggestions(false); inputIsActive(false)
    };

    const valueTarget = ({target}: ITarget) => {
        setInput(target.value)
        clearTimeout(fetchTimer);
        if (target.value === "") {
            offloadData()
            return
        }
        fetchTimer = setTimeout(() => fetchInputValue(target.value), FETCH_TIMEOUT);
    }

    useEffect(() => {
        const checkerEvents = ({target}:any): void => {
            if(target.closest(".form")) return
            toggleSuggestions(false)
            return
        }
        if(inputOpen) {
            rootElement?.addEventListener("click", checkerEvents)
        }
        return ()=>{
            rootElement?.removeEventListener("click", checkerEvents)
        }
    })

    return (
        <form className="form" onSubmit={(e) => {e.preventDefault()}}>
            <div className="form__submit">
                <Link to={`/search?query=${inputValue}`}>
                    <button
                        onClick={()=>{
                            toggleSuggestions(false)
                            reloadPage()
                        }}
                        type="submit"
                        className={`${classes.sendClass} form__btn`}
                    />
                </Link> 
            </div>
            <div className="input-block">
                <div className="input-block__search">
                    <input
                        autoComplete="off"
                        onFocus={() => toggleSuggestions(true)}
                        type="text"
                        name="input"
                        className={`${classes.inputClass} input-block__search-field`}
                        value={inputValue}
                        onChange={valueTarget}
                    />
                            {showSearchedItems &&
                                (resultsActors !== null || resultsMovies !== null) &&
                                    <Search
                                        value={inputValue.replace(/\s+/g,' ').trim()}
                                        searchResultMovies={resultsMovies}
                                        searchResultActors={resultsActors}
                                    />
                            }
                </div>
            </div>
            <div className="form__open">
                <button type="button" className={`${classes.btnClass} form__btn`} onClick={onClickOpenSearch}/>
            </div>
            <div className={`form__control ${classes.closeClass} close`} onClick={onClickCloseSearch}/>
        </form>
    );
})
