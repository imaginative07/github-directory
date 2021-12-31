import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// This is class based component structure 
// class UserItems extends Component {  
const UserItems = ({userItem: {avatar_url, login, html_url}}) => {
    
    // Destructing state and objects inside, this is for class
    //const {avatar_url, login, html_url} = props.userItem;

    return (
        <div className="card text-center">
            <img src={avatar_url} className="round-img" style={{ width: "60px"}} alt={login} />
            <h3>{login}</h3>
            <Link className="btn btn-dark btn-sm" to={`user/${login}`}>More</Link>
        </div>
    )
    
}

UserItems.propTypes = {
    userItem: PropTypes.object.isRequired,
}

export default UserItems;