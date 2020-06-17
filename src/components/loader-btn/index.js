import React from "react";
import "./style.css";

export const BtnLoader = React.memo(function ({ handlerLoading, children = "load more" }) {
  return (
    <div className="btn btn-loading">
      <button onClick={handlerLoading}>{children}</button>
    </div>
  );
})
