import React from "react";
import "./Button.css";
import ringer from "../../assets/ringer.mp3";

const Button = ({ className, value, onClick }) => {
  const audio = new Audio(ringer);

  return (
    <button className={className} onClick={audio.play()} onMouseDown={onClick}>
      {value}
    </button>
  );
};

export default Button;
