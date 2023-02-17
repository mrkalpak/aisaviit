import React from "react";
import "./css/Team.css";
import {
  president,
  core,
  event,
  publicity,
  tech,
  video_Creator,
  content,
  doc_Mag,
  design,
  youtube,
  photography,
  finance,
  faculty,
} from "../data/content";

function Team(props) {
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
              <h1 className="text-center text1">Our Team</h1>{" "}
            </div>{" "}
          </div>{" "}
          {/* end */}
          {/* Cards section */}
          <div className="cards my-4">
            {" "}
            {/* Row for top 1 card */}
            <div className="row">
              <h1 className="text-center text1">Faculty Team</h1>{" "}
              {/* js map function to get card details from content.js */}
              {faculty.map((faculty, i) => (
                //  cards
                <div
                  className="col-lg-4 col-md-6 col-sm-12 me-auto ms-auto card-col card-deck  "
                  key={i}
                >
                  {" "}
                  <div className="card mycard my-4">
                    {" "}
                    <div className="card-body me-auto ms-auto">
                      {" "}
                      <img
                        src={faculty.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle mb-2"
                      />{" "}
                      <h3 className="text2"> {faculty.Name}</h3>
                      <h5>{faculty.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={faculty.LinkedIn}>
                            {" "}
                            <i className="icon fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={"https://www.instagram.com/" + faculty.Insta_ID}
                          >
                            {" "}
                            <i className="icon fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + faculty.Email}>
                            {" "}
                            <i className="icon fa fa-envelope-o"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
            </div>{" "}
            {/* Row for top 1 card */}
            <div className="row ">
              <h1 className="text-center text1">Core Team</h1>{" "}
              {president.map((president, i) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 card-col card-deck mx-auto"
                  key={i}
                >
                  {" "}
                  <div className="card mycard">
                    {" "}
                    <div className="card-body">
                      {" "}
                      <img
                        src={president.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle"
                      />{" "}
                      <h3 className="text2"> {president.Name}</h3>
                      <h5>{president.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={president.LinkedIn}>
                            {" "}
                            <i className="icon fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={
                              "https://www.instagram.com/" + president.Insta_ID
                            }
                          >
                            <i className="icon fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + president.Email}>
                            {" "}
                            <i className="icon fa fa-envelope-o"></i>{" "}
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
                  <div className="card mycard my-4">
                    {" "}
                    <div className="card-body me-auto ms-auto">
                      {" "}
                      <img
                        src={core.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle mb-2"
                      />{" "}
                      <h3 className="text2"> {core.Name}</h3>
                      <h5>{core.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={core.LinkedIn}>
                            {" "}
                            <i className="icon fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={"https://www.instagram.com/" + core.Insta_ID}
                          >
                            {" "}
                            <i className="icon fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + core.Email}>
                            {" "}
                            <i className="icon fa fa-envelope-o"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
            </div>{" "}
            <div className="row">
              <h1 className="text-center text1">Event Team</h1>{" "}
              {/* js map function to get card details from content.js */}
              {event.map((event, i) => (
                //  cards
                <div
                  className="col-lg-4 col-md-6 col-sm-12 me-auto ms-auto card-col card-deck  "
                  key={i}
                >
                  {" "}
                  <div className="card mycard my-4">
                    {" "}
                    <div className="card-body me-auto ms-auto">
                      {" "}
                      <img
                        src={event.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle mb-2"
                      />{" "}
                      <h3 className="text2"> {event.Name}</h3>
                      <h5>{event.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={event.LinkedIn}>
                            {" "}
                            <i className="icon fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={"https://www.instagram.com/" + event.Insta_ID}
                          >
                            {" "}
                            <i className="icon fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + event.Email}>
                            {" "}
                            <i className="icon fa fa-envelope-o"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
            </div>{" "}
            <div className="row">
              <h1 className="text-center text1">Publicity Team</h1>{" "}
              {/* js map function to get card details from content.js */}
              {publicity.map((publicity, i) => (
                //  cards
                <div
                  className="col-lg-4 col-md-6 col-sm-12 me-auto ms-auto card-col card-deck  "
                  key={i}
                >
                  {" "}
                  <div className="card mycard my-4">
                    {" "}
                    <div className="card-body me-auto ms-auto">
                      {" "}
                      <img
                        src={publicity.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle mb-2"
                      />{" "}
                      <h3 className="text2"> {publicity.Name}</h3>
                      <h5>{publicity.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={publicity.LinkedIn}>
                            {" "}
                            <i className="icon fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={
                              "https://www.instagram.com/" + publicity.Insta_ID
                            }
                          >
                            {" "}
                            <i className="icon fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + publicity.Email}>
                            {" "}
                            <i className="icon fa fa-envelope-o"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
            </div>{" "}
            <div className="row">
              <h1 className="text-center text1">Techinal Team</h1>{" "}
              {/* js map function to get card details from content.js */}
              {tech.map((tech, i) => (
                //  cards
                <div
                  className="col-lg-4 col-md-6 col-sm-12 me-auto ms-auto card-col card-deck  "
                  key={i}
                >
                  {" "}
                  <div className="card mycard my-4">
                    {" "}
                    <div className="card-body me-auto ms-auto">
                      {" "}
                      <img
                        src={tech.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle mb-2"
                      />{" "}
                      <h3 className="text2"> {tech.Name}</h3>
                      <h5>{tech.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={tech.LinkedIn}>
                            {" "}
                            <i className="icon fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={"https://www.instagram.com/" + tech.Insta_ID}
                          >
                            {" "}
                            <i className="icon fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + tech.Email}>
                            {" "}
                            <i className="icon fa fa-envelope-o"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
            </div>{" "}
            <div className="row">
              <h1 className="text-center text1">Video Creator Team</h1>{" "}
              {/* js map function to get card details from content.js */}
              {video_Creator.map((video_Creator, i) => (
                //  cards
                <div
                  className="col-lg-4 col-md-6 col-sm-12 me-auto ms-auto card-col card-deck  "
                  key={i}
                >
                  {" "}
                  <div className="card mycard my-4">
                    {" "}
                    <div className="card-body me-auto ms-auto">
                      {" "}
                      <img
                        src={video_Creator.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle mb-2"
                      />{" "}
                      <h3 className="text2"> {video_Creator.Name}</h3>
                      <h5>{video_Creator.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={video_Creator.LinkedIn}>
                            {" "}
                            <i className="icon fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={
                              "https://www.instagram.com/" +
                              video_Creator.Insta_ID
                            }
                          >
                            {" "}
                            <i className="icon fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + video_Creator.Email}>
                            {" "}
                            <i className="icon fa fa-envelope-o"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
            </div>{" "}
            <div className="row">
              <h1 className="text-center text1">Content Team</h1>{" "}
              {/* js map function to get card details from content.js */}
              {content.map((content, i) => (
                //  cards
                <div
                  className="col-lg-4 col-md-6 col-sm-12 me-auto ms-auto card-col card-deck  "
                  key={i}
                >
                  {" "}
                  <div className="card mycard my-4">
                    {" "}
                    <div className="card-body me-auto ms-auto">
                      {" "}
                      <img
                        src={content.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle mb-2"
                      />{" "}
                      <h3 className="text2"> {content.Name}</h3>
                      <h5>{content.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={content.LinkedIn}>
                            {" "}
                            <i className="icon fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={
                              "https://www.instagram.com/" + content.Insta_ID
                            }
                          >
                            {" "}
                            <i className="icon fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + content.Email}>
                            {" "}
                            <i className="icon fa fa-envelope-o"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
            </div>{" "}
            <div className="row">
              <h1 className="text-center text1">Design Team</h1>{" "}
              {/* js map function to get card details from content.js */}
              {design.map((design, i) => (
                //  cards
                <div
                  className="col-lg-4 col-md-6 col-sm-12 me-auto ms-auto card-col card-deck  "
                  key={i}
                >
                  {" "}
                  <div className="card mycard my-4">
                    {" "}
                    <div className="card-body me-auto ms-auto">
                      {" "}
                      <img
                        src={design.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle mb-2"
                      />{" "}
                      <h3 className="text2"> {design.Name}</h3>
                      <h5>{design.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={design.LinkedIn}>
                            {" "}
                            <i className="icon fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={
                              "https://www.instagram.com/" + design.Insta_ID
                            }
                          >
                            {" "}
                            <i className="icon fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + design.Email}>
                            {" "}
                            <i className="icon fa fa-envelope-o"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
            </div>{" "}
            <div className="row">
              <h1 className="text-center text1">
                Documentation and Magazine Team
              </h1>{" "}
              {/* js map function to get card details from content.js */}
              {doc_Mag.map((doc_Mag, i) => (
                //  cards
                <div
                  className="col-lg-4 col-md-6 col-sm-12 me-auto ms-auto card-col card-deck  "
                  key={i}
                >
                  {" "}
                  <div className="card mycard my-4">
                    {" "}
                    <div className="card-body me-auto ms-auto">
                      {" "}
                      <img
                        src={doc_Mag.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle mb-2"
                      />{" "}
                      <h3 className="text2"> {doc_Mag.Name}</h3>
                      <h5>{doc_Mag.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={doc_Mag.LinkedIn}>
                            {" "}
                            <i className="icon fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={
                              "https://www.instagram.com/" + doc_Mag.Insta_ID
                            }
                          >
                            {" "}
                            <i className="icon fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + doc_Mag.Email}>
                            {" "}
                            <i className="icon fa fa-envelope-o"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
            </div>{" "}
            <div className="row">
              <h1 className="text-center text1">Design Team</h1>{" "}
              {/* js map function to get card details from content.js */}
              {design.map((design, i) => (
                //  cards
                <div
                  className="col-lg-4 col-md-6 col-sm-12 me-auto ms-auto card-col card-deck  "
                  key={i}
                >
                  {" "}
                  <div className="card mycard my-4">
                    {" "}
                    <div className="card-body me-auto ms-auto">
                      {" "}
                      <img
                        src={design.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle mb-2"
                      />{" "}
                      <h3 className="text2"> {design.Name}</h3>
                      <h5>{design.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={design.LinkedIn}>
                            {" "}
                            <i className="icon fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={
                              "https://www.instagram.com/" + design.Insta_ID
                            }
                          >
                            {" "}
                            <i className="icon fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + design.Email}>
                            {" "}
                            <i className="icon fa fa-envelope-o"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
            </div>{" "}
            <div className="row">
              <h1 className="text-center text1">Youtube Team</h1>{" "}
              {/* js map function to get card details from content.js */}
              {youtube.map((youtube, i) => (
                //  cards
                <div
                  className="col-lg-4 col-md-6 col-sm-12 me-auto ms-auto card-col card-deck  "
                  key={i}
                >
                  {" "}
                  <div className="card mycard my-4">
                    {" "}
                    <div className="card-body me-auto ms-auto">
                      {" "}
                      <img
                        src={youtube.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle mb-2"
                      />{" "}
                      <h3 className="text2"> {youtube.Name}</h3>
                      <h5>{youtube.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={youtube.LinkedIn}>
                            {" "}
                            <i className="icon fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={
                              "https://www.instagram.com/" + youtube.Insta_ID
                            }
                          >
                            {" "}
                            <i className="icon fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + youtube.Email}>
                            {" "}
                            <i className="icon fa fa-envelope-o"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
            </div>{" "}
            <div className="row">
              <h1 className="text-center text1">Photography Team</h1>{" "}
              {/* js map function to get card details from content.js */}
              {photography.map((photography, i) => (
                //  cards
                <div
                  className="col-lg-4 col-md-6 col-sm-12 me-auto ms-auto card-col card-deck  "
                  key={i}
                >
                  {" "}
                  <div className="card mycard my-4">
                    {" "}
                    <div className="card-body me-auto ms-auto">
                      {" "}
                      <img
                        src={photography.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle mb-2"
                      />{" "}
                      <h3 className="text2"> {photography.Name}</h3>
                      <h5>{photography.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={photography.LinkedIn}>
                            {" "}
                            <i className="icon fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={
                              "https://www.instagram.com/" +
                              photography.Insta_ID
                            }
                          >
                            {" "}
                            <i className="icon fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + photography.Email}>
                            {" "}
                            <i className="icon fa fa-envelope-o"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
            </div>{" "}
            <div className="row">
              <h1 className="text-center text1">Finance Team</h1>{" "}
              {/* js map function to get card details from content.js */}
              {finance.map((finance, i) => (
                //  cards
                <div
                  className="col-lg-4 col-md-6 col-sm-12 me-auto ms-auto card-col card-deck  "
                  key={i}
                >
                  {" "}
                  <div className="card mycard my-4">
                    {" "}
                    <div className="card-body me-auto ms-auto">
                      {" "}
                      <img
                        src={finance.image}
                        alt="img"
                        className="img-fluid team-img rounded-circle mb-2"
                      />{" "}
                      <h3 className="text2"> {finance.Name}</h3>
                      <h5>{finance.Heads}</h5>{" "}
                      <div className="d-flex flex-row justify-content-center">
                        {" "}
                        <div className="p-3">
                          {" "}
                          <a href={finance.LinkedIn}>
                            {" "}
                            <i className="icon fa fa-linkedin-square"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a
                            href={
                              "https://www.instagram.com/" + finance.Insta_ID
                            }
                          >
                            {" "}
                            <i className="icon fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="p-3">
                          {" "}
                          <a href={"mailto:" + finance.Email}>
                            {" "}
                            <i className="icon fa fa-envelope-o"></i>{" "}
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
