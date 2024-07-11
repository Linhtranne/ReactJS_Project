/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';

const API_URL = 'http://localhost:8000/account';

interface LoginResponse {
  success: boolean;
  message: string;
  data?: any;
}

interface SignUpResponse {
  success: boolean;
  message: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: 'Login failed. Please try again.',
    };
  }
};

export const signUp = async (name: string, email: string, password: string): Promise<SignUpResponse> => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { name, email, password });
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: 'Sign up failed. Please try again.',
    };
  }
};
