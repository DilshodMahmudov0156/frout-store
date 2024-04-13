import React from 'react';
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div className="container nav-container">
                <img src={logo} alt="" className="logo"/>
                <ul className="nav-ul">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/products" className="nav-link">Products</Link>
                    <Link to="/about" className="nav-link">About Us</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/search" className="cart-btn"><i className="bi bi-search"></i></Link>
                    <Link to="/cart" className="cart-btn"><i className="bi bi-basket"></i></Link>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;