import React from 'react';
import { Product } from '../../../Interface/interface';

interface CartItemProps {
  product: Product;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, updateQuantity, removeItem }) => {
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(event.target.value, 10);
    if (!isNaN(quantity)) {
      updateQuantity(product.id, quantity);
    }
  };

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.price} VND</p>
        <input
          type="number"
          value={product.quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <button onClick={() => removeItem(product.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
