import React, { useState } from "react";
import ForecastInfo from "./ForecastInfo";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col future-first">
            <ForecastInfo forecast={forecast[0]} />
          </div>
          <div className="col future">
            <ForecastInfo forecast={forecast[1]} />
          </div>
          <div className="col future">
            <ForecastInfo forecast={forecast[2]} />
          </div>
          <div className="col future">
            <ForecastInfo forecast={forecast[3]} />
          </div>
          <div className="col future-last">
            <ForecastInfo forecast={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=10cecfc6ca6c9a59ad2246de5dec6a11&units=imperial`;
    axios.get(forecastApiUrl).then(showForecast);
  }
}
