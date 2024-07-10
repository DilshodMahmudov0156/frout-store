import React from 'react';
import {Link} from "react-router-dom";

function DashboardNav(props) {
    return (
        <nav>
            <div className="dashboard-nav-container">
                <div className="d-flex align-items-center">
                    <div className="profile-icon">
                        <i className="bi bi-person-circle"></i>
                    </div>
                    <h5 className="mx-2 mt-1">Dashboard</h5>
                </div>
                <ul className="nav-ul">
                    <Link to="/" className="dashboard-link">Home</Link>
                </ul>
            </div>
        </nav>
    );
}

export default DashboardNav;
