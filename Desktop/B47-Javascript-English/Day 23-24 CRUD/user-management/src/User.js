import React from 'react';

const User = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={() => onEdit(user)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default User;
