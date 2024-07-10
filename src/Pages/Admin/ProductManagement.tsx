/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct, updateProduct, deleteProduct, setSearchQuery, setPage, setFilterBy, selectProducts } from '../../../features/products/productsSlice';

const ProductManagement: React.FC = () => {
  const dispatch = useDispatch();
  const { products, status, searchQuery, currentPage, totalPages, filterBy } = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage, query: searchQuery, filterBy }));
  }, [dispatch, currentPage, searchQuery, filterBy]);

  const handleAddProduct = () => {
    const newProduct = { id: '3', name: 'New Product', category: 'Category 1', price: 100, description: 'Description' };
    dispatch(addProduct(newProduct));
  };

  const handleUpdateProduct = (id: string) => {
    const updatedProduct = { id, name: 'Updated Product', category: 'Category 1', price: 200, description: 'Updated Description' };
    dispatch(updateProduct(updatedProduct));
  };

  const handleDeleteProduct = (id: string) => {
    dispatch(deleteProduct(id));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterBy(e.target.value));
  };

  return (
    <div>
      <h1>Product Management</h1>
      <button onClick={handleAddProduct}>Add Product</button>
      <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search products..." />
      <select value={filterBy} onChange={handleFilter}>
        <option value="">All Categories</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
      </select>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Failed to load products</p>}
      <ul>
        {products.map((product:any) => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price}
            <button onClick={() => handleUpdateProduct(product.id)}>Update</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
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

export default ProductManagement;

