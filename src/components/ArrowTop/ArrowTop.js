import React from "react";
import "./ArrowTop.css";

const handlerGoUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function ArrowTop() {
  return (
    <div className="control-slide">
      <div className="arrow" onClick={handlerGoUp}></div>
    </div>
  );
}
