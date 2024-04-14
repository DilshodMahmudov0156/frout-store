import React from 'react';
import Header from "./header";
import Section from "./section";
import Footer from "./footer";

function Home({ cardData }) {
    return (
        <>
            <Header/>
            <Section cardData={cardData}/>
            <Footer />
        </>
    );
}

export default Home;