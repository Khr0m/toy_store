import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

import map from '../images/Contact/Map.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    selection: '',
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Переключаем состояние галочки
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert('Пожалуйста, подтвердите, что вы предоставляете точную информацию.');
      return; // Не отправляем форму, если галочка не нажата
    }
    alert(`Наименование организации: ${formData.name}\nЮридический адрес: ${formData.message}\nКонтактный email: ${formData.email}\nТип сотрудничества: ${formData.selection}`);
  };



  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Контейнер для первого и второго блока */}
      <div style={{ display: 'flex', width: '100%', maxWidth: '1600px', marginTop: '20px' }}>
        {/* Первый блок */}
        <div style={{ color: '#056D8A', backgroundColor: '#E9FAFC', padding: '20px', flex: '1', marginRight: '130px' }}>
          <p>Вы можете найти нас в городе Екатеринбурге по адресу 
улица Куйбышева, 81. Вход со стороны улицы Куйбышева. 
</p>
          <p>Время работы магазина <br />
Пн: 9:00 - 20:00<br />
Вт: 9:00 - 20:00<br />
Ср: 9:00 - 20:00<br />
Чт: 9:00 - 20:00<br />
Пт: 9:00 - 20:00<br />
Сб: 10:00 - 18:00<br />
Вс: 10:00 - 18:00</p>
          <p>По всем вопросам обращаться по номеру  телефона <span  style={{fontWeight:'bold'}}>+71234567890</span> </p>

          <p>Также мы всегда отвечаем в социальный сетях <span  style={{fontWeight:'bold'}}>Телеграм, Вконтакте и  WhatsApp! </span></p>
        </div>

        {/* Второй блок */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src = {map} alt="карта" style={{ width: '752px', height: '684px' }} />
        </div>
      </div>

      {/* Третий блок с формой */}
      <h2 style={{fontSize: '32px', textAlign: 'center',  color: ' #056D8A', fontWeight: 'semibold', marginTop: '40px', marginBottom: '0px'}}>Если вы заинтересованы в сотрудничестве с нами,<br /> пожалуйста, заполните форму</h2>
      <div style={{ backgroundColor: '#E9FAFC', padding: '20px', width: '100%', maxWidth: '775px', marginTop: '0px', fontFamily: 'Murecho', fontWeight: 'bold', marginBottom: '20px' }}>
        <div style={{display: 'block', height: '40px'}}></div>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{ width: '678px', height: '100px', marginBottom: '10px', display: 'block', backgroundColor: '#007EA0', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', verticalAlign:'middle' }}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Наименование организации'
              style={{  width: '638px', height: '76px', fontWeight: 'semibold', fontSize:'32px', borderRadius:'5px', border: 'none'  }}
              required
            />
          </div>
          <div style={{ width: '678px', height: '100px', marginBottom: '10px', display: 'block', backgroundColor: '#007EA0', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', verticalAlign:'middle' }}>
            <input
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Юридический адрес'
              style={{ width: '638px', height: '76px', fontWeight: 'semibold', fontSize:'32px', borderRadius:'5px', border: 'none' }}
              required
            />
          </div>
          <div style={{width: '678px', height: '100px', marginBottom: '10px', display: 'block', backgroundColor: '#007EA0', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', verticalAlign:'middle' }}>
            <select
              id="selection"
              name="selection"
              value={formData.selection}
              
              onChange={handleChange}
              style={{ color: 'grey', backgroundColor:'white',  width: '638px', height: '76px', fontWeight: 'semibold', fontSize:'32px', borderRadius:'5px', border: 'none' }}
              required
            >
              <option value="">Тип сотруничества</option>
              <option value="option1">Вариант 1</option>
              <option value="option2">Вариант 2</option>
              <option value="option3">Вариант 3</option>
            </select>
          </div>
          <div style={{ width: '678px', height: '100px', marginBottom: '10px', display: 'block', backgroundColor: '#007EA0', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', verticalAlign:'middle' }}>
            <input
              
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Контактный email'
              style={{width: '638px', height: '76px', fontWeight: 'semibold', fontSize:'32px', borderRadius:'5px', border: 'none'}}
              required
            />
          </div>
          <div style={{ width: '678px', height: '100px', marginBottom: '10px', display: 'block', backgroundColor: '#007EA0', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', verticalAlign:'middle' }}>
          <input
              type="checkbox"
              id="confirmation"
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{ width:'30px', height: '30px', marginRight: '20px', marginLeft: '30px' }}
            />
            <label style={{fontFamily: 'Murecho', fontWeight: 'semibold', fontSize: '20px', color: 'white'}}>Я подтверждаю, что предоставленная информация является точной и согласен(на) с условиями сотрудничества </label>
          </div>
          
          <button type="submit" style={{ width: '671px', height: '81px', fontSize: '32px', textAlign:'center', backgroundColor: '#007EA0', color: 'white', padding: '10px 15px', border: 'none', cursor: 'pointer', fontFamily: 'Murecho', fontWeight: 'semibold' }}>
            Отправить
          </button>
        </form>
      </div>
      <div className={styles.FooterDark}>
    Г.Екатеринбург ул.Куйбышева д.81 <br />
    +71234567890 <br />
    ©️ 2024 ООО "Сказка"
  </div>
    </div>
    
  );
};

export default Contact;