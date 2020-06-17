import React from "react";
import "./style.css";

const handlerGoUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const ArrowTop = React.memo(function () {
  return (
    <div className="control-slide">
      <div className="arrow" onClick={handlerGoUp}></div>
    </div>
  );
})
