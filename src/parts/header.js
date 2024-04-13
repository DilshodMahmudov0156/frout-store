import React from 'react';
import {Link} from "react-router-dom";

function Header({}) {
    return (
        <header>
            <div className="masc">
                <h1 className="header-content">
                    Dou you want to eat fresh fruits?
                    <br/>
                    <span>
                        Let's eat with us!
                    </span>
                    <br/>
                    <Link to="cart" className="header-btn">start shopping</Link>
                </h1>
            </div>
        </header>
    );
}

export default Header;