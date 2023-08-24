import React from "react";

const UserCard = ({ user }) => {
  const { first_name, last_name, email, avatar } = user;
  return (
    <div className="user-card">
      <img className="avatar" src={avatar} alt={`Avatar of ${first_name}`} />
      <h3 className="user-name">{`${first_name} ${last_name}`}</h3>
      <p className="user-email">Email: {email}</p>
    </div>
  );
};

export default UserCard;
