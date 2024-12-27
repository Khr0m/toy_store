import React, { useState } from 'react';

import styles from '../styles/Contact.module.css';

import barbie from '../images/Catalog/Products/Barbi.jpg';
import aibolit from '../images/Catalog/Products/Book.jpg';
import cubiki from '../images/Catalog/Products/Cubics.jpg';
import monopoliia from '../images/Catalog/Products/Монополия.jpeg';
import lego from '../images/Catalog/Products/Lego.jpg';
import cat from '../images/Catalog/Products/cat.jpg';
import paddington from '../images/Catalog/Products/mishka.jpg';
import korgi from '../images/Catalog/Products/korgi.jpg';

// Пример данных о товарах
const productsData = [
  { id: 1, name: 'Кот-подушка', price: 1500, category: 'Плюшевые игрушки', image: cat },
  { id: 2, name: 'Плюшевый мишка', price: 700, category: 'Плюшевые игрушки', image: paddington },
  { id: 3, name: 'Собачка-корги', price: 900, category: 'Плюшевые игрушки', image: korgi },
  { id: 4, name: 'Кукла barbie', price: 2000, category: 'Куклы', image: barbie },
  { id: 5, name: 'Конструктор Лего', price: 3000, category: 'Конструктор', image: lego },
  { id: 6, name: 'Игра Монополия', price: 1500, category: 'Настольные игры', image: monopoliia},
  { id: 7, name: 'Книжка Айболит', price: 600, category: 'Детские книжки', image: aibolit },
  { id: 8, name: 'Кубики развивающие', price: 500, category: 'Для малышей', image: cubiki },
];

const categories = ['Все', 'Плюшевые игрушки', 'Куклы', 'Конструктор', 'Для малышей', 'Настольные игры', 'Детские книжки'];

const ProductList = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  // Фильтрация товаров по выбранной категории
  const filteredProducts = selectedCategory === 'Все'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  return (
    <div>
    <div style={{ display: 'flex' }}>
      <div style={{  width: '20px', height: '287px', backgroundColor: '#007EA0', display: 'block', marginTop: '20px', marginLeft: '20px' }}></div>
      <div style={{ width: '25%', padding: '20px', paddingLeft: '0px'}}>
      
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                
                padding: '10px',
                backgroundColor: selectedCategory === category ? '#007EA0' : '#E9FAFC',
                color: selectedCategory === category ? '#fff' : '#056D8A',
                border: '1px solid grey', 
                cursor: 'pointer',
                width: '100%',
                textAlign: 'center',
                fontFamily:'Murecho',
                fontSize: '32',
                fontWeight: 'Bold'
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Карточки товаров */}
      <div style={{ width: '70%', padding: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ backgroundColor:'#E9FAFC', padding: '10px', width: '500px', height:'600px', textAlign: 'center' }}>
            <h3 style={{fontSize:'40', color:'#007EA0', fontFamily:'Murecho', fontWeight: 'Bold'}}>{product.name}</h3>
            <img src={product.image} alt={product.name} style={{  width: '400px', height: '400px' }} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{fontSize:'32', color:'#007EA0', fontFamily:'Murecho', padding: '10px'}}>Цена: <span style={{fontSize:'32', color:'red', fontFamily:'Murecho'}}>{product.price} ₽</span></p>
            <button style={{width: '148px', height: '46', backgroundColor: '#007EA0', color: '#FFFFFF',  borderRadius: '5px', border: '0px'}} onClick={() => addToCart(product)}>В корзину</button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <div className={styles.FooterDark}>
        Г.Екатеринбург ул.Куйбышева д.81 <br />
        +71234567890 <br />
        ©️ 2024 ООО "Сказка"
      </div>
    </div>
  );
};

export default ProductList;


{/* <div style={{ backgroundColor: '#007EA0', borderRadius: '5px 0 0 5px', padding: '10px' }}></div> */}