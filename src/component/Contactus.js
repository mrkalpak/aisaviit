import React from "react";
import { useState } from "react";
import "./css/contactUs.css";
import phImg from "../media/img/telephone.svg";

const Contactus = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    });
    return (
        <div className="App">
            <h1 className="text-center">Contact Us</h1>
            <form className="contactUsForm me-auto ms-auto">
                <div className="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Please Enter Your Name"
                        onChange={(e) => {
                            setData({ ...data, name: e.target.value });
                        }}
                    ></input>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Please Enter your Email"
                        onChange={(e) => {
                            setData({ ...data, email: e.target.value });
                        }}
                    ></input>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Enter Your Message"
                        rows="3"
                        onChange={(e) => {
                            setData({ ...data, message: e.target.value });
                        }}
                    ></textarea>
                </div>
                <button className="btn">Submit</button>
            </form>
            <div className="phNumbers  me-auto ms-auto">
                <div className="phone">
                    <img src={phImg}></img>
                    <a href="tel:+91 7758983297">
                        <div className="phNo">+91 7758983297</div>
                    </a>
                    <div className="name"> - Jayendra Borse (President)</div>
                </div>
                {/* <div className="phone">
                    <img src={phImg}></img>
                    <a href="tel:+91 9234 567 876">
                        <div className="phNo">+91 9234 567 876</div>
                    </a>
                    <div className="name"> - ABC XYZ</div>
                </div> */}
            </div>
        </div>
    );
};

export default Contactus;
