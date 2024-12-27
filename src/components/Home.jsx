import React, { useState } from 'react';
import styles from '../styles/Home.module.css'; 
import buyNowIcon from '../images/Home/BuyNow.png'; 
import bearIcon from '../images/Home/Bear.jpeg'; 
import dogIcon from '../images/Home/Dog.jpeg'; 
import catIcon from '../images/Home/Cat.png'; 
import elephantPicture from '../images/Home/Elephant.png'; 
import phoneIcon from '../images/Home/Phone.png'

const Home = ({ addToCart }) => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Плюшевый мишка',
      price: 700,
      image: bearIcon,
    },
    {
      id: 2,
      name: 'Кот-подушка',
      price: 1500,
      image: catIcon,
    },
    {
      id: 3,
      name: 'Собачка корги',
      price: 900,
      image: dogIcon,
    },
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Проверка ФИО
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Пожалуйста, введите ваше ФИО.';
    }

    // Проверка телефона
    const phoneRegex = /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, введите номер телефона.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Неверный формат телефона. Пример: +7-xxx-xxx-xx-xx.';
    }

    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, введите адрес электронной почты.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Введите корректный адрес электронной почты.';
    }

    setErrors(newErrors);

    // Если нет ошибок, вернуть true
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращение перезагрузки страницы
  
    if (validateForm()) {
      // Формируем строку с информацией из формы
      const formInfo = `
        Форма успешно отправлена!
        
        ФИО: ${formData.fullName}
        Телефон: ${formData.phone}
        Email: ${formData.email}
      `;
  
      // Выводим эту информацию в alert
      alert(formInfo);
  
      // Сбрасываем данные формы и ошибки
      setFormData({
        fullName: '',
        phone: '',
        email: ''
      });
      setErrors({});
    }
  };

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>
        <img src={buyNowIcon} alt="Buy Now" className={styles.icon} />
        Предложения недели
      </h1>
      <div className={styles.productList}>
        {featuredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <h2 className={styles.productName}>{product.name}</h2> 
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <div className={styles.productFooter}>
              <p className={styles.productPrice}>Цена: {product.price} ₽</p>
              <button
                className={styles.addToCartButton}
                onClick={() => addToCart(product)}
              >
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.aboutStore}>
        <div className={styles.aboutStoreHeader}>
          <h2>О нашем магазине</h2>
        </div>
        <div className={styles.aboutStoreContent}>
          <div className={styles.description}>
            <p>
              Добро пожаловать в магазин "Сказочный мир" — место, где оживают мечты! Мы предлагаем широкий ассортимент качественных игрушек, созданных с любовью и заботой о детях.
            </p>
            <p>
              Наши игрушки производятся в Екатеринбурге, и мы гордимся высоким уровнем их качества и безопасности. Каждая игрушка проходит тщательную проверку, чтобы вы могли быть уверены в том, что дарите своим детям лучшее.
            </p>
          </div>
          <ul className={styles.features}>
            <li>Для всех возрастов</li>
            <li>Высокое качество</li>
            <li>Доставка по всей России</li>
            <li>Доступные цены</li>
          </ul>
          <div className={styles.illustration}>
            <img src={elephantPicture} alt="Слон с шариками" />
          </div>
        </div>
      </div>
      <div className={styles.formPart}>
        <h2>Форма обратной связи</h2>
        <div className={styles.formMain}>
          <p>У вас возникли вопросы? <br /><br />
            Заполните форму, и наши консультанты обязательно свяжутся с вами!
          </p>
          <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="ФИО"
          className={styles.inputForm}
        />
        {errors.fullName && <div className={styles.error}>{errors.fullName}</div>}
        <br />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+7-xxx-xxx-xx-xx"
          className={styles.inputForm}
        />
        {errors.phone && <div className={styles.error}>{errors.phone}</div>}
        <br />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className={styles.inputForm}
        />
        {errors.email && <div className={styles.error}>{errors.email}</div>}
        <br />
        <button type="submit" className={styles.buttonForm}>
          Отправить
        </button>
      </form>
          <div className={styles.phoneContainer}>
            <img src={phoneIcon} alt="" className={styles.phoneImg}/>
          </div>
        </div>
      </div>
      <div className={styles.Footerlight}>
        Г.Екатеринбург ул.Куйбышева д.81 <br />
        +71234567890 <br />
        ©️ 2024 ООО "Сказка"
      </div>

    </div>
  );
};

export default Home;