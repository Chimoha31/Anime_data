import React from "react";
import "./Hero.css";
import Icons from "./Icons";
import google from "../../images/google.png";

const Hero = () => {
  return (
    <div className="svgs_container">
      <div className="title">
        <h1>Anime Database</h1>
      </div>

      {/* Btn */}
      <div>
       
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
