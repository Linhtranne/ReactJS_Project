/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/users';

export const fetchUsersApi = async (page: number, query: string, sortBy: string) => {
  const response = await axios.get(`${BASE_URL}/users`, {
    params: { page, query, sortBy },
  });
  return response.data;
};

export const addUserApi = async (user: any) => {
  const response = await axios.post(`${BASE_URL}/users`, user);
  return response.data;
};

export const toggleLockUserApi = async (userId: string) => {
  const response = await axios.patch(`${BASE_URL}/users/${userId}/lock`);
  return response.data;
};
