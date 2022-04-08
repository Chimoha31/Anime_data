import React from "react";
import "./Hero.css";
import Icons from "./Icons";

const Hero = () => {
  return (
    <div className="svgs_container">
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
