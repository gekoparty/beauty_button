import randomcolor from "randomcolor";
import React from "react";
import { useState } from "react";

const fontsArr = [
  "Impact,Charcoal,sans-serif",
  "Brush Script MT, cursive",
  "Luminari, fantasy",
  "Comic Sans MS, cursive",
  "American Typewriter, serif",
];

const Button = (props) => {
  const [changeColor, setColor] = useState("lightblue");

  const onClickHandler = (e) => {
    setColor(randomcolor());
    console.log(changeColor);
  };
  props.changeColor;

  return (
    <div>
      <p style={{ color: changeColor }} id="name">
        Pumpkin
      </p>
      <button
        style={{ background: changeColor }}
        onClick={onClickHandler}
        id="beautifierBtn"
      >
        Button
      </button>
    </div>
  );
};

export default Button;
