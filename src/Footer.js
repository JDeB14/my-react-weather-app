import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://github.com/JDeB14/my-react-weather-app"
        rel=" noopener noreferrer"
        target="_blank"
      >
        Open-source code
      </a>
      <span className="name">
        {" "}
        by{" "}
        <a
          href="https://relaxed-pixie-2dceb4.netlify.app"
          rel=" noopener noreferrer"
          target="_blank"
        >
          Jae DeBerry
        </a>
      </span>
    </div>
  );
}
