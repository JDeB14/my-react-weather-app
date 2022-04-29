import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  let longitude = props.coords.lon;
  let latitude = props.coords.lat;

  function showForecast(response) {
    setLoaded(true);
    let minTemp = response.data.daily[0].temp.min;
    let maxTemp = response.data.daily[0].temp.max;
  }
  if (loaded) {
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
  } else {
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=10cecfc6ca6c9a59ad2246de5dec6a11&units=imperial`;
    axios.get(forecastApiUrl).then(showForecast);
  }
}
