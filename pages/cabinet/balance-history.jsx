import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { balanceHistory } from "../../store/apiReducer";
import history from "../../styles/Balance-history.module.scss";
import NoWrapper from "../../components/cabinet/NoWrapper";
import CabinetContainer from "../../components/cabinet/CabinetContainer";

const TableBody = ({ created_ad, paid, amount }) => (
  <div className={history.table__body_item}>
    <div className={history.table__body_item_1}>{created_ad}</div>
    <div className={history.table__body_item_2}>{amount}</div>
    <div className={history.table__body_item_3}>{paid}</div>
  </div>
);

export default function History({catalog}) {
  const dispatch = useDispatch();
  const { balance } = useSelector((state) => state.api);

  // useEffect(() => {
  //   dispatch(balanceHistory())
  // }, [])

  // const historyArr = [
  //   {
  //     created_ad: "11.12.2022 в 12:43",
  //     paid: "Оплачен",
  //     amount: "1 000₽",
  //   },
  //   {
  //     created_ad: "11.12.2022 в 12:43",
  //     paid: "Оплачен",
  //     amount: "1 000₽",
  //   },
  //   {
  //     created_ad: "11.12.2022 в 12:43",
  //     paid: "Оплачен",
  //     amount: "1 000₽",
  //   },
  //   {
  //     created_ad: "11.12.2022 в 12:43",
  //     paid: "Оплачен",
  //     amount: "1 000₽",
  //   },
  //   {
  //     created_ad: "11.12.2022 в 12:43",
  //     paid: "Оплачен",
  //     amount: "1 000₽",
  //   },
  //   {
  //     created_ad: "11.12.2022 в 12:43",
  //     paid: "Оплачен",
  //     amount: "1 000₽",
  //   },
  // ];

  // useEffect(() => {
  //   dispatch(getOrdersHistory())
  // }, [])

  return (
    <CabinetContainer catalog={catalog}>
    <div className={history.history}>
      <h1 className={history.history__title}>История пополнений</h1>
      {balance.length > 0 && (
        <div className={history.table}>
          <div className={history.table__title}>
            <div className={history.table__title_item_1}>Дата</div>
            <div className={history.table__title_item_2}>Сумма</div>
            <div className={history.table__title_item_3}>Статус</div>
          </div>
          <div className={history.table__body}>
            {balance.map((item, i) => (
              <TableBody {...item} key={i} />
            ))}
          </div>
        </div>
      )}
      {balance.length === 0 && (
        <NoWrapper
          title="Пополнений ещё не было"
          body="Вы ещё ни разу не пополняли баланс. Пополните баланс и сделайте свой первый заказ!"
        />
      )}
    </div>
    </CabinetContainer>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://flowsmm.net/api/data/all");
  const { catalog } = await res.json();

  return {
    props: {
      catalog,
    },
  };
}
