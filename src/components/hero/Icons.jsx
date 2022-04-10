import React from "react";
import Icon from "./Icon";
import './Icons.css';

const Icons = () => {
  return (
    <div className="row">
      <div
        style={{
          animation: `animate  60s linear forwards infinite`,
        }}
      >
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>
    </div>
  );
};

export default Icons;
