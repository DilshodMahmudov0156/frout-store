import React from 'react';
import logo from "../images/logo.png";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-3 d-flex align-items-center">
                        <img src={logo} alt="" className="footer-image"/>
                        <h5 className="my-success-color mx-2">
                            ecommerce-fruits.com
                        </h5>
                    </div>
                    <div className="col-md-4 text-end">
                        <div>
                            <p className="text-light">phone: <a href="" className="text-light">+566 656 656 14 35</a>
                            </p>
                            <p className="text-light">email: <a href="" className="text-light">fruits@website.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;