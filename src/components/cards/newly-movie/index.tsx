import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Card = ({ title, overview, poster, pathTo }) => {
  return (
    <div className="card-movie">
      <div className="card-movie__post">
        <Link to={pathTo}>
          <img src={poster} alt="sorry" />
        </Link>
      </div>
      <div className="card-body">
        <h5 className="card-body__title">{title}</h5>
        <>
          <p className="card-body__overview">{overview}</p>
          <Link className="card-body__link" to={pathTo}>
            Read more...
          </Link>
        </>
      </div>
    </div>
  );
}
