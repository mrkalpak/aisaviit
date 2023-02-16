import React from "react";
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";
import About from "./About";
import Contactus from "./Contactus";
import Event from "./Event";
import Home from "./Home";
import Team from "./Team";
import "./css/navbar.css";
import aisaLogo from "../media/img/aisalogo.png";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-trasperent navbar-light navbarText">
                <div className="container-fluid">
                    <div className="header">
                        <a className="navbar-brand ms-5" as={Link} to={"/"}>
                            <img src={aisaLogo} className="navbar-logo" />
                        </a>
                        <button className="navbar-toggler h-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/event" className="nav-link active">
                                    Event{" "}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/team">
                                    Team
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contactus">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contactus" element={<Contactus />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </div>
    );
};
export default Navbar;
