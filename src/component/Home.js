import React from "react";
import './css/home.css'
import aisalogo from "../media/img/aisalogo.png"
const Home = () => {
    return (
        <div>
            <div className="container"  >

                <div className="row h-100">

                    <div className="col bor">
                        <img src={aisalogo} className="aisalogo " />
                    </div>
                    <div className="col">
                        
                            <h1 className="text-white text">

                            Artificial  <span className="grey-text"> Intelligence</span> <br />
                           Student’s Association
                            </h1>
                            <h1 className="text-white subtitle">
                            ‘ Unleash the <span className="grey-text">Power of Data</span> ‘

                            </h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home