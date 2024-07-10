/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/categories';

export const fetchCategoriesApi = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
};

export const addCategoryApi = async (category: any) => {
  const response = await axios.post(`${BASE_URL}/categories`, category);
  return response.data;
};

export const updateCategoryApi = async (category: any) => {
  const response = await axios.put(`${BASE_URL}/categories/${category.id}`, category);
  return response.data;
};

export const deleteCategoryApi = async (categoryId: string) => {
  const response = await axios.delete(`${BASE_URL}/categories/${categoryId}`);
  return response.data;
};
