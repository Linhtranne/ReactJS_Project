import { useUserStore } from './store';

export const useUserHandlers = () => {
  const {
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
  } = useUserStore();

  const addUser = () => {
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id, locked: false }]);
    setNewUser({ name: '', email: '', role: '' });
  };

  const toggleLockUser = (userId: number) => {
    setUsers(
      users.map(user => (user.id === userId ? { ...user, locked: !user.locked } : user))
    );
  };

  const searchUsers = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const sortUsers = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setUsers([...users].sort((a, b) => (sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))));
  };

  return {
    addUser,
    toggleLockUser,
    searchUsers,
    sortUsers,
  };
};
