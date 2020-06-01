import React, { useState } from "react";
import "./FormSearch.css";

export default function FormSearch() {
  const [inputClass, setInputClass] = useState("input__search");
  const [btnClass, setBtnClass] = useState("input__btn");

  const onClick = () => {
    setInputClass((prev) => {
      return prev.length > 13 ? prev.slice(0, 13) : `${prev} input__search--clicked`;
    });
    setBtnClass((prev) => {
      return prev.length > 10 ? prev.slice(0, 10) : `${prev} input__btn--clicked`;
    });
  };
  return (
    <form className="input">
      <input type="text" name="input" className={inputClass} />
      <button type="button" className={btnClass} onClick={onClick} />
    </form>
  );
}
