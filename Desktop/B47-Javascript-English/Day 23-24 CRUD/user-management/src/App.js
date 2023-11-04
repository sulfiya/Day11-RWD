import React, { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import './App.css'; 

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
  ]);
  const [selectedUser, setSelectedUser] = useState(null);

  const addUser = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
  };

  const editUser = (editedUser) => {
    setUsers(users.map((user) => (user.id === editedUser.id ? editedUser : user)));
    setSelectedUser(null);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="App">
      <h1>User Management Dashboard</h1>
      <UserList users={users} onEdit={(user) => setSelectedUser(user)} onDelete={deleteUser} />
      <UserForm user={selectedUser} onSubmit={selectedUser ? editUser : addUser} />
    </div>
  );
};

export default App;
