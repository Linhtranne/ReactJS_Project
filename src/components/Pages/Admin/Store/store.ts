import { useState } from 'react';

export const useUserStore = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

  return {
    users,
    setUsers,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    sortOrder,
    setSortOrder,
    newUser,
    setNewUser,
  };
};

const initialUsers = [
  { id: 1, name: 'Linh', email: 'linhtranne@gmail.com', role: 'admin', locked: false },
  { id: 2, name: 'Dũng', email: 'dung@gmail.com', role: 'user', locked: false },
];
