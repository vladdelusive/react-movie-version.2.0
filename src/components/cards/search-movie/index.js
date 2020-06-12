import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Card = ({ title, poster, pathTo }) => {
  return (
    <div className="card search-card">
      <div className="card__header search-card__header">
        <Link to={pathTo}>
          <img src={poster} alt="sorry" />
        </Link>
      </div>
      <div className={`card__body search-card__body`}>
        <h5 className="card__title search-card__title">{title}</h5>
      </div>
    </div>
  );
}
