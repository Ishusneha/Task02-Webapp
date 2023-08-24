import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setIsLoading(false);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <nav style={{ backgroundColor: '#333', color: 'white', padding: '1rem' }}>
        <div style={{ fontSize: '1.5rem' }}>Your Brand Name</div>
        <button
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ffa500',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
          onClick={getUsers}
        >
          Get Users
        </button>
      </nav>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {isLoading ? (
          <div style={{ fontSize: '1.5rem', height: '100vh', display: 'flex', alignItems: 'center' }}>
            Loading...
          </div>
        ) : (
          users.map(user => (
            <div
              key={user.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '1rem',
                margin: '1rem',
                textAlign: 'center',
                backgroundColor: 'white'
              }}
            >
              <img
                src={user.avatar}
                alt={user.first_name}
                style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '0.5rem' }}
              />
              <h3>
                {user.first_name} {user.last_name}
              </h3>
              <p>{user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
