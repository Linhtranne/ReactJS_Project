import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, addCategory, updateCategory, deleteCategory, selectCategories } from '../../../features/categories/categoriesSlice';

const FinanceManagement: React.FC = () => {
  const dispatch = useDispatch();
  const { categories, status } = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleAddCategory = () => {
    const newCategory = { id: '3', name: 'New Category' };
    dispatch(addCategory(newCategory));
  };

  const handleUpdateCategory = (id: string) => {
    const updatedCategory = { id, name: 'Updated Category' };
    dispatch(updateCategory(updatedCategory));
  };

  const handleDeleteCategory = (id: string) => {
    dispatch(deleteCategory(id));
  };

  return (
    <div>
      <h1>Category Management</h1>
      <button onClick={handleAddCategory}>Add Category</button>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Failed to load categories</p>}
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => handleUpdateCategory(category.id)}>Update</button>
            <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinanceManagement;
