import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, toggleLockUser, setSearchQuery, setPage, setSortBy, selectUsers } from '../../../features/users/usersSlice';

const UserManagement: React.FC = () => {
  const dispatch = useDispatch();
  const { users, status, searchQuery, currentPage, totalPages, sortBy } = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, query: searchQuery, sortBy }));
  }, [dispatch, currentPage, searchQuery, sortBy]);

  const handleAddUser = () => {
    const newUser = { id: '3', name: 'New User', email: 'newuser@example.com', isLocked: false };
    dispatch(addUser(newUser));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div>
      <h1>User Management</h1>
      <button onClick={handleAddUser}>Add User</button>
      <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search users..." />
      <select value={sortBy} onChange={handleSort}>
        <option value="name">Name</option>
        <option value="email">Email</option>
      </select>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Failed to load users</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.isLocked ? 'Locked' : 'Active'}
            <button onClick={() => dispatch(toggleLockUser(user.id))}>
              {user.isLocked ? 'Unlock' : 'Lock'}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => dispatch(setPage(currentPage - 1))} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => dispatch(setPage(currentPage + 1))} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UserManagement;
