//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

let countDown = 0
setInterval(()=>{
    const Six = Math.floor(countDown/100000)
    const Five = Math.floor(countDown/10000)
    const Four = Math.floor(countDown/1000)
    const Three = Math.floor(countDown/100)
    const Two = Math.floor(countDown/10)
    const One = Math.floor(countDown/1)
    ReactDOM.render(<Home digitOne = {One} digitTwo = {Two} digitThree = {Three} digitFour = {Four} digitFive = {Five} digitSix = {Six}/>, document.querySelector("#app"));
    countDown++
}, 1000);
    
//render your react application

