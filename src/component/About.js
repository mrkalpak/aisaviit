import React from "react";
import "./css/about.css"

const About = () => {
  return (
    <div classNameName='App'>
      
      <section className="about-us">



        <div className="row">
          <div className="about-col">
            <h1>We are the world's largest university.</h1>
            <p className="text-white"><strong>VISION</strong><br />
            
              Excellence in technical education<br />
              <strong>MISSION</strong><br/>
                Make competent engineers with the spirit of professionalism and responsible citizenship
                Impart knowledge and technical skills of the highest standards
                Prepare engineers to respond to the current and future needs of the industry, higher studies as well
                as research
              </p>
              <a href="./" className="hero-btn red-btn">EXPLORE NOW</a>
            
            <div className="about-col">
              <img src="{about}" alt="" />
            </div>
          </div>
        </div>

      </section>


      {/* <!-- ----footer--- --> */}

      <section className="footer">
        <h4>About Us</h4>
        <p>With 3.5 million students matriculated, the Indira Gandhi National Open University (IGNOU) <br/> India is the
          largest university in the world.]
        </p>
        <div className="icons">
          <a href="https://www.facebook.com/viitpu" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/viit_pune" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/viitpuneofficial/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/school/viitpune/" target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <p>Made with <i className="fa-solid fa-heart"></i> by Eshwar Bhore</p>
      </section>
    </div>
  )
}

export default About