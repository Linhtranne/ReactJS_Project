import React, { useState, useEffect } from 'react';
import UserProfile from './userProfile';
import EditProfile from './editProfile';
import { User } from '../../../Interface/interface';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      const defaultUser: User = {
        name: 'User',
        email: '',
        phone:'',
        address: ''
      };
      setUser(defaultUser);
      localStorage.setItem('user', JSON.stringify(defaultUser));
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setIsEditing(false);
  };

  return (
    <div className="App">
      {isEditing ? (
        <EditProfile user={user} onSave={handleSave} />
      ) : (
        <UserProfile user={user} onEdit={handleEdit} />
      )}
    </div>
  );
};

export default App;
