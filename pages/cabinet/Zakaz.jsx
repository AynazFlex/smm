import "./Profile.scss";

export default function Zakaz({ created_at, status, quantity, price, url, service_name, icon }) {

  const classFromStatus = (status) => {
    switch(status) {
      case 'Завершён': return 'tableZakazi__status--green'
      case 'Выполнен частично': return 'tableZakazi__status--yellow'
      case 'Выполняется': return 'tableZakazi__status--blue'
      case 'В обработке': return 'tableZakazi__status--orange'
      case 'Отменён': return 'tableZakazi__status--red'
    }

    return 'tableZakazi__status--green'
  }

  return (
    <div className="tableZakazi__row tableZakazi__row--gray">
      <div className="tableZakazi__tr tableZakazi__tr--1">{created_at}</div>
      <div className="tableZakazi__tr tableZakazi__tr--2">
        <div className="tableZakazi__usl">
          <div className="tableZakazi__ico">
            <img src={icon} alt="" />
          </div>
          <div className="tableZakazi__wr">
            <span>{service_name}</span>
            <a>{url}</a>
          </div>
        </div>
      </div>
      <div className="tableZakazi__tr tableZakazi__tr--3">{quantity}</div>
      <div className="tableZakazi__tr tableZakazi__tr--4">{`${price}₽`}</div>
      <div className="tableZakazi__tr">
        <div className={`tableZakazi__status ${classFromStatus(status)}`}>
          {status}
        </div>
      </div>
    </div>
  );
}
