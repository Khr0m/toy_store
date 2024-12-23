import React from 'react';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Медведь', price: 20 },
    { id: 2, name: 'Кот', price: 15 },
    { id: 3, name: 'Собака', price: 25 },
    { id: 4, name: 'Заяц', price: 18 },
    { id: 5, name: 'Панда', price: 30 },
 { id: 6, name: 'Лев', price: 35 },
  ];

  return (
    <div>
      <h1>Каталог товаров</h1>
      <div className="product-list">
        {products.map(product => (
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

export default ProductList;