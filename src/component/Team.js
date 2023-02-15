import React from "react";
import "./css/Team.css";
import lists from "./content";

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
      image: "images/img1.webp",
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
              <h1>Our Team</h1>{" "}
            </div>{" "}
          </div>{" "}
          {/* end */}
          {/* Cards section */}
          <div className="cards ">
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
                        className="img-fluid rounded-circle"
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
              {lists.map((list, i) => (
                //  cards
                <div
                  className="col-lg-4 col-md-6 col-sm-12 card-col card-deck mx-auto "
                  key={i}
                >
                  {" "}
                  <div className="card  mt-4">
                    {" "}
                    <div className="card-body">
                      {" "}
                      <img
                        src={list.image}
                        alt="img"
                        className="img-fluid rounded-circle mb-2"
                      />{" "}
                      <h3> {list.Name}</h3>
                      <h5>{list.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={list.LinkedIn}>
                            {" "}
                            <i className="fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={"https://www.instagram.com/" + list.Insta_ID}
                          >
                            {" "}
                            <i className="fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + list.Email}>
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
