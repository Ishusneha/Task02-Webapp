import React from "react";

const Navbar = ({ isLoading, loadUsers }) => {
  return (
    <nav className="navbar">
      <span className="brand">Users</span>
      <button className="get-users-button" onClick={loadUsers} disabled={isLoading}>
        {isLoading ? "Loading..." : "Get Users"}
      </button>
    </nav>
  );
};

export default Navbar;
