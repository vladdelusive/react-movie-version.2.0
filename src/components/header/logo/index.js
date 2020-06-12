import React from "react";
import "./style.css";
import image from "assets/images/movie-logo.jpg";

export function Logo() {
  return (
    <div className="logo">
      <a href="https://www.themoviedb.org/">
        <img className="logo__img" src={image} alt="logo" />
      </a>
    </div>
  );
}
