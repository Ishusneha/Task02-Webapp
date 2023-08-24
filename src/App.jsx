import React, { useState } from "react";
import Navbar from "./Navbar";
import UserCard from "./UserCard";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const jsonResponse = await response.json();
      setUsers(jsonResponse.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar isLoading={isLoading} loadUsers={loadUsers} />
      <div className="user-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      {isLoading && <div className="loader">Loading...</div>}
    </div>
  );
};

export default App;
