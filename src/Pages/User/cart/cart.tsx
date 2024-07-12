import React from 'react';
import CartItem from './cartItem';
import { Product } from '../../../Interface/interface';

interface CartProps {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  onConfirm: () => void;
}

const Cart: React.FC<CartProps> = ({ cart, setCart, onConfirm }) => {
  const updateQuantity = (id: number, quantity: number) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        <div>
          {cart.map(product => (
            <CartItem
              key={product.id}
              product={product}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={onConfirm}>Confirm Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
