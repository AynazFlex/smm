import { useEffect } from "react";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { useSelector, useDispatch } from "react-redux";
import CabinetContainer from "../../components/cabinet/CabinetContainer";
import Zakaz from "../../components/cabinet/Zakaz";
import NoWrapper from "../../components/cabinet/NoWrapper";

export default function Zakazi({catalog}) {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.api);

  // useEffect(() => {
  //   dispatch(getOrdersHistory())
  // }, [])

  return (
    <CabinetContainer catalog={catalog}>
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
    </CabinetContainer>
  )
}

export async function getServerSideProps() {
  const res = await fetch("https://flowsmm.net/api/data/all");
  const { catalog } = await res.json();

  if(!catalog) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      catalog,
    },
  };
}
