import React from "react";
import "./style.css";

export const NoQuery = React.memo(()=> {
  return (
    <>
      <h1 className="section__title">Search Page</h1>
      <h1 className="subtitle">Please type something..</h1>
    </>
  );
})
