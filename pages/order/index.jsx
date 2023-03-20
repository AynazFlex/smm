import order from "../../styles/Order.module.scss";
import { useEffect, useState, useRef } from "react";
import { createOrders, reset } from "../../store/apiReducer";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import HeaderIndex from "../../components/HeaderIndex";

const setNetworkValue = (value) => {
  switch (value) {
    case "instagram":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/pmicon1.png" alt="" />
          Instagram
        </div>
      );
    case "vk":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/pmicon3.png" alt="" />
          VK
        </div>
      );
    case "twitter":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/pmicon8.png" alt="" />
          Twitter
        </div>
      );
    case "telegram":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/pmicon2.png" alt="" />
          Telegram
        </div>
      );
    case "youtube":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/pmicon5.png" alt="" />
          YouTube
        </div>
      );
    case "facebook":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/pmicon7.png" alt="" />
          Facebook
        </div>
      );
    case "tiktok":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/pmicon4.png" alt="" />
          TikTok
        </div>
      );
    case "twitch":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/pmicon6.png" alt="" />
          Twitch
        </div>
      );
    case "rutube":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/pmicon9.png" alt="" />
          RuTube
        </div>
      );
  }

  return "";
};

const setServiceValue = (value) => {
  switch (value) {
    case "subs":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/service_1.png" alt="" />
          Подписчики
        </div>
      );
    case "likes":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/service_2.png" alt="" />
          Лайки
        </div>
      );
    case "views":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/service_3.png" alt="" />
          Просмотры
        </div>
      );
    case "comments":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/service_4.png" alt="" />
          Комментарии
        </div>
      );
    case "spectators":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/service_5.png" alt="" />
          Зрители
        </div>
      );
    case "statistics":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/service_6.png" alt="" />
          Сатистика
        </div>
      );
    case "igtv":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/service_7.png" alt="" />
          IGTV
        </div>
      );
    case "reels":
      return (
        <div className={order.form__select_value}>
          <img src="img/design/service_8.png" alt="" />
          Reels
        </div>
      );
  }

  return "";
};

const MessWrap = ({ setClose }) => {
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

const Zakaz = ({ tarif_name, tarif_label }) => {
  return (
    <div className={order.zakaz}>
      <div className={order.zakaz__top}>
        <div className={order.zakaz__top_tarif}>Тариф</div>
        {tarif_label && (
          <div className={order.zakaz__top_label}>{tarif_label}</div>
        )}
      </div>
      <div className={order.zakaz__tarif}>{tarif_name}</div>
      <div className={order.zakaz__body}>
        Подписываются живые люди со всего мира. Все отписки и списания мы будем
        восстанавливать автоматически в течение 60 дней после заказа.
      </div>
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
          src="img/design/telega_zakaz.png"
          alt=""
          className={order.zakaz__bottom_img1}
        />
        <img
          src="img/design/telega_zakaz1.png"
          alt=""
          className={order.zakaz__bottom_img2}
        />
      </div>
    </div>
  );
};

export default function OrderIndex({catalog}) {
  const [soc_network, setSoc_network] = useState("");
  const [tarif, setTarif] = useState("");
  const [service, setService] = useState("");
  const [open, setOpen] = useState("");
  const [zakaz, setZakaz] = useState({
    tarif_name: "",
    tarif_label: "",
  });
  const [zakazClick, setZakazClick] = useState({
    tarif_name: "",
    tarif_label: "",
  });
  const [url, setUrl] = useState("");
  const [promocode, setPromocode] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  const { error, success, isPending } = useSelector((state) => state.api);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createOrders({ url: url, quantity: quantity, service_id: 22 }));
  };

  useEffect(() => {
    return () => dispatch(reset());
  }, []);

  useEffect(() => {
    if (success) {
      setDone(true);
    }
  }, [success]);

  return (
    <>
      <HeaderIndex catalog={catalog}/>
      <main className="main main--other">
        <div className="container">
          <div className={order.order}>
            <h1 className={order.order__title}>Оформление заказа</h1>
            <div className={order.order__body}>
              <form onSubmit={handleSubmit} className={order.form}>
                <div
                  className={`${order.form__label} ${
                    open === "network" ? order.form__label_active : ""
                  }`}
                >
                  Социальная сеть
                  <div
                    onClick={() =>
                      setOpen((prev) => (prev === "network" ? "" : "network"))
                    }
                    className={
                      open === "network"
                        ? `${order.form__select} ${order.form__select_act}`
                        : order.form__select
                    }
                  >
                    {soc_network ? (
                      setNetworkValue(soc_network)
                    ) : (
                      <div className={order.form__select_placeholder}>
                        Выберите соц. сеть
                      </div>
                    )}
                    <button
                      className={
                        open === "network" ? order.form__select_open : ""
                      }
                      type="button"
                    >
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.792893 0.792893C1.18342 0.402369 1.81658 0.402369 2.20711 0.792893L8.5 7.08579L14.7929 0.792893C15.1834 0.402369 15.8166 0.402369 16.2071 0.792893C16.5976 1.18342 16.5976 1.81658 16.2071 2.20711L9.20711 9.20711C8.81658 9.59763 8.18342 9.59763 7.79289 9.20711L0.792893 2.20711C0.402369 1.81658 0.402369 1.18342 0.792893 0.792893Z"
                          fill={open === "network" ? "#FF772D" : "#A3ACC5"}
                        />
                      </svg>
                    </button>
                  </div>
                  {open === "network" && (
                    <div
                      onClick={() => setOpen("service")}
                      className={order.form__label_dropdown}
                    >
                      <div
                        onClick={() => setSoc_network("instagram")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/pmicon1.png" alt="" />
                        Instagram
                      </div>
                      <div
                        onClick={() => setSoc_network("twitter")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/pmicon8.png" alt="" />
                        Twitter
                      </div>
                      <div
                        onClick={() => setSoc_network("vk")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/pmicon3.png" alt="" />
                        VK
                      </div>
                      <div
                        onClick={() => setSoc_network("telegram")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/pmicon2.png" alt="" />
                        Telegram
                      </div>
                      <div
                        onClick={() => setSoc_network("youtube")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/pmicon5.png" alt="" />
                        YouTube
                      </div>
                      <div
                        onClick={() => setSoc_network("facebook")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/pmicon7.png" alt="" />
                        Facebook
                      </div>
                      <div
                        onClick={() => setSoc_network("tiktok")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/pmicon4.png" alt="" />
                        TikTok
                      </div>
                      <div
                        onClick={() => setSoc_network("twitch")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/pmicon6.png" alt="" />
                        Twitch
                      </div>
                      <div
                        onClick={() => setSoc_network("rutube")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/pmicon9.png" alt="" />
                        RuTube
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`${order.form__label} ${
                    open === "service" ? order.form__label_active : ""
                  }`}
                >
                  Услуга
                  <div
                    onClick={() =>
                      setOpen((prev) => (prev === "service" ? "" : "service"))
                    }
                    className={
                      open === "service"
                        ? `${order.form__select} ${order.form__select_act}`
                        : order.form__select
                    }
                  >
                    {service ? (
                      setServiceValue(service)
                    ) : (
                      <div className={order.form__select_placeholder}>
                        Выберите услугу
                      </div>
                    )}
                    <button
                      className={
                        open === "service" ? order.form__select_open : ""
                      }
                      type="button"
                    >
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.792893 0.792893C1.18342 0.402369 1.81658 0.402369 2.20711 0.792893L8.5 7.08579L14.7929 0.792893C15.1834 0.402369 15.8166 0.402369 16.2071 0.792893C16.5976 1.18342 16.5976 1.81658 16.2071 2.20711L9.20711 9.20711C8.81658 9.59763 8.18342 9.59763 7.79289 9.20711L0.792893 2.20711C0.402369 1.81658 0.402369 1.18342 0.792893 0.792893Z"
                          fill={open === "service" ? "#FF772D" : "#A3ACC5"}
                        />
                      </svg>
                    </button>
                  </div>
                  {open === "service" && (
                    <div
                      onClick={() => setOpen("tarif")}
                      className={order.form__label_dropdown}
                    >
                      <div
                        onClick={() => setService("subs")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/service_1.png" alt="" />
                        Подписчики
                      </div>
                      <div
                        onClick={() => setService("likes")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/service_2.png" alt="" />
                        Лайки
                      </div>
                      <div
                        onClick={() => setService("views")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/service_3.png" alt="" />
                        Просмотры
                      </div>
                      <div
                        onClick={() => setService("comments")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/service_4.png" alt="" />
                        Комментарии
                      </div>
                      <div
                        onClick={() => setService("spectators")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/service_5.png" alt="" />
                        Зрители
                      </div>
                      <div
                        onClick={() => setService("statistics")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/service_6.png" alt="" />
                        Сатистика
                      </div>
                      <div
                        onClick={() => setService("igtv")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/service_7.png" alt="" />
                        IGTV
                      </div>
                      <div
                        onClick={() => setService("reels")}
                        className={order.form__label_dropdown_item}
                      >
                        <img src="img/design/service_8.png" alt="" />
                        Reels
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`${order.form__label} ${
                    open === "tarif" ? order.form__label_active : ""
                  }`}
                >
                  Тариф
                  <div
                    onClick={() =>
                      setOpen((prev) => (prev === "tarif" ? "" : "tarif"))
                    }
                    className={
                      open === "tarif"
                        ? `${order.form__select} ${order.form__select_act}`
                        : order.form__select
                    }
                  >
                    {tarif ? (
                      tarif
                    ) : (
                      <div className={order.form__select_placeholder}>
                        Выберите тариф
                      </div>
                    )}
                    <button
                      className={
                        open === "tarif" ? order.form__select_open : ""
                      }
                      type="button"
                    >
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.792893 0.792893C1.18342 0.402369 1.81658 0.402369 2.20711 0.792893L8.5 7.08579L14.7929 0.792893C15.1834 0.402369 15.8166 0.402369 16.2071 0.792893C16.5976 1.18342 16.5976 1.81658 16.2071 2.20711L9.20711 9.20711C8.81658 9.59763 8.18342 9.59763 7.79289 9.20711L0.792893 2.20711C0.402369 1.81658 0.402369 1.18342 0.792893 0.792893Z"
                          fill={open === "tarif" ? "#FF772D" : "#A3ACC5"}
                        />
                      </svg>
                    </button>
                  </div>
                  {open === "tarif" && (
                    <div
                      onMouseLeave={() => setZakaz({ ...zakazClick })}
                      onClick={() => setOpen("")}
                      className={order.form__label_dropdown}
                    >
                      <div
                        onMouseEnter={() =>
                          setZakaz({
                            tarif_name: "Русские",
                            tarif_label: "ХИТ",
                          })
                        }
                        onClick={() => setTarif("Русские 🔥")}
                        className={`${order.form__label_dropdown_item} ${order.form__label_dropdown_jcsb}`}
                      >
                        Русские 🔥
                        <div className={order.form__label_dropdown_item_hit}>
                          ХИТ
                        </div>
                      </div>
                      <div
                        onClick={() => {
                          setZakazClick({
                            tarif_name: "Боты быстрые",
                            tarif_label: "",
                          });
                          setTarif("Боты быстрые");
                        }}
                        onMouseEnter={() =>
                          setZakaz({
                            tarif_name: "Боты быстрые",
                            tarif_label: "",
                          })
                        }
                        className={`${order.form__label_dropdown_item} ${order.form__label_dropdown_jcsb}`}
                      >
                        Боты быстрые
                      </div>
                      <div
                        onClick={() => {
                          setZakazClick({
                            tarif_name: "Живые ⭐️",
                            tarif_label: "",
                          });
                          setTarif("Живые ⭐️");
                        }}
                        onMouseEnter={() =>
                          setZakaz({ tarif_name: "Живые ⭐️", tarif_label: "" })
                        }
                        className={`${order.form__label_dropdown_item} ${order.form__label_dropdown_jcsb}`}
                      >
                        Живые ⭐️
                      </div>
                      <div
                        onClick={() => {
                          setZakazClick({
                            tarif_name: "Микс + 🇷🇺",
                            tarif_label: "ХИТ",
                          });
                          setTarif("Микс + 🇷🇺");
                        }}
                        onMouseEnter={() =>
                          setZakaz({
                            tarif_name: "Микс + 🇷🇺",
                            tarif_label: "ХИТ",
                          })
                        }
                        className={`${order.form__label_dropdown_item} ${order.form__label_dropdown_jcsb}`}
                      >
                        Микс + 🇷🇺
                        <div className={order.form__label_dropdown_item_hit}>
                          ХИТ
                        </div>
                      </div>
                      <div
                        onClick={() => {
                          setZakazClick({
                            tarif_name: "Живые ❤️",
                            tarif_label: "",
                          });
                          setTarif("Живые ❤️");
                        }}
                        onMouseEnter={() =>
                          setZakaz({ tarif_name: "Живые ❤️", tarif_label: "" })
                        }
                        className={`${order.form__label_dropdown_item} ${order.form__label_dropdown_jcsb}`}
                      >
                        Живые ❤️
                      </div>
                      <div
                        onClick={() => {
                          setZakazClick({
                            tarif_name: "Русские + Микс ⭐️",
                            tarif_label: "Гарантия",
                          });
                          setTarif("Русские + Микс ⭐️");
                        }}
                        onMouseEnter={() =>
                          setZakaz({
                            tarif_name: "Русские + Микс ⭐️",
                            tarif_label: "Гарантия",
                          })
                        }
                        className={`${order.form__label_dropdown_item} ${order.form__label_dropdown_jcsb}`}
                      >
                        Русские + Микс ⭐️
                        <div className={order.form__label_dropdown_item_garant}>
                          Гарантия
                        </div>
                      </div>
                      <div
                        onClick={() => {
                          setZakazClick({
                            tarif_name: "Живые из Украины 🇺🇦",
                            tarif_label: "",
                          });
                          setTarif("Живые из Украины 🇺🇦");
                        }}
                        onMouseEnter={() =>
                          setZakaz({
                            tarif_name: "Живые из Украины 🇺🇦",
                            tarif_label: "",
                          })
                        }
                        className={`${order.form__label_dropdown_item} ${order.form__label_dropdown_jcsb}`}
                      >
                        Живые из Украины 🇺🇦
                      </div>
                      <div
                        onClick={() => {
                          setZakazClick({
                            tarif_name: "С английскими именами 🇺🇸",
                            tarif_label: "",
                          });
                          setTarif("С английскими именами 🇺🇸");
                        }}
                        onMouseEnter={() =>
                          setZakaz({
                            tarif_name: "С английскими именами 🇺🇸",
                            tarif_label: "",
                          })
                        }
                        className={`${order.form__label_dropdown_item} ${order.form__label_dropdown_jcsb}`}
                      >
                        С английскими именами 🇺🇸
                      </div>
                      <div
                        onClick={() => {
                          setZakazClick({
                            tarif_name: "Частично русские ⭐",
                            tarif_label: "",
                          });
                          setTarif("Частично русские ⭐");
                        }}
                        onMouseEnter={() =>
                          setZakaz({
                            tarif_name: "Частично русские ⭐",
                            tarif_label: "",
                          })
                        }
                        className={`${order.form__label_dropdown_item} ${order.form__label_dropdown_jcsb}`}
                      >
                        Частично русские ⭐
                      </div>
                      <div
                        onClick={() => {
                          setZakazClick({
                            tarif_name: "Из Ирана 🇮🇷",
                            tarif_label: "",
                          });
                          setTarif("Из Ирана 🇮🇷");
                        }}
                        onMouseEnter={() =>
                          setZakaz({
                            tarif_name: "Из Ирана 🇮🇷",
                            tarif_label: "",
                          })
                        }
                        className={`${order.form__label_dropdown_item} ${order.form__label_dropdown_jcsb}`}
                      >
                        Из Ирана 🇮🇷
                      </div>
                    </div>
                  )}
                </div>
                <label>
                  Ссылка на профиль
                  <input
                    onChange={(e) => setUrl(e.target.value)}
                    value={url}
                    type="text"
                    placeholder="Вставьте ссылку"
                  />
                  <div className={order.form__warning}>
                    Профиль должен быть открытым для правильной работы наших
                    услуг.
                  </div>
                </label>
                {!!service && (
                  <label>
                    Кол-во
                    <input
                      onChange={(e) => setQuantity(e.target.value)}
                      value={quantity}
                      type="number"
                      placeholder="Укажите количество"
                    />
                  </label>
                )}
                <label>
                  Промокод
                  <div className={order.promo_link}>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.7"
                        d="M18.7545 8.1929C18.88 7.97024 18.9179 7.70907 18.8607 7.46026C18.8034 7.21131 18.6551 6.9925 18.4447 6.84584L17.3125 6.05438H17.3127C17.2506 6.01076 17.2155 5.93857 17.2197 5.86326L17.3024 4.49052C17.3183 4.23575 17.2383 3.98425 17.078 3.78476C16.9177 3.58512 16.6886 3.4517 16.435 3.41035L15.0687 3.18485H15.0686C14.9936 3.17277 14.9302 3.12276 14.9016 3.0527L14.3762 1.78054C14.2792 1.54424 14.0972 1.352 13.8656 1.24131C13.6341 1.13048 13.3692 1.10902 13.1226 1.18092L11.7936 1.56643C11.7206 1.58788 11.6415 1.56998 11.5851 1.51925L10.5557 0.599351C10.3649 0.428273 10.1169 0.333496 9.8599 0.333496C9.6029 0.333496 9.35487 0.428273 9.16411 0.599351L8.13502 1.51925C8.07863 1.56984 7.99964 1.58774 7.92665 1.56643L6.59718 1.18092H6.59733C6.35061 1.10902 6.08586 1.13048 5.85432 1.24116C5.62263 1.352 5.44074 1.5441 5.34358 1.7804L4.81823 3.0527C4.78918 3.12247 4.72607 3.17235 4.65122 3.18485L3.28541 3.41035C3.03153 3.4517 2.80226 3.58498 2.64201 3.78462C2.48159 3.98426 2.40159 4.23589 2.41748 4.49067L2.50019 5.86312C2.50506 5.93857 2.46986 6.01104 2.40746 6.05423L1.2752 6.84584C1.06469 6.99247 0.916572 7.2113 0.859314 7.46026C0.802071 7.70906 0.839851 7.97024 0.965499 8.1929L1.63981 9.39387C1.67702 9.4598 1.67702 9.54023 1.63981 9.60616L0.965499 10.8073V10.8071C0.83985 11.0299 0.802071 11.2911 0.859314 11.5399C0.916414 11.7887 1.06467 12.0077 1.2752 12.1543L2.40746 12.9461V12.9459C2.46986 12.9891 2.50506 13.0616 2.50019 13.1369L2.41748 14.5097C2.40174 14.7644 2.48159 15.0159 2.64201 15.2156C2.80229 15.4151 3.03141 15.5485 3.28515 15.5898L4.65126 15.8153C4.7261 15.8278 4.78921 15.8777 4.81826 15.9475L5.34362 17.2196C5.44064 17.4559 5.62268 17.6482 5.85425 17.7589C6.08594 17.8697 6.3507 17.8912 6.5974 17.8193L7.92687 17.4338H7.92673C7.99971 17.4122 8.07885 17.4301 8.13509 17.4809L9.16419 18.4008C9.35495 18.5721 9.60297 18.6668 9.85997 18.6668C10.1171 18.6668 10.3651 18.5721 10.5558 18.4008L11.5853 17.4809C11.6415 17.4301 11.7205 17.4122 11.7935 17.4338L13.1227 17.8193C13.3693 17.8912 13.634 17.8696 13.8655 17.7589C14.0972 17.648 14.2791 17.4559 14.3763 17.2198L14.9013 15.9478C14.9301 15.8777 14.9935 15.8274 15.0686 15.8153L16.4349 15.5898H16.435C16.6886 15.5485 16.9179 15.4151 17.0782 15.2154C17.2383 15.0158 17.3183 14.7643 17.3024 14.5095L17.2197 13.1371C17.2156 13.0618 17.2505 12.9896 17.3124 12.9458L18.4447 12.1542V12.1544C18.6552 12.0077 18.8035 11.7887 18.8607 11.5399C18.9178 11.2911 18.88 11.03 18.7545 10.8072L18.0802 9.60603L18.0801 9.60617C18.0428 9.54024 18.0428 9.45996 18.0801 9.39403L18.7545 8.1929ZM7.63739 5.40504C8.14187 5.40504 8.62557 5.60411 8.98218 5.9582C9.3388 6.31244 9.53915 6.79269 9.53915 7.29344C9.53915 7.79433 9.33865 8.2746 8.98203 8.62868C8.62541 8.98276 8.14168 9.18169 7.63725 9.18169C7.13277 9.18169 6.64907 8.98276 6.29246 8.62868C5.93585 8.27459 5.73549 7.79429 5.73549 7.29344C5.73606 6.79269 5.93656 6.31272 6.2932 5.95878C6.64982 5.60469 7.13325 5.40562 7.63739 5.40504ZM12.0824 13.595C11.5779 13.595 11.0942 13.3961 10.7375 13.0418C10.3808 12.6877 10.1805 12.2074 10.1805 11.7066C10.1805 11.2058 10.3808 10.7254 10.7375 10.3714C11.0942 10.0173 11.5779 9.81834 12.0822 9.81834C12.5867 9.81834 13.0704 10.0173 13.4272 10.3714C13.7838 10.7256 13.9841 11.2058 13.9841 11.7067C13.9836 12.2073 13.7829 12.6872 13.4264 13.0413C13.07 13.3952 12.5865 13.5943 12.0824 13.595L12.0824 13.595ZM13.9064 6.34644L6.68337 13.5179C6.52781 13.6718 6.3014 13.7316 6.08932 13.675C5.87723 13.6185 5.71153 13.4539 5.65471 13.2434C5.59775 13.0328 5.65814 12.8081 5.81313 12.6537L13.0358 5.48224C13.1914 5.32792 13.418 5.26768 13.6303 5.32409C13.8427 5.38064 14.0086 5.54532 14.0654 5.75619C14.1223 5.96706 14.0617 6.19197 13.9062 6.34631L13.9064 6.34644Z"
                        fill="#FF772D"
                      />
                    </svg>
                    <a
                      href="https://t.me/+38-LLhCR6xFlMmVl"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Получить промокод
                    </a>
                  </div>
                  <input
                    value={promocode}
                    onChange={(e) => setPromocode(e.target.value)}
                    type="text"
                    placeholder="Введите промокод"
                  />
                </label>
                <input
                  disabled={
                    !(soc_network && tarif && service && url && quantity) ||
                    isPending
                  }
                  className={order.form__submit}
                  type="submit"
                  value="Оплатить"
                />
                {!!error && (
                  <div className={order.form__error}>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2666 4.5C7.84832 4.5 4.2666 8.08172 4.2666 12.5C4.2666 16.9183 7.84832 20.5 12.2666 20.5C16.6849 20.5 20.2666 16.9183 20.2666 12.5C20.2666 8.08172 16.6849 4.5 12.2666 4.5ZM2.2666 12.5C2.2666 6.97715 6.74375 2.5 12.2666 2.5C17.7894 2.5 22.2666 6.97715 22.2666 12.5C22.2666 18.0228 17.7894 22.5 12.2666 22.5C6.74375 22.5 2.2666 18.0228 2.2666 12.5Z"
                        fill="#EB5757"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2666 11.5C12.8189 11.5 13.2666 11.9477 13.2666 12.5V16.5C13.2666 17.0523 12.8189 17.5 12.2666 17.5C11.7143 17.5 11.2666 17.0523 11.2666 16.5V12.5C11.2666 11.9477 11.7143 11.5 12.2666 11.5Z"
                        fill="#EB5757"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2666 8.5C11.2666 7.94772 11.7143 7.5 12.2666 7.5H12.2766C12.8289 7.5 13.2766 7.94772 13.2766 8.5C13.2766 9.05228 12.8289 9.5 12.2766 9.5H12.2666C11.7143 9.5 11.2666 9.05228 11.2666 8.5Z"
                        fill="#EB5757"
                      />
                    </svg>
                    {error}
                  </div>
                )}
              </form>
              {!!zakaz.tarif_name && <Zakaz {...zakaz} />}
              {done && <MessWrap setClose={() => setDone(false)} />}
            </div>
          </div>
        </div>
      </main>
    </>
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
