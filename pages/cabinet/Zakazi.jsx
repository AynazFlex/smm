import './Profile.scss';
import Zakaz from './Zakaz';

export default function Zakazi() {

  const zakazi = [
    {
      created_at: '11.12.2022',
      status: 'Завершён',
      quantity: '10 000',
      price: '1 000',
      url: 'https://www.instagram.com/durov/',
      service_name: 'Подписчики “Живые ❤️”', 
      icon: 'img/design/inst.jpg'
    },
    {
      created_at: '11.12.2022',
      status: 'Выполнен частично',
      quantity: '10 000',
      price: '1 000',
      url: 'https://www.instagram.com/durov/',
      service_name: 'Подписчики “Живые ❤️”', 
      icon: 'img/design/inst.jpg'
    },
    {
      created_at: '11.12.2022',
      status: 'Выполняется',
      quantity: '10 000',
      price: '1 000',
      url: 'https://www.instagram.com/durov/',
      service_name: 'Подписчики “Живые ❤️”', 
      icon: 'img/design/inst.jpg'
    },
    {
      created_at: '11.12.2022',
      status: 'В обработке',
      quantity: '10 000',
      price: '1 000',
      url: 'https://www.instagram.com/durov/',
      service_name: 'Подписчики “Живые ❤️”', 
      icon: 'img/design/inst.jpg'
    },
    {
      created_at: '11.12.2022',
      status: 'Отменён',
      quantity: '10 000',
      price: '1 000',
      url: 'https://www.instagram.com/durov/',
      service_name: 'Подписчики “Живые ❤️”', 
      icon: 'img/design/inst.jpg'
    },
    {
      created_at: '11.12.2022',
      status: 'Отменён',
      quantity: '10 000',
      price: '1 000',
      url: 'https://www.instagram.com/durov/',
      service_name: 'Подписчики “Живые ❤️”', 
      icon: 'img/design/inst.jpg'
    },
    {
      created_at: '11.12.2022',
      status: 'Отменён',
      quantity: '10 000',
      price: '1 000',
      url: 'https://www.instagram.com/durov/',
      service_name: 'Подписчики “Живые ❤️”', 
      icon: 'img/design/inst.jpg'
    },
    {
      created_at: '11.12.2022',
      status: 'Отменён',
      quantity: '10 000',
      price: '1 000',
      url: 'https://www.instagram.com/durov/',
      service_name: 'Подписчики “Живые ❤️”', 
      icon: 'img/design/inst.jpg'
    },
  ];

  return (
    <div className="container__elem container__elem--12">
      <h1>
        <img src="img/design/h1zakazi.jpg" alt="Заказы" />
      </h1>
      <div className="tableZakazi">
        <div className="tableZakazi__row">
          <div className="tableZakazi__th tableZakazi__th--1">Дата</div>
          <div className="tableZakazi__th tableZakazi__th--2">Услуга</div>
          <div className="tableZakazi__th tableZakazi__th--3">Кол-во</div>
          <div className="tableZakazi__th tableZakazi__th--4">Цена</div>
          <div className="tableZakazi__th">Статус</div>
        </div>
        {zakazi.map((item, i) => <Zakaz key={i} {...item}/>)}
      </div>
    </div>
  );
}
