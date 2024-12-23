import React from 'react';

const Home = ({ addToCart }) => {
  const featuredProducts = [
    { id: 1, name: 'Медведь', price: 20 },
    { id: 2, name: 'Кот', price: 15 },
    { id: 3, name: 'Собака', price: 25 },
  ];

  return (
    <div>
      <h1>Предложения недели</h1>
      <div className="product-list">
        {featuredProducts.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Цена: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Добавить в корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;