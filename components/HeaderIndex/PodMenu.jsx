import { useState } from "react";
import "./HeaderIndex.sass";

export default function PodMenu({ setPodmenu }) {
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
                  <a href="#">Подписчики</a>
                  <a href="#">Лайки</a>
                  <a href="#">Просмотры</a>
                  <a href="#">Комментарии</a>
                  <a href="#">Истории</a>
                  <a href="#">Зрители</a>
                  <a href="#">Статистика</a>
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
                  <a href="#">Подписчики</a>
                  <a href="#">Просмотры</a>
                  <a href="#">Реакции</a>
                  <a href="#">Голосование</a>
                  <a href="#">Репосты</a>
                  <a href="#">Старт бота</a>
                  <a href="#">Telegraph просмотры</a>
                  <a href="#">Комментарии</a>
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
                  <a href="#">Подписчики</a>
                  <a href="#">Лайки</a>
                  <a href="#">Комментарии</a>
                  <a href="#">Репосты</a>
                  <a href="#">Просмотры на видео</a>
                  <a href="#">Просмотры на пост</a>
                  <a href="#">Накрутка опросов</a>
                  <a href="#">Прослушивания</a>
                  <a href="#">Релиз плейлиста</a>
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
                  <a href="#">Подписчики</a>
                  <a href="#">Лайки</a>
                  <a href="#">Комментарии</a>
                  <a href="#">Репосты</a>
                  <a href="#">Просмотры</a>
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
                  <a href="#">Подписчики</a>
                  <a href="#">Просмотры</a>
                  <a href="#">Просмотры трансляций</a>
                  <a href="#">Просмотры Shorts</a>
                  <a href="#">Лайки</a>
                  <a href="#">Дизлайки</a>
                  <a href="#">Комментарии</a>
                  <a href="#">Репосты</a>
                  <a href="#">Часы просмотров</a>
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
                  <a href="#">Просмотры</a>
                  <a href="#">Подписчики</a>
                  <a href="#">Зрители</a>
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
                  <a href="#">Подписчики</a>
                  <a href="#">Лайки</a>
                  <a href="#">Просмотры</a>
                  <a href="#">Комментарии</a>
                  <a href="#">Истории</a>
                  <a href="#">Зрители</a>
                  <a href="#">Статистика</a>
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
                  <a href="#">Подписчики</a>
                  <a href="#">Лайки</a>
                  <a href="#">Комментарии</a>
                  <a href="#">Репосты</a>
                  <a href="#">Просмотры на видео</a>
                  <a href="#">Просмотры на пост</a>
                  <a href="#">Накрутка опросов</a>
                  <a href="#">Прослушивания</a>
                  <a href="#">Релиз плейлиста</a>
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
                  <a href="#">Подписчики</a>
                  <a href="#">Лайки</a>
                  <a href="#">Комментарии</a>
                  <a href="#">Репосты</a>
                  <a href="#">Просмотры</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
