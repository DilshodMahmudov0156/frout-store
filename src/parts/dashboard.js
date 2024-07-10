import React from 'react';
import logo from "../images/logo.png";
import {Link} from "react-router-dom";
import DashboardNav from "../components/dashboard-nav";

function Dashboard({}) {
    return (
        <div className="dashboard">
            <DashboardNav/>
            <div className="dashboard-container">
                <div className="left-side"></div>
            </div>
        </div>
    );
}

export default Dashboard;
