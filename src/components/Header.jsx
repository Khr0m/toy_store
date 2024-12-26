import React from 'react';
import './Header.css';
import Logo from '../images/MainPage/Header/ButterflyBlue.png';
import telegram from '../images/MainPage/Header/IconTelegram.png';
import vk from '../images/MainPage/Header/IconVK.png';
import almostForbidden from '../images/MainPage/Header/IconWhatsapp.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img src={Logo} alt="Логотип магазина" className="logo" />
        <div className="title">
          <h1>Сказочный мир</h1>
          <p className="slogan">"Подарите детям волшебство и игры"</p>
        </div>
        <div className="contact-info">
          <p className="phone">+7 1234567890</p>
          <p className="free-call">Звонок бесплатный</p>
          <div className="social-icons">
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <img src={telegram} alt="Telegram" />
            </a>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
              <img src={vk} alt="ВКонтакте" />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src={almostForbidden} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;