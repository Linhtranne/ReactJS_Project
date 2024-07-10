/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { fetchUsersApi, addUserApi, toggleLockUserApi } from './userApi';

export interface User {
  id: string;
  name: string;
  email: string;
  isLocked: boolean;
}

interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'failed';
  searchQuery: string;
  currentPage: number;
  totalPages: number;
  sortBy: string;
}

const initialState: UserState = {
  users: [],
  status: 'idle',
  searchQuery: '',
  currentPage: 1,
  totalPages: 1,
  sortBy: 'name',
};

export const fetchUsers:any = createAsyncThunk(
  'users/fetchUsers',
  async ({ page, query, sortBy }: { page: number; query: string; sortBy: string }) => {
    const response = await fetchUsersApi(page, query, sortBy);
    return response;
  }
);

export const addUser:any = createAsyncThunk('users/addUser', async (user: User) => {
  const response = await addUserApi(user);
  return response;
});

export const toggleLockUser:any = createAsyncThunk('users/toggleLockUser', async (userId: string) => {
  const response = await toggleLockUserApi(userId);
  return response;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users = action.payload.users;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(toggleLockUser.fulfilled, (state, action) => {
        const user = state.users.find((user) => user.id === action.payload.id);
        if (user) {
          user.isLocked = action.payload.isLocked;
        }
      });
  },
});

export const { setSearchQuery, setPage, setSortBy } = userSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export default userSlice.reducer;

