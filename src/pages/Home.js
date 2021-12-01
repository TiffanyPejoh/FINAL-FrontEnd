import React from "react";
import Footer from "../components/Footer";
import Games from "../components/Games";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Home = () => {
    return(
        <>
        <Navigation />
         <Header />
         <Games />
         <Footer />
        </>
    );
}

export default Home;