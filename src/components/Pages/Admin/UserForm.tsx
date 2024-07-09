import React from 'react';
import { UserFormProps } from '../Interface/interface';
const UserForm: React.FC<UserFormProps> = ({ newUser, setNewUser, addUser }) => {
  return (
    <div className="user-form">
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={e => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={e => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Role"
        value={newUser.role}
        onChange={e => setNewUser({ ...newUser, role: e.target.value })}
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default UserForm;
