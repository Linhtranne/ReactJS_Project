/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { fetchProductsApi, addProductApi, updateProductApi, deleteProductApi } from './productsApi';
import {Product} from "../../Interface/interface"

interface ProductState {
  products: Product[];
  status: 'idle' | 'loading' | 'failed';
  searchQuery: string;
  currentPage: number;
  totalPages: number;
  filterBy: string;
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
  searchQuery: '',
  currentPage: 1,
  totalPages: 1,
  filterBy: '',
};

export const fetchProducts:any = createAsyncThunk(
  'products/fetchProducts',
  async ({ page, query, filterBy }: { page: number; query: string; filterBy: string }) => {
    const response = await fetchProductsApi(page, query, filterBy);
    return response;
  }
);

export const addProduct:any = createAsyncThunk('products/addProduct', async (product: Product) => {
  const response = await addProductApi(product);
  return response;
});

export const updateProduct:any = createAsyncThunk('products/updateProduct', async (product: Product) => {
  const response = await updateProductApi(product);
  return response;
});

export const deleteProduct:any = createAsyncThunk('products/deleteProduct', async (productId: string) => {
  const response = await deleteProductApi(productId);
  return response;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilterBy: (state, action) => {
      state.filterBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((product) => product.id !== action.payload);
      });
  },
});

export const { setSearchQuery, setPage, setFilterBy } = productSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productSlice.reducer;
