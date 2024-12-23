import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cart }) => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/products">Каталог</Link>
      <Link to="/contact">Контакты</Link>
      <Link to="/cart">Корзина ({cart.length})</Link>
    </nav>
  );
};

export default Navbar;