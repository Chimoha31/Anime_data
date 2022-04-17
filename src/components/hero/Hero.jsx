import React from "react";
import "./Hero.css";
import Icons from "./Icons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="svgs_container">
      <div className="title">
        <h1>Anime Database</h1>
        {/* Btn */}
      </div>
      <div className="login_btn">
        <Link to="/login" className="login_link">
          To Login
        </Link>
      </div>

      <style>
        {`@keyframes animate {
    0% {
      transform: translateX(-10%);
    }
    33% {
      transform: translateX(-30%);
    }
  66% {
      transform: translateX(-10%);
    }

    100% {
      transform: translateX(-30%);
    }
  }`}
      </style>
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
      <Icons />
    </div>
  );
};

export default Hero;
