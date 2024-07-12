import React from 'react';
import { User } from '../../../Interface/interface';

interface UserProfileProps {
  user: User | null;
  onEdit: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onEdit }) => {
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
};

export default UserProfile;
