import {Switch, NavLink} from "react-router-dom"
import React from "react";

const Header = () => (
    <nav className="navbar navbar-expand bg-primary navbar-dark">
        <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/projects">Projects</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
)

export default Header;