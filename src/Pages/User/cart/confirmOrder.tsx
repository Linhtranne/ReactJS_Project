import React from 'react';
import { Product } from '../../../Interface/interface';

interface ConfirmOrderProps {
  cart: Product[];
  onBackToCart: () => void;
}

const ConfirmOrder: React.FC<ConfirmOrderProps> = ({ cart, onBackToCart }) => {
  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div>
      <h2>Confirm Order</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} - {product.quantity} x {product.price} VND
          </li>
        ))}
      </ul>
      <p>Total Amount: {totalAmount} VND</p>
      <button onClick={onBackToCart}>Back to Cart</button>
      <button onClick={() => alert('Order Confirmed')}>Confirm Order</button>
    </div>
  );
};

export default ConfirmOrder;
