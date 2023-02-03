import React from "react";
import {
    BrowserRouter as Router,
    Link, 
    Routes,Route, Navigate
} from "react-router-dom";
import About from "./About";
import Contactus from "./Contactus";
import Event from "./Event";
import Home from "./Home"
import Team from "./Team";



const Navbar = () => {

    return (

            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" as={Link} to={"/"}>Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" as={Link} to={"/"}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" as={Link} to={"/event"}>Event</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" as={Link} to={"/team"}>Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" as={Link} to={"/contactus"}>Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" as={Link} to={"/about"}>About Us</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/event" element={<Event />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/contactus" element={<Contactus />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
     
                
            </div>
            </div>
          
        

    );

}
export default Navbar