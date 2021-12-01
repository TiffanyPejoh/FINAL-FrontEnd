import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = () => 
{
    return(
        <>
        <Navigation />
        <div className="container mt-4">
                
                <h1 className="mb-3 ">About Page</h1>
                <h1 className="badge bg-warning text-dark">Made with :</h1>
            
                
                <div className ="d-flex flex-row">
                    <div className="btn btn-outline-primary flex-shrink-0 mt-3 mb-5 mx-5" to="#">HTML</div>
                      <div className="btn btn-outline-primary flex-shrink-0 mt-3 mb-5 mx-5" to="#">React</div>
                       <div className="btn btn-outline-primary flex-shrink-0 mt-3 mb-5 mx-5" to="#">Boodstrap</div>
                </div>
               
        </div>
        <Footer />
        </>
    );
}

export default About;