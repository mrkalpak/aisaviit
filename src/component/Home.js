import React from "react";
import "./css/home.css";
import aisalogo from "../media/img/aisalogo.png";
import dv from "../media/img/Logo_18.jpeg";
import dss22 from "../media/img/dss2022.png"
import { Link, Routes, Route, Navigate } from "react-router-dom";

import dss from "../media/img/dss.png"
const Home = () => {
    return (
        <div>
            <div className="container_home container">
                <div className="row h-100 heroSection">
                    <div className="col bor">
                        <img src={aisalogo} alt="" className="aisalogo " />
                    </div>
                    <div className="col me-auto ms-auto">
                        <h1 className="text-black text">
                            Artificial <span className="grey-text"> Intelligence</span> <br />
                            Student’s Association
                        </h1>
                        <h1 className="text-black subtitle">
                            ‘ Unleash the <span className="grey-text">Power of Data</span> ‘
                        </h1>
                    </div>
                </div>
            </div>

            {/* coursole which contain letest updates about upcoming events */}
            <div className="pb-5">
                <div id="indicators" className="carousel slide me-auto ms-auto homeslider " data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#indicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#indicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#indicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner" data-bs-interval="1000">
                        <div className="carousel-item active">
                        <Link className="nav-link active" to="/dss">
                            <img src={dss} alt=""  className="d-block w-100" />
                            </Link>
                        </div>
                        <div className="carousel-item ">
                            <img src={dv} alt="" className="d-block w-100" />
                        </div>
                       
                        <div className="carousel-item">
                            <img src={dss22} alt="" className="d-block w-100" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#indicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#indicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
