import React from "react";
import "./MainTemp.css";

export default function MainTemp() {
  let weatherData = {
    mainTemp: 65,
  };
  return (
    <div>
      <h1 className="default-color">
        <span>{weatherData.mainTemp}</span>
        <span>°F</span>
      </h1>
    </div>
  );
}
