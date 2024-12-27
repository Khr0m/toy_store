
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handlePurchase = () => {
    alert(`Вы купили: ${cart.map(item => item.name).join(', ')}`);
    setCart([]);
  };

  return (
    <div>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} handlePurchase={handlePurchase} removeFromCart={removeFromCart}/>} />
      </Routes>
    </div>
  );
};

export default App;
