import React, { useState, useEffect } from 'react';

function AgentListComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7239/api/UserFun/byrole/Agent')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Users with Role: Agent</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Agency</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.userName}</td>
              <td>{user.emailId}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.agency}</td>
              <td>{user.gender}</td>
              <td>{user.country}</td>
              <td>{user.status ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AgentListComponent;
