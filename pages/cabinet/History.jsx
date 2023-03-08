import history from "./History.module.scss";

const TableBody = ({ created_ad, paid, amount }) => (
  <div className={history.table__body_item}>
    <div className={history.table__body_item_1}>{created_ad}</div>
    <div className={history.table__body_item_2}>{amount}</div>
    <div className={history.table__body_item_3}>{paid}</div>
  </div>
);

export default function History() {
  const historyArr = [
    {
      created_ad: "11.12.2022 в 12:43",
      paid: "Оплачен",
      amount: "1 000₽",
    },
    {
      created_ad: "11.12.2022 в 12:43",
      paid: "Оплачен",
      amount: "1 000₽",
    },
    {
      created_ad: "11.12.2022 в 12:43",
      paid: "Оплачен",
      amount: "1 000₽",
    },
    {
      created_ad: "11.12.2022 в 12:43",
      paid: "Оплачен",
      amount: "1 000₽",
    },
    {
      created_ad: "11.12.2022 в 12:43",
      paid: "Оплачен",
      amount: "1 000₽",
    },
    {
      created_ad: "11.12.2022 в 12:43",
      paid: "Оплачен",
      amount: "1 000₽",
    },
  ];

  return (
    <div className={history.history}>
      <h1 className={history.history__title}>История пополнений</h1>
      <div className={history.table}>
        <div className={history.table__title}>
          <div className={history.table__title_item_1}>Дата</div>
          <div className={history.table__title_item_2}>Сумма</div>
          <div className={history.table__title_item_3}>Статус</div>
        </div>
        <div className={history.table__body}>{
            historyArr.map((item, i) => <TableBody {...item} key={i}/>)
        }</div>
      </div>
    </div>
  );
}
