import React from "react";
import "./style.css";

interface StandardComponentProps {
    handlerLoading(): void
    children: React.ReactNode | string,
}

export const BtnLoader = React.memo(function ({ handlerLoading, children = "load more" }: StandardComponentProps) {
  return (
    <div className="btn btn-loading">
      <button onClick={handlerLoading}>{children}</button>
    </div>
  );
})
