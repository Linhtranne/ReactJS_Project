/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/products';

export const fetchProductsApi = async (page: number, query: string, filterBy: string) => {
  const response = await axios.get(`${BASE_URL}/products`, {
    params: { page, query, filterBy },
  });
  return response.data;
};

export const addProductApi = async (product: any) => {
  const response = await axios.post(`${BASE_URL}/products`, product);
  return response.data;
};

export const updateProductApi = async (product: any) => {
  const response = await axios.put(`${BASE_URL}/products/${product.id}`, product);
  return response.data;
};

export const deleteProductApi = async (productId: string) => {
  const response = await axios.delete(`${BASE_URL}/products/${productId}`);
  return response.data;
};
