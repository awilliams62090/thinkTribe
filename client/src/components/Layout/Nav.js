import React from "react";
import {Link} from "react-router-dom";
import {NavbarBrand} from "reactstrap"
import "./Layout.css"

const Nav = () => (
    <div className="nav">
        <NavbarBrand><img src="./images/thinkTribe.png" alt="thinkTribe Logo" id="nav-img"/>
        </NavbarBrand>
        <Link className="navLink" to="/">My Home</Link>
        <Link className="navLink" to="/tasks">My Tasks</Link>
        <Link className="navLink" to="/calendar">My Calendar</Link>
        <Link className="navLink" to="/mailbox">My Conversations</Link>

    </div>
);

export default Nav;