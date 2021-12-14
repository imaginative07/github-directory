import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Navbar = props => {

    return (
        <nav className="navbar bg-primary">
            <i className={props.icon}></i>
            <h1>{props.title}</h1>

            <div className="">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </div>
        </nav>
    )
}

 // We are assigning the static prop type for the props in case if user didn't assign on the component
 Navbar.defaultProps = {
    title: "Github Directory",
    icon: "fab fa-github"
};

// We are assigning the data type for the variable
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default Navbar;