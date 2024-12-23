import React from 'react';

const Cart = ({ cart, handlePurchase }) => {
  return (
    <div>
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
          <button onClick={handlePurchase}>Купить</button>
        </div>
      )}
    </div>
  );
};

export default Cart;