import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Navbar = ({ cart }) => {
  return (
    <>
    <Header /> {}
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/products">Каталог</Link>
      <Link to="/contact">Контакты</Link>
      <Link to="/cart">Корзина ({cart.length})</Link>
    </nav>
    </>
  );
};

export default Navbar;