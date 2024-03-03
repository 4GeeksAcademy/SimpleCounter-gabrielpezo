import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		<div className="text-center d-flex justify-content-center text-white fs-1">
			<div className = "envelope d-flex justify-content-center w-75 bg-black p-3">
                <div className = "Clock"><FontAwesomeIcon icon= {faClock}/></div>
                <div className = "SixthNumber bg-dark m-3">{props.digitSix % 10}</div>
                <div className = "FifthNumber bg-dark m-3">{props.digitFive % 10}</div>
                <div className = "FourthNumber bg-dark m-3">{props.digitFour % 10}</div>
                <div className = "ThirdNumber bg-dark m-3">{props.digitThree % 10}</div>
                <div className = "SecondNumber bg-dark m-3">{props.digitTwo % 10}</div>
                <div className = "FirstNumber bg-dark m-3">{props.digitOne % 10}</div>
            </div>
		</div>
	);
};

export default Home;