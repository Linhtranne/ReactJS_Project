/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { fetchCategoriesApi, addCategoryApi, updateCategoryApi, deleteCategoryApi } from './categoriesApi';
import  {Category} from '../../Interface/interface'

interface CategoryState {
  categories: Category[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CategoryState = {
  categories: [],
  status: 'idle',
};

export const fetchCategories:any = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await fetchCategoriesApi();
  return response;
});

export const addCategory:any = createAsyncThunk('categories/addCategory', async (category: Category) => {
  const response = await addCategoryApi(category);
  return response;
});

export const updateCategory:any = createAsyncThunk('categories/updateCategory', async (category: Category) => {
  const response = await updateCategoryApi(category);
  return response;
});

export const deleteCategory:any = createAsyncThunk('categories/deleteCategory', async (categoryId: string) => {
  const response = await deleteCategoryApi(categoryId);
  return response;
});

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex((category) => category.id === action.payload.id);
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter((category) => category.id !== action.payload);
      });
  },
});

export const selectCategories = (state: RootState) => state.categories;

export default categorySlice.reducer;
