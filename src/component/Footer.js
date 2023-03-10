import React from "react";
import "./css/Footer.css";
import pic from "../media/img/aisalg.png";
function Footer() {
  return (
    <>
      <footer className="text-white content">
        
        <div className="container-fluid pt-3 pb-3 mt-3 ">
          <div className="row w-100">
            <div className="col-md-2 mx-auto ">
              <img className="aisa_logo" alt="" src={pic} />
            </div>

            <div className="col-md-3 my-4 mx-3 text-center">
               <h4 className="font-weight-bold mb-3 ">AISA</h4> 
              <p className="para"> WE AISA, <br/>
                  Aim to spread Awareness <br/> and Education about AI and DS
              </p>
            </div>
            <div className="col-md-3 my-4 mx-4 text-center">
              <h4 className="font-weight-bold mb-3">MOVE AROUND LINKS</h4>
              <p className="mal">
                <a className="text-white"  href="./">HOME</a>
              </p>
              <p className="mal">
                <a className="text-white" href="./">TEAM</a>
              </p>
              <p className="mal">
                <a className="text-white" href="./">EVENT</a>
              </p>{" "}
              <p className="mal">
                <a className="text-white" href="./">ABOUT US</a>
              </p>{" "}
              <p className="mal">
                <a className="text-white" href="./">CONTACT US</a>
              </p>{" "}
             
            </div>

           


            <div className="col-md-3 my-4 mx-3 text-center">
              <h4 className="font-weight-bold mb-3">CONNECT</h4>
              <p className="mal"><i className="fa fa-instagram"></i>  <a className="text-white" href="https://www.instagram.com/aisa_viit/">INSTAGRAM</a>   </p>
              <p className="mal"><i className="fa fa-linkedin-square"></i>    <a className="text-white" href="https://www.linkedin.com/company/aisaviit/">LINKED-IN</a> </p>
              <p className="mal"><i className="fa fa-regular fa-whatsapp"></i>     <a className="text-white" href="https://chat.whatsapp.com/H8kCPNdOF5HBPuMUzSCoWR">Whatspp</a></p>
              <p className="mal"><i className="fa fa-regular fa-twitter"></i>     <a className="text-white" href="https://twitter.com/aisa_viit">Twitter</a></p>
              <p className="mal"><i class="fa fa fa-home"></i>     OUR HOME (D-313)</p>
              <p></p>
              
              
            </div>

            <div className="footer-copywright text-center py-1">
              <p>
                &copy; Copyright
                <a className="text-white" href="./"> ARTIFICIAL INTELLEGINCE STUDENTS ASSOCIATION</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
