import React from "react";
import Icon from "./Icon";
// import './Icons.css';

const Icons = () => {
  return (
    <div className="hero_section">
      <style>
        {`@keyframes animate {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }`}
      </style>
      <div className="row">
        <div
          style={{
            animation: `animate  60s linear forwards infinite`,
          }}
        >
          <Icon />
          <Icon />
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default Icons;
