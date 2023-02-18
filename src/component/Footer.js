import React from "react";
import "./css/Footer.css";
import pic from "../media/img/aisalg.png";
function Footer() {
  return (
    <>
      <footer className="text-white content">
        
        <div className="container-fluid pt-3 pb-3 mt-3 ">
          <div className="row">
            <div className="col-md-2 mx-auto ">
              <img className="aisa_logo" src={pic} />
            </div>

            <div className="col-md-3 my-4 mx-3 text-center">
               <h4 className="font-weight-bold mb-3 ">AISA</h4> 
              <p className="para"> WE AISA, <br/>
                  Aim to percieve the overall 
              </p>
            </div>
            <div className="col-md-3 my-4 mx-4 text-center">
              <h4 className="font-weight-bold mb-3">MOVE AROUND LINKS</h4>
              <p className="mal">
                <a href="#">HOME</a>
              </p>
              <p className="mal">
                <a href="#">TEAM</a>
              </p>
              <p className="mal">
                <a href="#">EVENT</a>
              </p>{" "}
              <p className="mal">
                <a href="#">ABOUT US</a>
              </p>{" "}
              <p className="mal">
                <a href="#">CONTACT US</a>
              </p>{" "}
             
            </div>

           


            <div className="col-md-3 my-4 mx-3 text-center">
              <h4 className="font-weight-bold mb-3">CONNECT</h4>
              <p className="mal"><i className="fa fa-instagram"></i>     INSTAGRAM </p>
              <p className="mal"><i className="fa fa-linkedin-square"></i>     LINKED-IN</p>
              <p className="mal"><i className="fa fa-facebook"></i>     FACEBOOK</p>
              <p className="mal"><i className="fa fa-regular fa-phone"></i>     PHONE</p>
              <p className="mal"><i class="fa fa fa-home"></i>     OUR DOME (D-313)</p>
              <p></p>
              
              
            </div>

            <div className="footer-copywright text-center py-1">
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
