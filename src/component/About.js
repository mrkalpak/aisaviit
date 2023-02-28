import React from "react";
// import "./css/about.css"
import logo from "../media/img/aisalogo.png" 

const About = () => {
    return (
        <div>
            <div className="text-center">
            <h1 className="text-center">About Us</h1>
                <img src={logo} className="w-25" alt=""/>
                <br/>
                <h3>ARTIFICIAL INTELLEGINCE STUDENTS ASSOCIATION</h3>
                <div className="h5">
                AISA is an association of students forging an awareness of the newest AI technologies and concepts. <br/> We aim to lead the foundation of a perspective that broadens the thought of AI and humans walking hand-in-hand.
                </div>
            </div>
        </div>
    );
};

export default About;
