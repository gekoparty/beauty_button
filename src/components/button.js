import randomcolor from "randomcolor";
import React from 'react';
import {setState} from 'react-dom';

const fontsArr = [
        "Impact,Charcoal,sans-serif",
        "Brush Script MT, cursive",
        "Luminari, fantasy",
        "Comic Sans MS, cursive",
        "American Typewriter, serif"
    ]

function onClickHandler(e) {
    e.preventDefault();
   
}
const Button = (props) => {

    return (
        <button onClick={onClickHandler} id="beautifierBtn">Button</button>
    )
} 

export default Button;