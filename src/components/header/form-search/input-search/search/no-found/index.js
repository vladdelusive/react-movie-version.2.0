import React from "react";
import "components/header/form-search/input-search/search/no-found/style.css";

export function NoOneFound() {
  return (
    <div className="input-block__items not-found">
      <p className="not-found__text">NOT FOUND</p>
    </div>
  );
}
