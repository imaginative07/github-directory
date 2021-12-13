import React from 'react';
import PropTypes from "prop-types";

// This is class based component structure 
// class UserItems extends Component {  
const UserItems = ({userItem: {avatar_url, login, html_url}}) => {
    
    // Destructing state and objects inside
    //const {avatar_url, login, html_url} = props.userItem;

    return (
        <div className="card text-center">
            <img src={avatar_url} className="round-img" style={{ width: "60px"}} alt={login} />
            <h3>{login}</h3>
            <a href={html_url}>More</a>
        </div>
    )
    
}

UserItems.propTypes = {
    userItem: PropTypes.object.isRequired,
}

export default UserItems;