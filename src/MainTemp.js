import React from "react";
import "./MainTemp.css";

export default function MainTemp(props) {
  return (
    <div>
      <h1 className="default-color">
        <span>{Math.round(props.temp)}</span>
        <span>°F</span>
      </h1>
    </div>
  );
}
