import React from "react";
import "./introduction.css";
import CoderImage from '../assets/coder.png';
export default function introduction(props){

    return (

        <div className={`section bg-${props.mode} row`}>
            <div className="col">
                <h1 className={`${props.mode} intro typewriter-text`}>it's me, Saurabh Nagre</h1>
                <p className={`${props.mode} para`}>-Programming enthusiast, Software Developer <br></br>
                    I have experience in building applications in modern technologies. 
                    I am a problem solver, i use my problem solving to build effective and rapid fast applications.
                    In leasuire time, I enjoy outing, learning new technologies, Playing cricket and video games. 
                </p>
            </div>
            <div className="col imgbg">
                    <img className="bigimg" src={CoderImage} alt="CoderImage"/>
            </div>
        </div>
    );
}