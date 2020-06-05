import React, {createRef, useState} from "react";
import "./FormSearch.css";
import Search from "../../Search/Search";

import InputSearch from "./InputSearch/InputSearch";
import {Link} from "react-router-dom";

export default function FormSearch({inputValue, setInputValue}) {
    const [classes, setClasses] = useState({
        inputClass: "",
        btnClass: "",
        closeClass: "hide",
        sendClass: "hide"
    });

    const btnRefClose = createRef()
    const btnRefSearch = createRef()

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
    };

    return (
        <form className="form" onSubmit={(e) => e.preventDefault()}>
            <Link to={`/search?query=${inputValue}`}>
                <button
                    ref={btnRefSearch}
                    type="submit"
                    className={`${classes.sendClass} form__btn`}
                />
            </Link>
            <div className="input-block">
                <InputSearch
                    classes={classes}
                    btnRefClose={btnRefClose}
                    btnRefSearch={btnRefSearch}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
            </div>
            <button type="button" className={`${classes.btnClass} form__btn`} onClick={onClickOpenSearch}/>
            <a ref={btnRefClose} className={`${classes.closeClass} close`} onClick={onClickCloseSearch}/>
        </form>
    );
}
