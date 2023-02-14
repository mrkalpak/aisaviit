import React from "react";
import './css/home.css'
import "./css/Event.css";
import data from "../data/event";

const Event = () => {
  return data.map((element) => {
    return (
      <div className="App">
        <hr />
        <h1 className="text-center eventName">{element.title}</h1>
        <div className="event">
          <div className="card mb-3 image">
            <img src={element.image} className="card-img-top" alt="..." />
            <div className="card-body detail">
              <h5 className="card-title title">
                <h1>{element.title}</h1>
              </h5>
              <p className="card-text description">
                {element.description} <a href={element.href}>learn more...</a>
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  });
};

  export default Event
