import React from 'react';
import Header from "./header";
import Section from "./section";
import Footer from "./footer";

function Home({ imgs }) {
    return (
        <>
            <Header imgs={imgs} />
            <Section />
            <Footer />
        </>
    );
}

export default Home;