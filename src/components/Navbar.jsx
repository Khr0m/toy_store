import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'
import cartIcon from '../images/MainPage/Menu/ShoppingCart.png'; 
import Header from './Header'

const Navbar = ({ cart }) => {
  return (
    <>
    <Header /> {}
    <nav className={styles.navbar}>
      
      <div className={styles.links}>
        <Link to="/">Главная</Link>
        <Link to="/products">Каталог</Link>
        <Link to="/contact">Контакты</Link>
      </div>

      <Link to="/cart" className={styles.cartLink}>
        <img src={cartIcon} alt="Корзина" className={styles.cartIcon} />
        <span className={styles.cartCount}>{cart.length}</span>
      </Link>
    </nav>
    </>
  );
};
export default Navbar;