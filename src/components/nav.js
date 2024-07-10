import React, {useEffect, useState} from 'react';
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import {useCart} from "react-use-cart";

function Nav() {

    const [cartLength, setCartLength] = useState(0)

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();
    useEffect(() => {
        setCartLength(totalUniqueItems);
    }, [items]);

    return (
        <nav>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-9 col-lg-8 col-xl-7 nav-container">
                        <img src={logo} alt="" className="logo"/>
                        <ul className="nav-ul">
                            <Link to="/cart" className="cart-btn">
                                <i className="bi bi-basket"></i>
                                {
                                    cartLength?
                                        <div className="my-badge">
                                            {cartLength}
                                        </div>: null
                                }
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;