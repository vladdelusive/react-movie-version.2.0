import React from "react";
import "./style.css";

const handlerGoUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export function ArrowTop() {
  return (
    <div className="control-slide">
      <div className="arrow" onClick={handlerGoUp}></div>
    </div>
  );
}
