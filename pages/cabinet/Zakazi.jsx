import "./Profile.scss";
import Zakaz from "./Zakaz";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersHistory } from "../../store/apiReducer";
import NoWrapper from "./NoWrapper";

export default function Zakazi() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.api);

  // useEffect(() => {
  //   dispatch(getOrdersHistory())
  // }, [])

  // const zakazi = [
  //   {
  //     created_at: "11.12.2022",
  //     status: "Завершён",
  //     quantity: "10 000",
  //     price: "1 000",
  //     url: "https://www.instagram.com/durov/",
  //     service_name: "Подписчики “Живые ❤️”",
  //     icon: "img/design/inst.jpg",
  //   },
  //   {
  //     created_at: "11.12.2022",
  //     status: "Выполнен частично",
  //     quantity: "10 000",
  //     price: "1 000",
  //     url: "https://www.instagram.com/durov/",
  //     service_name: "Подписчики “Живые ❤️”",
  //     icon: "img/design/inst.jpg",
  //   },
  //   {
  //     created_at: "11.12.2022",
  //     status: "Выполняется",
  //     quantity: "10 000",
  //     price: "1 000",
  //     url: "https://www.instagram.com/durov/",
  //     service_name: "Подписчики “Живые ❤️”",
  //     icon: "img/design/inst.jpg",
  //   },
  //   {
  //     created_at: "11.12.2022",
  //     status: "В обработке",
  //     quantity: "10 000",
  //     price: "1 000",
  //     url: "https://www.instagram.com/durov/",
  //     service_name: "Подписчики “Живые ❤️”",
  //     icon: "img/design/inst.jpg",
  //   },
  //   {
  //     created_at: "11.12.2022",
  //     status: "Отменён",
  //     quantity: "10 000",
  //     price: "1 000",
  //     url: "https://www.instagram.com/durov/",
  //     service_name: "Подписчики “Живые ❤️”",
  //     icon: "img/design/inst.jpg",
  //   },
  //   {
  //     created_at: "11.12.2022",
  //     status: "Отменён",
  //     quantity: "10 000",
  //     price: "1 000",
  //     url: "https://www.instagram.com/durov/",
  //     service_name: "Подписчики “Живые ❤️”",
  //     icon: "img/design/inst.jpg",
  //   },
  //   {
  //     created_at: "11.12.2022",
  //     status: "Отменён",
  //     quantity: "10 000",
  //     price: "1 000",
  //     url: "https://www.instagram.com/durov/",
  //     service_name: "Подписчики “Живые ❤️”",
  //     icon: "img/design/inst.jpg",
  //   },
  //   {
  //     created_at: "11.12.2022",
  //     status: "Отменён",
  //     quantity: "10 000",
  //     price: "1 000",
  //     url: "https://www.instagram.com/durov/",
  //     service_name: "Подписчики “Живые ❤️”",
  //     icon: "img/design/inst.jpg",
  //   },
  // ];

  return (
    <div className="container__elem container__elem--12">
      <h1>
        <img src="img/design/h1zakazi.jpg" alt="Заказы" />
      </h1>
      {orders.length > 0 && (
        <div className="tableZakazi">
          <div className="tableZakazi__row">
            <div className="tableZakazi__th tableZakazi__th--1">Дата</div>
            <div className="tableZakazi__th tableZakazi__th--2">Услуга</div>
            <div className="tableZakazi__th tableZakazi__th--3">Кол-во</div>
            <div className="tableZakazi__th tableZakazi__th--4">Цена</div>
            <div className="tableZakazi__th">Статус</div>
          </div>
          {orders.map((item, i) => (
            <Zakaz key={i} {...item} />
          ))}
        </div>
      )}
      {orders.length === 0 && (
        <NoWrapper
          title="Заказов нет"
          body="Вы ещё ни разу ничего не заказывали. Пополните баланс и сделайте свой первый заказ!"
        />
      )}
    </div>
  );
}
