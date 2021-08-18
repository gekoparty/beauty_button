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

const fontWeight = [
  "bold",
  "normal"
];

const Button = (props) => {
  const [changeColor, setColor] = useState("lightblue");
  const [newFont, setFont] = useState("Arial");
  const [newRadius, setRadius] = useState('50px');
  const [newFontWeigth, setFontWeigth] = useState('normal');

  const onClickHandler = (e) => {
    setColor(randomcolor());
    setFont(fontsArr[Math.floor(Math.random()*fontsArr.length)]);
    setRadius(Math.floor(Math.random()* 50) + "px");
    setFontWeigth(fontWeight[Math.floor(Math.random()*fontWeight.length)])
    
  };
  

  return (
    <div>
      <p style={{ color: changeColor, fontFamily: newFont, fontWeight: newFontWeigth }} id="name">
        Pumpkin
      </p>
      <button
        style={{ background: changeColor, borderRadius: newRadius }}
        onClick={onClickHandler}
        id="beautifierBtn"
      >
        Button
      </button>
    </div>
  );
};

export default Button;
