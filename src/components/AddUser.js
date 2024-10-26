import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', job: 'Developer' },
    { id: 2, name: 'Jane Smith', job: 'Designer' }
  ]);
  
  const [currentUser, setCurrentUser] = useState(null);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleUpdate = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setCurrentUser(null); // รีเซ็ต currentUser หลังจากการอัปเดต
  };

  const handleAdd = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>User List</h1>
      <UserForm onAdd={handleAdd} onUpdate={handleUpdate} currentUser={currentUser} />
      <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
