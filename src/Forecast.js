import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col future-first">
        <div className="day">Mon</div>
        <div className="emoji">
          <WeatherIcon iconDescription={"Clouds"} />
        </div>
        <div>
          <span className="H">66°</span>
          <span className="L"> 38°</span>
        </div>
      </div>
    </div>
  );
}
