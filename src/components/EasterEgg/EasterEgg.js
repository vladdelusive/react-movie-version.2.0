import React from "react";
import "./EasterEgg.css";
import pashalka from "../../assets/images/pashalka.jpg";

export default function EasterEgg() {
  return (
    <div className="easter-egg">
      <div className="easter-egg__name">
        <h1 className="easter-egg__name-text">Tovstochub Vlad</h1>
      </div>
      <div className="easter-egg__img">
        <img src={pashalka} alt="me" />
      </div>
    </div>
  );
}
