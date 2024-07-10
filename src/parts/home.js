import React from 'react';
import Header from "./header";
import Section from "./section";
import Footer from "./footer";
import Nav from "../components/nav";

function Home({ cardData, addToCart }) {
    return (
        <>
            <Nav/>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-9 col-lg-8 col-xl-7">
                        <Header/>
                        <Section/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home;