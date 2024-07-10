import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Dashboard from "./dashboard";
import Nav from "../components/nav";
import Cart from "./cart";

function RouterPart() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>
    );
}

export default RouterPart;