import { core, Guest } from "../data/content";
import img from "../media/img/aisalogo.png";
import img1 from "../media/img/aisalogo.png";
import "../component/css/landing.css";
function landing() {
  return (
    <div>
      <div className="sponsor">
   

              <img className="d-block me-auto ms-auto w-25 p-5" src={img} alt="" />

            <h1 className="text-center">Presents</h1>
              <h1 className="text-center text1">DATA SCIENCE SYMPOSIUM</h1>
      </div>
      <div className="DSS my-5">
        <h1 className="text-center  text1">What is DSS ?</h1>
        <div className="dss-text mt-5">

          <h5 className="text-justify">
            &nbsp; &nbsp; &nbsp; &nbsp; AiSA VIIT brings to you Data Science Symposium 2023 – DSS ‘23, a 2 Day Event presenting an extensive event on the “AI Revolution”. The AI revolution is still in its early stages, and its full potential is yet to be realized. However, the AI revolution also raises concerns about the impact of AI on society, including job displacement, ethical concerns, and privacy issues. 🔏💼 <br/> <br/>

            &nbsp; &nbsp; &nbsp; &nbsp;It will be filled with talks by influential people based in this field, fun events, and activities that’ll make learning fun. So do consider registering as early bird tickets 🎟 go out for 69/- only, which of only a very few will be sold. ⏳


          </h5>
        </div>
      </div>
      <div className="fees mb-5">


        <h1 className="text-center">Fees</h1>

        <div className="price h1 ">
          <div className="style-1 w-50  ms-auto me-auto row ">
            <div className="del col w-25 ms-5 me-0 col-md-6" >
              <span className="amount">₹89</span>
            </div>
            <div className="ins col ms-0  col-md-6">
              <span className="amount">₹69</span>
              <sup className="h5">(early bird offer)</sup>
            </div>



          </div>
        </div>


      </div>
    <div className="res_btn text-center ms-auto me-auto">
    <a href="https://learner.vierp.in/choose_event_insider">
    <button type="button"  className="btn btn-outline-primary btn-lg btn-width">Register Now !!</button>

    </a>
    </div>

      {/* <h1 className="text-center text1 mt-5">Fun Game</h1>
      <div className="dss-text MajorAttraction">
        <h5 className="text-justify">
          &nbsp; &nbsp; &nbsp; &nbsp;DSS Info : Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse
          perspiciatis ducimus aperiam voluptatum libero natus numquam
          inventore, accusantium odio consectetur quis consequuntur suscipit,
          corporis, commodi hic adipisci excepturi consequatur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse
          perspiciatis ducimus aperiam voluptatum libero natus numquam
          inventore, accusantium odio consectetur quis consequuntur suscipit,
          corporis, commodi hic adipisci excepturi consequatur!
        </h5>
      </div> */}

      <div className="container text-center my-5">
        <div className="cards my-4">
          <div className="row ">
            <h1 className="text-center text1">Our Guest of Honour</h1>{" "}
            {Guest.map((Guest, i) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 card-col card-deck mx-auto my-3"
                key={i}
              >
                {" "}
                <div className="card mycard">
                  {" "}
                  <div className="card-body">
                    {" "}
                    <img
                      src={Guest.image}
                      alt="img"
                      className="img-fluid team-img rounded-circle"
                    />{" "}
                    <h3 className="text2"> {Guest.Name}</h3>
                    <h5>{Guest.Heads}</h5>{" "}
                    <div className="d-flex flex-row justify-content-center">
                      {" "}
                      <div className="p-3">
                        {" "}
                        <a href={Guest.LinkedIn}>
                          {" "}
                          <i className="icon fa fa-linkedin-square"></i>{" "}
                        </a>{" "}
                      </div>{" "}
                      <div className="p-3">
                        {" "}
                        <a href={"https://www.instagram.com/" + Guest.Insta_ID}>
                          <i className="icon fa fa-instagram"></i>{" "}
                        </a>{" "}
                      </div>{" "}
                      <div className="p-3">
                        {" "}
                        <a href={"mailto:" + Guest.Email}>
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
        </div>
      </div>
      <div className="container-fluid">
        <h1 className="text-center text1">Sponsors</h1>{" "}

        <div
          id="carouselExampleControls"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >

          <div className="carousel-inner " >
            <div className="carousel-item  active" >
              <div className="card-wrapper d-flex">
                <div className="card c1">
                  <div className="image-wrapper">
                    <img src={img} className="d-block w-100 " alt="..." />
                  </div>
                </div>
                <div className="card c1">
                  <div className="image-wrapper">
                    <img src={img} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <div className="card c1">
                  <div className="image-wrapper">
                    <img src={img} className="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item  " >
              <div className="card-wrapper d-flex">
                <div className="card c1">
                  <div className="image-wrapper">
                    <img src={img1} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <div className="card c1">
                  <div className="image-wrapper">
                    <img src={img1} className="d-block " alt="..." />
                  </div>
                </div>
                <div className="card c1">
                  <div className="image-wrapper">
                    <img src={img1} className="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default landing;
