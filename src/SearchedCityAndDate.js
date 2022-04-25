import React from "react";

export default function SearchedCityAndDate() {
  let weatherData = {
    searchedCity: "Memphis",
    day: "Sun",
    date: "April 18",
  };
  return (
    <div>
      <h3 className="default-color">{weatherData.searchedCity}</h3>
      <h6 className="color">
        {weatherData.day}, {weatherData.date}
      </h6>
    </div>
  );
}
