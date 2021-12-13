import React from "react";
import Spinner from "../layouts/Spinner";
import UserItems from "./UserItem";
import PropTypes from "prop-types";

const Users = (props) => {
  let StylesList = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };

  if (props.loading) {
    return <Spinner />
  } else {
    return (
      <div>
        <div style={StylesList}>
          {props.users.map((user) => (
            <UserItems key={user.id} userItem={user} />
          ))}
        </div>
      </div>
    )
  }
};

Users.propTypes = {
    users:PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Users;
