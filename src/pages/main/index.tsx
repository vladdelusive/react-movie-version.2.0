import React from "react";
import Image from "assets/images/mainImage.png";
import "./style.css";

export function Main() {
  return (
    <div className="main-page">
      <img src={Image} className="main-page__image" alt="main_img" />
    </div>
  );
}
