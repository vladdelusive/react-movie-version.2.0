import React, {useState} from "react";
import "./FormSearch.css";

export default function FormSearch() {
    const [classes, setClasses] = useState({
        inputClass: "",
        btnClass: "",
        closeClass: "hide"
    });
    const [inputValue, setInputValue] = useState("")

    const onClickOpenSearch = () => {
        setClasses({
            inputClass: "input__search--clicked show",
            btnClass: "input__btn--clicked hide",
            closeClass: ""
        })
    };

    const onClickCloseSearch = () => {
        setClasses({
            inputClass: "",
            btnClass: "",
            closeClass: "hide"
        })
    };

    return (
        <form className="input" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" name="input" className={`${classes.inputClass} input__search`} value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
            <button type="button" className={`${classes.btnClass} input__btn`} onClick={onClickOpenSearch}/>
            <a className={`${classes.closeClass} close`} onClick={onClickCloseSearch}/>
        </form>
    );
}
