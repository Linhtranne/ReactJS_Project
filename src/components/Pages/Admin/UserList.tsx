import React from 'react';
import { UserListProps } from '../Interface/interface';

const UserList: React.FC<UserListProps> = ({ users, toggleLockUser }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-item">
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
          <button onClick={() => toggleLockUser(user.id)}>
            {user.locked ? 'Unlock' : 'Lock'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;