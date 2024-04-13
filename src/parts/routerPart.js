import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Nav from "../components/nav";
import SearchPage from "./search-page";

function RouterPart({ imgs }) {
    return (
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" exact element={<Home imgs={imgs} />}/>
                <Route path="/search" element={<SearchPage />}/>
            </Routes>
        </Router>
    );
}

export default RouterPart;