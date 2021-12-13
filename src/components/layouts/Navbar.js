import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {

    return (
        <nav className="navbar bg-primary">
            <h1>{props.title}</h1>
            <i className={props.icon}></i>
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