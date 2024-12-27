import React, { useState } from 'react';
import styles from '../styles/Cart.module.css';
import trashIcon from '../images/Purchase/TrashCan.png'; 
import cardIcon from '../images/Purchase/card.png'; 
import spbIcon from '../images/Purchase/SBP.png'; 
import umoneyIcon from '../images/Purchase/umoney.png'; 

const Cart = ({ cart, handlePurchase, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const handlePaymentSelection = (paymentType) => {
    setSelectedPayment(paymentType);
  };


  return (
    <div className={styles.pageContainer}>
      <div className={styles.cartContainer}>
        <h1>Список товаров</h1>
        {cart.length === 0 ? (
          <p>Ваша корзина пуста.</p>
        ) : (
          <div className={styles.cartContent}>
            <ul className={styles.cartList}>
              {cart.map((item, index) => (
                <li key={index} className={styles.cartItem}>
                  <div className={styles.itemDetails}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.itemImage}
                    />
                    <div className={styles.itemInfo}>
                      <span>{item.name}</span>
                      <span>{item.price}₽</span>
                    </div>
                  </div>
                  <button
                    className={styles.deleteButton}
                    onClick={() => removeFromCart(index)}
                  >
                    <img
                      src={trashIcon} // Укажите путь к картинке
                      alt="Удалить"
                      className={styles.deleteIcon} // Стили для изображения
                    />
                  </button>
                </li>
              ))}
            </ul>
            <div className={styles.total}>
              <h3>Итого: {total}₽</h3>
            </div>
            <div className={styles.paymentOptions}>
              <div>Выберите способ оплаты:</div>
              <button
                className={`${styles.paymentButton} ${
                  selectedPayment === 'card' ? styles.selected : ''
                }`}
                onClick={() => handlePaymentSelection('card')}
              >
                Карта
                <img src={cardIcon} alt="Оплата картой" />
              </button>
              <button
                className={`${styles.paymentButton} ${
                  selectedPayment === 'sbp' ? styles.selected : ''
                }`}
                onClick={() => handlePaymentSelection('sbp')}
              >
                СБП
                <img src={spbIcon} alt="Оплата по СБП" />
              </button>
              <button
                className={`${styles.paymentButton} ${
                  selectedPayment === 'umoney' ? styles.selected : ''
                }`}
                onClick={() => handlePaymentSelection('umoney')}
              >
                ЮMoney
                <img src={umoneyIcon} alt="Оплата через ЮMoney" />
              </button>
            </div>
            <button
              className={styles.purchaseButton}
              onClick={() => {
                if (!selectedPayment) {
                  alert('Пожалуйста, выберите способ оплаты!');
                } else {
                  handlePurchase();
                }
              }}
            >
              Оплатить
            </button>
          </div>
        )}

      </div>
      <div className={styles.FooterDark}>
        Г.Екатеринбург ул.Куйбышева д.81 <br />
        +71234567890 <br />
        ©️ 2024 ООО "Сказка"
      </div>
    </div>
  );
};

export default Cart;