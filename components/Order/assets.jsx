import order from "../../styles/Order.module.scss";
import { useEffect, useRef } from "react";
import { reset } from "../../store/apiReducer";
import { useDispatch } from "react-redux";
import Link from "next/link";

export const setValue = (item) => (
    <div className={order.form__select_value}>
      <img src={item.icon} alt="" />
      {item.name}
    </div>
  )
  
export const MessWrap = ({ setClose }) => {
    const wrapper = useRef(null);
    const dispatch = useDispatch();
  
    useEffect(() => {
      return () => dispatch(reset());
    }, []);
  
    useEffect(() => {
      const close = (e) => e.target.closest(`.${order.message}`) || setClose();
  
      wrapper.current.addEventListener("click", close);
    }, [wrapper]);
  
    return (
      <div ref={wrapper} className={order.wrapper}>
        <div className={order.message}>
          <button
            type="button"
            onClick={setClose}
            className={order.message__close}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                fill="#B0B0B0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L0.292892 12.2929C-0.0976315 12.6834 -0.0976315 13.3166 0.292892 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893Z"
                fill="#B0B0B0"
              />
            </svg>
          </button>
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="52" height="52" rx="26" fill="#27AE60" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.2115 18.3299C36.7657 18.8148 36.8219 19.6572 36.337 20.2114L24.6703 33.5447C24.1872 34.0968 23.3488 34.1549 22.7941 33.6747L15.7941 27.6141C15.2374 27.1321 15.1768 26.29 15.6588 25.7333C16.1408 25.1766 16.9829 25.1161 17.5396 25.5981L23.5368 30.7905L34.3301 18.4553C34.815 17.9012 35.6573 17.845 36.2115 18.3299Z"
              fill="white"
            />
          </svg>
          <div className={order.message__info}>
            <div className={order.message__info_title}>
              Заказ успешно размещён
            </div>
            <div className={order.message__info_body}>
              Ослеживайте его в профиле в разделе “Заказы”
            </div>
          </div>
          <div className={order.message__buttons}>
            <button
              type="button"
              onClick={setClose}
              className={order.message__done}
            >
              Новый заказ
            </button>
            <Link href="/cabinet" className={order.message__link}>
              Отслеживать
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export const Zakaz = ({ tarif_name, tarif_label, tarif_description }) => {
    return (
      <div className={order.zakaz}>
        <div className={order.zakaz__top}>
          <div className={order.zakaz__top_tarif}>Тариф</div>
          {tarif_label && (
            <div className={order.zakaz__top_label}>{tarif_label}</div>
          )}
        </div>
        <div className={order.zakaz__tarif}>{tarif_name}</div>
        <div className={order.zakaz__body}>{tarif_description}</div>
        <div className={order.zakaz__midlle}>
          <div className={order.zakaz__midlle_item}>🌍 Со всего мира</div>
          <div className={order.zakaz__midlle_item}>🚀 Скорость до 10К/день</div>
          <div className={order.zakaz__midlle_item}>⚡ Быстрый старт</div>
          <div className={order.zakaz__midlle_item}>⭐️ Гарантия 60 дней</div>
        </div>
        <div className={order.zakaz__bottom}>
          <div className={order.zakaz__bottom_top}>
            Скидки <span>до 50%</span>
            <br />в нашем телеграм-канале
          </div>
          <div className={order.zakaz__bottom_text}>
            Раздаем промокоды в Telegram каждую неделю
          </div>
          <a
            href="https://t.me/+38-LLhCR6xFlMmVl"
            target="_blank"
            rel="noreferrer"
            className={order.zakaz__bottom_link}
          >
            Получить промокод
          </a>
          <img
            src="/img/design/telega_zakaz.png"
            alt=""
            className={order.zakaz__bottom_img1}
          />
          <img
            src="/img/design/telega_zakaz1.png"
            alt=""
            className={order.zakaz__bottom_img2}
          />
        </div>
      </div>
    );
  };