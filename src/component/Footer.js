import React from "react";
import "./Footer.css";
import pic from "./images/aisalogo.png";
function Footer() {
  return (
    <>
      <footer className="text-white">
        <div className="row py-3 d-flex align-items-center bg-primary">
          <div className="col-md-12 mt-2 text-center">
            <h4 className="text">
              ARTIFICIAL INTELLIGENCE STUDENTS ASSOCIATION
            </h4>
          </div>
        </div>
        <div className="container-fluid pt-5 pb-5 ">
          <div className="row">
            <div className="col-md-2 mx-auto image">
              <img src={pic} />
            </div>

            <div className="col-md-3 my-4 mx-3 text-center">
               <h4 className="font-weight-bold mb-3 ">AISA</h4> 
              <p className="para"> WE AISA, <br/>
                  Aim to percieve the overall 
              </p>
            </div>
            <div className="col-md-3 my-4 mx-4 text-center">
              <h4 className="font-weight-bold mb-3">MOVE AROUND LINKS</h4>
              <p>
                <a href="#">HOME</a>
              </p>
              <p>
                <a href="#">TEAM</a>
              </p>
              <p>
                <a href="#">EVENT</a>
              </p>{" "}
              <p>
                <a href="#">ABOUT US</a>
              </p>{" "}
              <p>
                <a href="#">CONTACT US</a>
              </p>{" "}
             
            </div>

           


            <div className="col-md-3 my-4 mx-3 text-center">
              <h4 className="font-weight-bold mb-3">CONNECT</h4>
              <p><i className="fa fa-instagram"></i>     INSTAGRAM </p>
              <p><i className="fa fa-linkedin-square"></i>     LINKED-IN</p>
              <p><i className="fa fa-facebook"></i>     FACEBOOK</p>
              <p><i className="fa fa-regular fa-phone"></i>     PHONE</p>
              <p><i class="fa fa fa-home"></i>     OUR DOME (D-313)</p>
              <p></p>
              
              
            </div>

            <div className="footer-copywright text-center py-3">
              <p>
                &copy; Copyright
                <a href="#"> ARTIFICIAL INTELLEGINCE STUDENTS ASSOCIATION</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
