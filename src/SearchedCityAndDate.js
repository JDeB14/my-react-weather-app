import React from "react";

export default function SearchedCityAndDate() {
  let currentDate = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[currentDate.getDay()];
  let month = months[currentDate.getMonth()];
  let date = currentDate.getDate();
  let weatherData = {
    searchedCity: "Memphis",
  };
  return (
    <div>
      <h3 className="default-color">{weatherData.searchedCity}</h3>
      <h6 className="color">
        {day}, {month} {date}
      </h6>
    </div>
  );
}
