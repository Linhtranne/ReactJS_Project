import React, { useState } from 'react';
import '../../../assets/css/card.css';
import 'https://kit.fontawesome.com/a81368914c.js';
import { Product } from '../../../Interface/interface';



interface CardProps {
  product: Product;
  onEdit: (id: string, updatedProduct: Product) => void;
  onDelete: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ product, onEdit, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState<Product>(product);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    onEdit(product.id, updatedProduct);
    setEditMode(false);
  };

  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <div className="card">
      <div className="shoeBackground" style={{ height: '475px' }}>
        <img src={product.image} alt="" className="shoe show" color={product.color} />
        <div className="gradients">
          <div className="gradient first" color={product.color}></div>
        </div>
        <h1 className="nike">nike</h1>
        <img src="https://i.postimg.cc/g2T47Ggx/logo.png" alt="" className="logo" />
        <a href="#" className="share"><i className="fas fa-share-alt"></i></a>
      </div>
      <div className="info">
        <div className="shoeName">
          {editMode ? (
            <input
              type="text"
              value={updatedProduct.name}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
            />
          ) : (
            <div>
              <h1 className="big">{product.name}</h1>
              <span className="new">new</span>
            </div>
          )}
          <h3 className="small">Men's running shoes</h3>
        </div>
        <div className="description">
          {editMode ? (
            <textarea
              value={updatedProduct.description}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: e.target.value })}
            />
          ) : (
            <>
              <h3 className="title">Product Info</h3>
              <p className="text">{product.description}</p>
            </>
          )}
        </div>
        <div className="color-container">
          <h3 className="title">Color</h3>
          <div className="colors">
            <span className={`color ${product.color === updatedProduct.color ? 'active' : ''}`} style={{ background: product.color }} />
          </div>
        </div>
        <div className="size-container">
          {editMode ? (
            <input
              type="text"
              value={updatedProduct.size}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, size: e.target.value })}
            />
          ) : (
            <>
              <h3 className="title">Size</h3>
              <div className="sizes">
                <span className="size active">{product.size}</span>
              </div>
            </>
          )}
        </div>
        <div className="buy-price">
          {editMode ? (
            <input
              type="number"
              value={updatedProduct.price}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: parseFloat(e.target.value) })}
            />
          ) : (
            <div className="price">
              <i className="fas fa-dollar-sign"></i>
              <h1>{product.price.toFixed(2)}</h1>
            </div>
          )}
          {editMode ? (
            <div>
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          ) : (
            <div className="buy-actions">
              <a href="#" className="buy"><i className="fas fa-shopping-cart"></i>Add to cart</a>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
