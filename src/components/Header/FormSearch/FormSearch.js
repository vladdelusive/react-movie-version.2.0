import React, {createRef, useState} from "react";
import "./FormSearch.css";
import Search from "../../Search/Search";

import InputSearch from "./InputSearch/InputSearch";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SEARCH_TOGGLE} from "../../../store/SEARCH/actions/actionTypes";

export default function FormSearch() {
    const {inputValue, showSearchedItems} = useSelector(({search}) => search);
    const dispatch = useDispatch()

    const [classes, setClasses] = useState({
        inputClass: "",
        btnClass: "",
        closeClass: "hide",
        sendClass: "hide"
    });

    const onClickOpenSearch = () => {
        setClasses({
            inputClass: "show",
            btnClass: "hide",
            closeClass: "",
            sendClass: ""
        })
    };

    const onClickCloseSearch = () => {
        setClasses({
            inputClass: "",
            btnClass: "",
            closeClass: "hide",
            sendClass: "hide"
        })
        dispatch({type: SEARCH_TOGGLE, payload: false})
    };

    return (
        <form className="form" onSubmit={(e) => e.preventDefault()}>
            <Link to={`/search?query=${inputValue}`}>
                <button
                    onClick={()=>dispatch({type: SEARCH_TOGGLE, payload: false})}
                    type="submit"
                    className={`${classes.sendClass} form__btn`}
                />
            </Link>
            <div className="input-block">
                <InputSearch
                    showSearchedItems={showSearchedItems}
                    setShowSearchedItems={()=>dispatch({type: SEARCH_TOGGLE, payload: true})}
                    classes={classes}
                    inputValue={inputValue}
                />
            </div>
            <button type="button" className={`${classes.btnClass} form__btn`} onClick={onClickOpenSearch}/>
            <div className={`${classes.closeClass} close`} onClick={onClickCloseSearch}/>
        </form>
    );
}
