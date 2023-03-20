import Link from "next/link";
import { useState, useEffect } from "react";
import "./HeaderIndex.sass";
import FormWrap from "../Forms/FormWrap";
import PodMenu from "./PodMenu";
import { useSelector } from "react-redux";
import AddBalance from "../Forms/AddBalance";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

const HeaderIndex = ({catalog}) => {
  const [scroll, setScroll] = useState(false);
  const [podmenu, setPodmenu] = useState(false);
  const [burger, setBurger] = useState(false);
  const [login, setLogin] = useState(false);
  const [balance, setBalance] = useState(false);
  const { isAuth } = useSelector(state => state.api)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = burger || login || balance ? "hidden" : "";
    }
  }, [burger, login, balance]);

  return (
    <>
      {login && <FormWrap setClose={() => setLogin(false)} />}
      {balance && <AddBalance setClose={() => setBalance(false)} />}
      {burger && (
        <div className="mobileMenu">
          <div className="container">
            <div className="container__elem container__elem--12">
              <div className="mobileMenu__top">
                <Link href="/" className="logo">
                  <img src="/img/design/logo.svg" alt="" />
                </Link>
                <button
                  type="button"
                  className="mobileMenu__close"
                  onClick={() => setBurger(false)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                      fill="#FF772D"
                    />
                    <path
                      d="M18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289Z"
                      fill="#FF772D"
                    />
                  </svg>
                </button>
              </div>
              <div className="mobileMenu__bottom">
                <nav>
                  <Link href="#" onClick={setPodmenu}>
                    <img src="/img/design/mm1.png" alt="Услуги" />
                  </Link>
                  <Link href="/#about" onClick={() => setBurger(false)}>
                    <img src="/img/design/mm2.png" alt="Отзывы" />
                  </Link>
                  <Link href="/#kak" onClick={() => setBurger(false)}>
                    <img src="/img/design/mm3.png" alt="Как это работает" />
                  </Link>
                  <Link href="/#preim" onClick={() => setBurger(false)}>
                    <img src="/img/design/mm4.png" alt="Преимущества" />
                  </Link>
                  <Link href="/#faqs" onClick={() => setBurger(false)}>
                    <img src="/img/design/mm5.png" alt="Частые вопросы" />
                  </Link>
                </nav>
                <Link href="/#zakaz" onClick={() => setBurger(false)} className="orangeButtonOrange">
                  Быстрый заказ
                </Link>
                <Link href="/" onClick={() => {
                  setBurger(false)
                  setLogin(true)
                }} className="orangeButton">
                  Войти
                </Link>

                <div className="helper">
                  <div className="helper__title">Нужна помощь?</div>
                  <div className="helper__buttons">
                    <button type="button">
                      <i>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 1.8C5.02355 1.8 1.8 5.02355 1.8 9C1.8 10.5229 2.27182 11.933 3.07725 13.0953C3.3438 13.48 3.40806 13.9936 3.19692 14.4478L2.38256 16.2H9C12.9764 16.2 16.2 12.9764 16.2 9C16.2 5.02355 12.9764 1.8 9 1.8ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18H1.67543C0.654628 18 0.00887521 16.914 0.48065 16.0214L1.45958 13.9152C0.53659 12.5018 0 10.8123 0 9Z"
                            fill="#B0B0B0"
                          />
                        </svg>
                      </i>
                      <span>Чат с поддержкой</span>
                    </button>
                    <Link href="/">
                      <i>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V8ZM6 6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H6Z"
                            fill="#B0B0B0"
                          />
                          <path
                            d="M6.21917 8.37534C6.56418 7.94408 7.19347 7.87416 7.62473 8.21917L12 11.7194L16.3753 8.21917C16.8066 7.87416 17.4359 7.94408 17.7809 8.37534C18.1259 8.8066 18.056 9.4359 17.6247 9.78091L12 14.2807L6.37534 9.78091C5.94408 9.4359 5.87416 8.8066 6.21917 8.37534Z"
                            fill="#B0B0B0"
                          />
                        </svg>
                      </i>
                      <span>support@smmsmm.net</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {podmenu && <PodMenu catalog={catalog} setPodmenu={setPodmenu} setBurger={setBurger}/>}
      <header className={scroll ? "header scrolled" : "header"}>
        <div className="header__top">
          <div className={isAuth ? "container container--jcsb" : "container"}>
            <div className="container__elem container__elem--8 container__elem--df container__elem--aic">
              <Link href="/" className="logo">
                <img src="/img/design/logo.svg" alt="" />
              </Link>
              <nav className="menu">
                <Link
                  href="/"
                  className={podmenu ? "menu__services act" : "menu__services"}
                  onMouseLeave={() => setPodmenu(false)}
                  onMouseEnter={setPodmenu}
                >
                  Услуги
                </Link>
                <Link href="/#about">Отзывы</Link>
                <Link href="/#kak">Как это работает</Link>
                <Link href="/#preim">Преимущества</Link>
                <Link href="/#faqs">Частые вопросы</Link>
              </nav>
            </div>
            <div className="container__elem container__elem--4 container__elem--df container__elem--aic container__elem--jcfend">
              <div className="headerButtons">
                {isAuth || <button onClick={() => setLogin(true)} className="orangeButton">
                  Войти
                </button>}
                <Link href="/order" className="orangeButtonOrange">
                  Быстрый заказ
                </Link>
                {isAuth && (
                  <>
                    <div className="balanceButton">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.6" d="M18.0002 14.0771C20.1482 13.6607 21.6002 12.8891 21.6002 11.9999V10.3991C20.7302 11.0135 19.4522 11.4335 18.0002 11.6927V14.0771ZM17.8238 10.5107C20.0738 10.1063 21.6002 9.3119 21.6002 8.3999V6.7991C20.2682 7.7399 17.981 8.2463 15.5738 8.3663C16.6802 8.9027 17.4938 9.6227 17.8238 10.5107ZM21.6002 4.7999C21.6002 3.4763 18.3746 2.3999 14.4002 2.3999C10.4246 2.3999 7.2002 3.4763 7.2002 4.7999C7.2002 6.1235 10.4258 7.1999 14.4002 7.1999C18.3758 7.1999 21.6002 6.1235 21.6002 4.7999Z" fill="#FFC000"/>
                        <path d="M9.60039 14.3999C13.576 14.3999 16.8004 13.0571 16.8004 11.3999C16.8004 9.7427 13.5748 8.3999 9.60039 8.3999C5.62479 8.3999 2.40039 9.7427 2.40039 11.3999C2.40039 13.0571 5.62599 14.3999 9.60039 14.3999ZM2.40039 17.5991V19.1999C2.40039 20.5235 5.62599 21.5999 9.60039 21.5999C13.576 21.5999 16.8004 20.5235 16.8004 19.1999V17.5991C15.2524 18.6899 12.4204 19.1999 9.60039 19.1999C6.78039 19.1999 3.94839 18.6899 2.40039 17.5991ZM2.40039 13.6643V15.5999C2.40039 16.9235 5.62599 17.9999 9.60039 17.9999C13.576 17.9999 16.8004 16.9235 16.8004 15.5999V13.6643C15.2524 14.9399 12.4168 15.5999 9.60039 15.5999C6.78399 15.5999 3.94839 14.9399 2.40039 13.6643Z" fill="#FFC000"/>
                      </svg>
                      1 653₽
                      <button onClick={() => setBalance(true)} type="button">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M2.33301 8.16683C2.33301 4.94517 4.94468 2.3335 8.16634 2.3335H19.833C23.0547 2.3335 25.6663 4.94517 25.6663 8.16683V19.8335C25.6663 23.0552 23.0547 25.6668 19.833 25.6668H8.16634C4.94468 25.6668 2.33301 23.0552 2.33301 19.8335V8.16683ZM8.16634 4.66683C6.23334 4.66683 4.66634 6.23383 4.66634 8.16683V19.8335C4.66634 21.7665 6.23334 23.3335 8.16634 23.3335H19.833C21.766 23.3335 23.333 21.7665 23.333 19.8335V8.16683C23.333 6.23383 21.766 4.66683 19.833 4.66683H8.16634Z" fill="#FF772D" fillOpacity="0.2"/>
                          <path d="M4.66634 8.16683C4.66634 6.23383 6.23334 4.66683 8.16634 4.66683H19.833C21.766 4.66683 23.333 6.23383 23.333 8.16683V19.8335C23.333 21.7665 21.766 23.3335 19.833 23.3335H8.16634C6.23334 23.3335 4.66634 21.7665 4.66634 19.8335V8.16683Z" fill="#FF772D" fillOpacity="0.2"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M14.0003 8.1665C14.6447 8.1665 15.167 8.68884 15.167 9.33317V12.8332H18.667C19.3113 12.8332 19.8337 13.3555 19.8337 13.9998C19.8337 14.6442 19.3113 15.1665 18.667 15.1665H15.167L15.167 18.6665C15.167 19.3108 14.6447 19.8332 14.0003 19.8332C13.356 19.8332 12.8337 19.3108 12.8337 18.6665L12.8337 15.1665H9.33366C8.68933 15.1665 8.16699 14.6442 8.16699 13.9998C8.16699 13.3555 8.68933 12.8332 9.33366 12.8332H12.8337V9.33317C12.8337 8.68884 13.356 8.1665 14.0003 8.1665Z" fill="#FF772D"/>
                        </svg>
                      </button>
                    </div>
                    <Link className="cabinetButton" href="/cabinet">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" fill="#FF772D"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 20C9.07106 20 7.33454 19.1139 6.3353 17.9708C6.03082 17.6225 5.95148 17.3163 5.96068 17.0651C5.97049 16.7971 6.08635 16.487 6.34713 16.1692C6.8828 15.5164 7.90124 15 8.99992 15H14.9999C16.0986 15 17.117 15.5164 17.6527 16.1692C17.9135 16.487 18.0293 16.7971 18.0392 17.0651C18.0484 17.3163 17.969 17.6225 17.6645 17.9708C16.6653 19.1139 14.9288 20 11.9999 20ZM4.8295 19.2871C6.30206 20.9716 8.65319 22 11.9999 22C15.3466 22 17.6978 20.9716 19.1703 19.2871C19.7746 18.5958 20.0675 17.8036 20.0378 16.9919C20.0087 16.1971 19.6744 15.48 19.1988 14.9004C18.2617 13.7585 16.6627 13 14.9999 13H8.99992C7.33717 13 5.73815 13.7585 4.80107 14.9004C4.32547 15.48 3.99113 16.1971 3.96202 16.9919C3.93229 17.8036 4.22527 18.5958 4.8295 19.2871Z" fill="#FF772D"/>
                      </svg>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="header__mobile">
          <div className="container">
            <div className="container__elem container__elem--12">
              <div className="headMob">
                <Link href="/" className="logo">
                  <img src="/img/design/logo.svg" alt="" />
                </Link>
                <div className="headMob__wr">
                  <Link href="/order" className="headMob__zakaz">
                    Быстрый заказ
                  </Link>
                  <button
                    type="button"
                    className="burger"
                    onClick={() => setBurger(true)}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3.75"
                        y="4.875"
                        width="16.5"
                        height="2.25"
                        rx="1.125"
                        fill="#FF772D"
                      />
                      <rect
                        x="3.75"
                        y="10.875"
                        width="16.5"
                        height="2.25"
                        rx="1.125"
                        fill="#FF772D"
                      />
                      <rect
                        x="3.75"
                        y="16.875"
                        width="16.5"
                        height="2.25"
                        rx="1.125"
                        fill="#FF772D"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderIndex;
