import React from "react";
import "./css/Team.css";
import {core} from "../data/content";
import img1 from "./images/img1.png"

function Team(props) {
  // President js Obj
  const presidents = [
    {
      Heads: "President",
      Name: "Jayendra Borse",
      Contact_no: "7758983297",
      Year: "TY",
      Division: "B",
      Email: "jayendra.22010288@viit.ac.in",
      Insta_ID: "jayborse04",
      LinkedIn: "https://www.linkedin.com/in/jayendraborse04/",
      image: img1,
    },
  ];
  return (
    <div>
      {" "}
      {/* Section for creating cards */}
      <section>
        {" "}
        <div className="container text-center">
          {" "}
          {/* row for title */}
          <div className="row  ">
            {" "}
            <div className="col ">
              {" "}
              <h1 className="text-center">Our Team</h1>{" "}
              <h1 className="text-center">Core Team</h1>{" "}
            </div>{" "}
          </div>{" "}
          {/* end */}
          {/* Cards section */}
          <div className="cards my-4">
            {" "}
            {/* Row for top 1 card */}
            <div className="row ">
              {presidents.map((president, i) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 card-col card-deck mx-auto"
                  key={i}
                >
                  {" "}
                  <div className="card">
                    {" "}
                    <div className="card-body">
                      {" "}
                      <img
                        src={president.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle"
                      />{" "}
                      <h3> {president.Name}</h3>
                      <h5>{president.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={president.LinkedIn}>
                            {" "}
                            <i className="fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={
                              "https://www.instagram.com/" + president.Insta_ID
                            }
                          >
                            <i className="fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + president.Email}>
                            {" "}
                            <i className="fa fa-envelope-o"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
            </div>
            {/* end */}
            {/* Row for mapping the other cards */}
            <div className="row">
              {" "}
              {/* js map function to get card details from content.js */}
              {core.map((core, i) => (
                //  cards
                <div
                  className="col-lg-4 col-md-6 col-sm-12 me-auto ms-auto card-col card-deck  "
                  key={i}
                >
                  {" "}
                  <div className="card  my-4">
                    {" "}
                    <div className="card-body me-auto ms-auto">
                      {" "}
                      <img
                        src={core.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle mb-2"
                      />{" "}
                      <h3> {core.Name}</h3>
                      <h5>{core.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={core.LinkedIn}>
                            {" "}
                            <i className="fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={"https://www.instagram.com/" + core.Insta_ID}
                          >
                            {" "}
                            <i className="fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + core.Email}>
                            {" "}
                            <i className="fa fa-envelope-o"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}

export default Team;
