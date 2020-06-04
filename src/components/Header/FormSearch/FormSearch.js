import React, {createRef, useState} from "react";
import "./FormSearch.css";
import Search from "../../Search/Search";

import InputSearch from "./InputSearch/InputSearch";

export default function FormSearch() {
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
            <button ref={btnRefSearch} type="submit" className={`${classes.sendClass} form__btn`} onClick={() =>{}}/>
            <div className="input-block">
                <InputSearch classes={classes} btnRefClose={btnRefClose} btnRefSearch={btnRefSearch}/>
            </div>
            <button type="button" className={`${classes.btnClass} form__btn`} onClick={onClickOpenSearch}/>
            <a ref={btnRefClose} className={`${classes.closeClass} close`} onClick={onClickCloseSearch}/>
        </form>
    );
}
