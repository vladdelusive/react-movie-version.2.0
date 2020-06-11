import React from "react";
import "./Logo.css";
import image from "../../../assets/images/movie-logo.jpg";

export default function Logo() {
  return (
    <div className="logo">
      <a href="https://www.themoviedb.org/">
        <img className="logo__img" src={image} alt="logo" />
      </a>
    </div>
  );
}
