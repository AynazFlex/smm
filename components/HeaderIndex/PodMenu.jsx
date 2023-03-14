import { useState } from "react";
import "./HeaderIndex.sass";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addOrder } from "../../store/apiReducer";

export default function PodMenu({ setPodmenu, setBurger }) {
  const [smclick, setSmclick] = useState(false);
  const toggleSmclick = () => setSmclick((value) => !value);
  const [smclick1, setSmclick1] = useState(false);
  const toggleSmclick1 = () => setSmclick1((value) => !value);
  const [smclick2, setSmclick2] = useState(false);
  const toggleSmclick2 = () => setSmclick2((value) => !value);
  const [smclick3, setSmclick3] = useState(false);
  const toggleSmclick3 = () => setSmclick3((value) => !value);
  const [smclick4, setSmclick4] = useState(false);
  const toggleSmclick4 = () => setSmclick4((value) => !value);
  const [smclick5, setSmclick5] = useState(false);
  const toggleSmclick5 = () => setSmclick5((value) => !value);
  const [smclick6, setSmclick6] = useState(false);
  const toggleSmclick6 = () => setSmclick6((value) => !value);
  const [smclick7, setSmclick7] = useState(false);
  const toggleSmclick7 = () => setSmclick7((value) => !value);
  const [smclick8, setSmclick8] = useState(false);
  const toggleSmclick8 = () => setSmclick8((value) => !value);

  const dispatch = useDispatch();
  const sendOrder = (data) => {
    dispatch(addOrder(data))
    setPodmenu(false)
    setBurger(false)
  }

  return (
    <div
      onMouseLeave={() => setPodmenu(false)}
      onMouseEnter={setPodmenu}
      className="servicePodmenu"
    >
      <div className="container">
        <div className="container__elem container__elem--12">
          <div className="servicePodmenu__topMob">
            <button
              className="sprev"
              type="button"
              onClick={() => setPodmenu(false)}
            >
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z"
                  fill="#FF772D"
                />
              </svg>
            </button>
            <button
              className="sclose"
              type="button"
              onClick={() => {
                setPodmenu(false);
                setBurger(false);
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                  fill="#FF772D"
                />
                <path
                  d="M13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L0.292892 12.2929C-0.0976315 12.6834 -0.0976315 13.3166 0.292892 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893Z"
                  fill="#FF772D"
                />
              </svg>
            </button>
          </div>
          <div className="servicePodmenu__wr">
            <div className="servicePodmenuItem">
              <div className="servicePodmenuItem__top">
                <div className="servicePodmenuItem__title">
                  <i>
                    <img src="img/design/pmicon1.png" alt="" />
                  </i>
                  <span>Instagram</span>
                </div>
                <button
                  className={smclick ? "button__act" : ""}
                  onClick={toggleSmclick}
                  type="button"
                >
                  <svg
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  smclick
                    ? "servicePodmenuItem__cont act"
                    : "servicePodmenuItem__cont"
                }`}
              >
                <nav>
                  <Link href="/order" onClick={() => sendOrder({service_id: '1'})}>Подписчики</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '2'})}>Лайки</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '3'})}>Просмотры</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '4'})}>Комментарии</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '5'})}>Истории</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '6'})}>Зрители</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '7'})}>Статистика</Link>
                </nav>
              </div>
            </div>
            <div className="servicePodmenuItem">
              <div className="servicePodmenuItem__top">
                <div className="servicePodmenuItem__title">
                  <i>
                    <img src="img/design/pmicon2.png" alt="" />
                  </i>
                  <span>Telegram</span>
                </div>
                <button
                  className={smclick1 ? "button__act" : ""}
                  onClick={toggleSmclick1}
                  type="button"
                >
                  <svg
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  smclick1
                    ? "servicePodmenuItem__cont act"
                    : "servicePodmenuItem__cont"
                }`}
              >
                <nav>
                  <Link href="/order" onClick={() => sendOrder({service_id: '8'})}>Подписчики</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '9'})}>Просмотры</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '10'})}>Реакции</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '11'})}>Голосование</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '12'})}>Репосты</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '13'})}>Старт бота</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '14'})}>Telegraph просмотры</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '15'})}>Комментарии</Link>
                </nav>
              </div>
            </div>
            <div className="servicePodmenuItem">
              <div className="servicePodmenuItem__top">
                <div className="servicePodmenuItem__title">
                  <i>
                    <img src="img/design/pmicon3.png" alt="" />
                  </i>
                  <span>VK</span>
                </div>
                <button
                  className={smclick2 ? "button__act" : ""}
                  onClick={toggleSmclick2}
                  type="button"
                >
                  <svg
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  smclick2
                    ? "servicePodmenuItem__cont act"
                    : "servicePodmenuItem__cont"
                }`}
              >
                <nav>
                  <Link href="/order" onClick={() => sendOrder({service_id: '16'})}>Подписчики</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '17'})}>Лайки</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '18'})}>Комментарии</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '19'})}>Репосты</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '20'})}>Просмотры на видео</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '21'})}>Просмотры на пост</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '22'})}>Накрутка опросов</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '23'})}>Прослушивания</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '24'})}>Релиз плейлиста</Link>
                </nav>
              </div>
            </div>
            <div className="servicePodmenuItem">
              <div className="servicePodmenuItem__top">
                <div className="servicePodmenuItem__title">
                  <i>
                    <img src="img/design/pmicon4.png" alt="" />
                  </i>
                  <span>TikTok</span>
                </div>
                <button
                  className={smclick3 ? "button__act" : ""}
                  onClick={toggleSmclick3}
                  type="button"
                >
                  <svg
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  smclick3
                    ? "servicePodmenuItem__cont act"
                    : "servicePodmenuItem__cont"
                }`}
              >
                <nav>
                  <Link href="/order" onClick={() => sendOrder({service_id: '25'})}>Подписчики</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '26'})}>Лайки</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '27'})}>Комментарии</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '28'})}>Репосты</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '29'})}>Просмотры</Link>
                </nav>
              </div>
            </div>
            <div className="servicePodmenuItem">
              <div className="servicePodmenuItem__top">
                <div className="servicePodmenuItem__title">
                  <i>
                    <img src="img/design/pmicon5.png" alt="" />
                  </i>
                  <span>YouTube</span>
                </div>
                <button
                  className={smclick4 ? "button__act" : ""}
                  onClick={toggleSmclick4}
                  type="button"
                >
                  <svg
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  smclick4
                    ? "servicePodmenuItem__cont act"
                    : "servicePodmenuItem__cont"
                }`}
              >
                <nav>
                  <Link href="/order" onClick={() => sendOrder({service_id: '30'})}>Подписчики</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '31'})}>Просмотры</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '32'})}>Просмотры трансляций</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '33'})}>Просмотры Shorts</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '34'})}>Лайки</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '35'})}>Дизлайки</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '36'})}>Комментарии</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '37'})}>Репосты</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '38'})}>Часы просмотров</Link>
                </nav>
              </div>
            </div>
            <div className="servicePodmenuItem">
              <div className="servicePodmenuItem__top">
                <div className="servicePodmenuItem__title">
                  <i>
                    <img src="img/design/pmicon6.png" alt="" />
                  </i>
                  <span>Twitch</span>
                </div>
                <button
                  className={smclick5 ? "button__act" : ""}
                  onClick={toggleSmclick5}
                  type="button"
                >
                  <svg
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  smclick5
                    ? "servicePodmenuItem__cont act"
                    : "servicePodmenuItem__cont"
                }`}
              >
                <nav>
                  <Link href="/order" onClick={() => sendOrder({service_id: '39'})}>Просмотры</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '40'})}>Подписчики</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '41'})}>Зрители</Link>
                </nav>
              </div>
            </div>
            <div className="servicePodmenuItem">
              <div className="servicePodmenuItem__top">
                <div className="servicePodmenuItem__title">
                  <i>
                    <img src="img/design/pmicon7.png" alt="" />
                  </i>
                  <span>Facebook</span>
                </div>
                <button
                  className={smclick6 ? "button__act" : ""}
                  onClick={toggleSmclick6}
                  type="button"
                >
                  <svg
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  smclick6
                    ? "servicePodmenuItem__cont act"
                    : "servicePodmenuItem__cont"
                }`}
              >
                <nav>
                  <Link href="/order" onClick={() => sendOrder({service_id: '42'})}>Подписчики</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '43'})}>Лайки</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '44'})}>Просмотры</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '45'})}>Комментарии</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '46'})}>Истории</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '47'})}>Зрители</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '48'})}>Статистика</Link>
                </nav>
              </div>
            </div>
            <div className="servicePodmenuItem">
              <div className="servicePodmenuItem__top">
                <div className="servicePodmenuItem__title">
                  <i>
                    <img src="img/design/pmicon8.png" alt="" />
                  </i>
                  <span>Twitter</span>
                </div>
                <button
                  className={smclick7 ? "button__act" : ""}
                  onClick={toggleSmclick7}
                  type="button"
                >
                  <svg
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  smclick7
                    ? "servicePodmenuItem__cont act"
                    : "servicePodmenuItem__cont"
                }`}
              >
                <nav>
                  <Link href="/order" onClick={() => sendOrder({service_id: '49'})}>Подписчики</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '50'})}>Лайки</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '51'})}>Комментарии</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '52'})}>Репосты</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '53'})}>Просмотры на видео</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '54'})}>Просмотры на пост</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '55'})}>Накрутка опросов</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '56'})}>Прослушивания</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '57'})}>Релиз плейлиста</Link>
                </nav>
              </div>
            </div>
            <div className="servicePodmenuItem">
              <div className="servicePodmenuItem__top">
                <div className="servicePodmenuItem__title">
                  <i>
                    <img src="img/design/pmicon9.png" alt="" />
                  </i>
                  <span>RuTube</span>
                </div>
                <button
                  className={smclick8 ? "button__act" : ""}
                  onClick={toggleSmclick8}
                  type="button"
                >
                  <svg
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976315 15.3166 -0.0976315 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                      fill="#E0E0E0"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  smclick8
                    ? "servicePodmenuItem__cont act"
                    : "servicePodmenuItem__cont"
                }`}
              >
                <nav>
                  <Link href="/order" onClick={() => sendOrder({service_id: '58'})}>Подписчики</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '59'})}>Лайки</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '60'})}>Комментарии</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '61'})}>Репосты</Link>
                  <Link href="/order" onClick={() => sendOrder({service_id: '62'})}>Просмотры</Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
