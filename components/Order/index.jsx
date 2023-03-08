import { useState } from "react";

export default function Order() {
  const [social, setSocial] = useState("");
  const [service_1, setService_1] = useState("");
  const [service_2, setService_2] = useState("");

  return (
    <>
      <div className="section1__wrap">
        <div className="section1Items">
          <div className="section1Items__title">
            Сначала выберите социальную сеть
          </div>
          <div className="section1Items__wr">
            <button
              onClick={() => setSocial("instagram")}
              className={`section1Item ${
                social === "instagram" && "section1Item--act"
              }`}
              type="button"
            >
              <div className="section1Item__ico">
                <img src="img/design/bz1.svg" alt="" />
              </div>
              <div className="section1Item__txt">Instagram</div>
            </button>
            <button
              onClick={() => setSocial("twitter")}
              className={`section1Item ${
                social === "twitter" && "section1Item--act"
              }`}
              type="button"
            >
              <div className="section1Item__ico">
                <img src="img/design/bz2.svg" alt="" />
              </div>
              <div className="section1Item__txt">Twitter</div>
            </button>
            <button
              onClick={() => setSocial("vk")}
              className={`section1Item ${
                social === "vk" && "section1Item--act"
              }`}
              type="button"
            >
              <div className="section1Item__ico">
                <img src="img/design/bz3.svg" alt="" />
              </div>
              <div className="section1Item__txt">VK</div>
            </button>
            <button
              onClick={() => setSocial("youtube")}
              className={`section1Item ${
                social === "youtube" && "section1Item--act"
              }`}
              type="button"
            >
              <div className="section1Item__ico">
                <img src="img/design/bz4.svg" alt="" />
              </div>
              <div className="section1Item__txt">YouTube</div>
            </button>
            <button
              onClick={() => setSocial("telegram")}
              className={`section1Item ${
                social === "telegram" && "section1Item--act"
              }`}
              type="button"
            >
              <div className="section1Item__ico">
                <img src="img/design/bz5.svg" alt="" />
              </div>
              <div className="section1Item__txt">Telegram</div>
            </button>
            <button
              onClick={() => setSocial("facebook")}
              className={`section1Item ${
                social === "facebook" && "section1Item--act"
              }`}
              type="button"
            >
              <div className="section1Item__ico">
                <img src="img/design/bz6.svg" alt="" />
              </div>
              <div className="section1Item__txt">Facebook</div>
            </button>
            <button
              onClick={() => setSocial("tiktok")}
              className={`section1Item ${
                social === "tiktok" && "section1Item--act"
              }`}
              type="button"
            >
              <div className="section1Item__ico">
                <img src="img/design/bz7.svg" alt="" />
              </div>
              <div className="section1Item__txt">TikTok</div>
            </button>
            <button
              onClick={() => setSocial("twitch")}
              className={`section1Item ${
                social === "twitch" && "section1Item--act"
              }`}
              type="button"
            >
              <div className="section1Item__ico">
                <img src="img/design/bz8.svg" alt="" />
              </div>
              <div className="section1Item__txt">Twitch</div>
            </button>
            <button
              onClick={() => setSocial("rutube")}
              className={`section1Item section1Item--full ${
                social === "rutube" && "section1Item--act"
              }`}
              type="button"
            >
              <div className="section1Item__ico">
                <img src="img/design/bz9.svg" alt="" />
              </div>
              <div className="section1Item__txt">RuTube</div>
            </button>
          </div>
        </div>
        <div className="section1Items">
          <div className="section1Items__title">Затем выберите услугу</div>
          <div className="section1Items__steps">
            {!!(social && service_1) || (
              <>
                <div className="section1Items__step1">
                  <div className="section1Itemstep1">
                    <label className="checkbox_vib checkbox_vib--check">
                      <input
                        type="radio"
                        className="checkbox_vib__real"
                        value="1"
                        checked={service_1 == "1" ? true : false}
                        onChange={() => setService_1("1")}
                        name="t1"
                      />
                      <span className="checkbox_vib__fake"></span>{" "}
                      <span className="checkbox_vib__title">1 вариант</span>
                    </label>
                    <label className="checkbox_vib checkbox_vib--check">
                      <input
                        type="radio"
                        className="checkbox_vib__real"
                        value="2"
                        checked={service_1 == "2" ? true : false}
                        onChange={() => setService_1("2")}
                        name="t1"
                      />{" "}
                      <span className="checkbox_vib__fake"></span>{" "}
                      <span className="checkbox_vib__title">2 вариант</span>
                    </label>
                    <label className="checkbox_vib checkbox_vib--check checkbox_vib--mb0">
                      <input
                        type="radio"
                        className="checkbox_vib__real"
                        value="3"
                        checked={service_1 == "3" ? true : false}
                        onChange={() => setService_1("3")}
                        name="t1"
                      />{" "}
                      <span className="checkbox_vib__fake"></span>{" "}
                      <span className="checkbox_vib__title">3 вариант</span>
                    </label>
                  </div>
                </div>
              </>
            )}
            {!!social && !!service_1 && (
              <>
                <div className="section1Items__wr2">
                  <button
                    onClick={() => setService_2("subscribers")}
                    className={`section1Item ${
                      service_2 === "subscribers" && "section1Item--act"
                    }`}
                    type="button"
                  >
                    <div className="section1Item__ico">
                      <img src="img/design/u1.svg" alt="" />
                    </div>
                    <div className="section1Item__txt">Подписчики</div>
                  </button>
                  <button
                    onClick={() => setService_2("spectators")}
                    className={`section1Item ${
                      service_2 === "spectators" && "section1Item--act"
                    }`}
                    type="button"
                  >
                    <div className="section1Item__ico">
                      <img src="img/design/u2.svg" alt="" />
                    </div>
                    <div className="section1Item__txt">Зрители</div>
                  </button>
                  <button
                    onClick={() => setService_2("liks")}
                    className={`section1Item ${
                      service_2 === "liks" && "section1Item--act"
                    }`}
                    type="button"
                  >
                    <div className="section1Item__ico">
                      <img src="img/design/u3.svg" alt="" />
                    </div>
                    <div className="section1Item__txt">Лайки</div>
                  </button>
                  <button
                    onClick={() => setService_2("static")}
                    className={`section1Item ${
                      service_2 === "static" && "section1Item--act"
                    }`}
                    type="button"
                  >
                    <div className="section1Item__ico">
                      <img src="img/design/u4.svg" alt="" />
                    </div>
                    <div className="section1Item__txt">Статистика</div>
                  </button>
                  <button
                    onClick={() => setService_2("views")}
                    className={`section1Item ${
                      service_2 === "views" && "section1Item--act"
                    }`}
                    type="button"
                  >
                    <div className="section1Item__ico">
                      <img src="img/design/u5.svg" alt="" />
                    </div>
                    <div className="section1Item__txt">Просмотры</div>
                  </button>
                  <button
                    onClick={() => setService_2("IGTV")}
                    className={`section1Item ${
                      service_2 === "IGTV" && "section1Item--act"
                    }`}
                    type="button"
                  >
                    <div className="section1Item__ico">
                      <img src="img/design/u6.svg" alt="" />
                    </div>
                    <div className="section1Item__txt">IGTV</div>
                  </button>
                  <button
                    onClick={() => setService_2("comments")}
                    className={`section1Item ${
                      service_2 === "comments" && "section1Item--act"
                    }`}
                    type="button"
                  >
                    <div className="section1Item__ico">
                      <img src="img/design/u7.svg" alt="" />
                    </div>
                    <div className="section1Item__txt">Комментарии</div>
                  </button>
                  <button
                    onClick={() => setService_2("reels")}
                    className={`section1Item ${
                      service_2 === "reels" && "section1Item--act"
                    }`}
                    type="button"
                  >
                    <div className="section1Item__ico">
                      <img src="img/design/u8.svg" alt="" />
                    </div>
                    <div className="section1Item__txt">Reels</div>
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="section1Items__wr1">
            <button
              onClick={() => alert(social, service_1, service_2)}
              disabled={!(social && service_2 && service_1)}
              type="button"
              className="orangeButtonOrange"
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
      <div className="section1__wrap-mobile">
        {!social && (
          <div className="section1Items">
            <div className="section1Items__title">
              Сначала выберите социальную сеть
            </div>
            <div className="section1Items__wr">
              <button
                onClick={() => setSocial("instagram")}
                className={`section1Item ${
                  social === "instagram" && "section1Item--act"
                }`}
                type="button"
              >
                <div className="section1Item__ico">
                  <img src="img/design/bz1.svg" alt="" />
                </div>
                <div className="section1Item__txt">Instagram</div>
              </button>
              <button
                onClick={() => setSocial("twitter")}
                className={`section1Item ${
                  social === "twitter" && "section1Item--act"
                }`}
                type="button"
              >
                <div className="section1Item__ico">
                  <img src="img/design/bz2.svg" alt="" />
                </div>
                <div className="section1Item__txt">Twitter</div>
              </button>
              <button
                onClick={() => setSocial("vk")}
                className={`section1Item ${
                  social === "vk" && "section1Item--act"
                }`}
                type="button"
              >
                <div className="section1Item__ico">
                  <img src="img/design/bz3.svg" alt="" />
                </div>
                <div className="section1Item__txt">VK</div>
              </button>
              <button
                onClick={() => setSocial("youtube")}
                className={`section1Item ${
                  social === "youtube" && "section1Item--act"
                }`}
                type="button"
              >
                <div className="section1Item__ico">
                  <img src="img/design/bz4.svg" alt="" />
                </div>
                <div className="section1Item__txt">YouTube</div>
              </button>
              <button
                onClick={() => setSocial("telegram")}
                className={`section1Item ${
                  social === "telegram" && "section1Item--act"
                }`}
                type="button"
              >
                <div className="section1Item__ico">
                  <img src="img/design/bz5.svg" alt="" />
                </div>
                <div className="section1Item__txt">Telegram</div>
              </button>
              <button
                onClick={() => setSocial("facebook")}
                className={`section1Item ${
                  social === "facebook" && "section1Item--act"
                }`}
                type="button"
              >
                <div className="section1Item__ico">
                  <img src="img/design/bz6.svg" alt="" />
                </div>
                <div className="section1Item__txt">Facebook</div>
              </button>
              <button
                onClick={() => setSocial("tiktok")}
                className={`section1Item ${
                  social === "tiktok" && "section1Item--act"
                }`}
                type="button"
              >
                <div className="section1Item__ico">
                  <img src="img/design/bz7.svg" alt="" />
                </div>
                <div className="section1Item__txt">TikTok</div>
              </button>
              <button
                onClick={() => setSocial("twitch")}
                className={`section1Item ${
                  social === "twitch" && "section1Item--act"
                }`}
                type="button"
              >
                <div className="section1Item__ico">
                  <img src="img/design/bz8.svg" alt="" />
                </div>
                <div className="section1Item__txt">Twitch</div>
              </button>
              <button
                onClick={() => setSocial("rutube")}
                className={`section1Item section1Item--full ${
                  social === "rutube" && "section1Item--act"
                }`}
                type="button"
              >
                <div className="section1Item__ico">
                  <img src="img/design/bz9.svg" alt="" />
                </div>
                <div className="section1Item__txt">RuTube</div>
              </button>
            </div>
          </div>
        )}
        {!!social && (
          <div className="section1Items">
            <div className="section1Items__title">Затем выберите услугу</div>
            <div className="section1Items__steps">
              <div className="section1Items__wr2">
                <button
                  onClick={() => setService_2("subscribers")}
                  className={`section1Item ${
                    service_2 === "subscribers" && "section1Item--act"
                  }`}
                  type="button"
                >
                  <div className="section1Item__ico">
                    <img src="img/design/u1.svg" alt="" />
                  </div>
                  <div className="section1Item__txt">Подписчики</div>
                </button>
                <button
                  onClick={() => setService_2("spectators")}
                  className={`section1Item ${
                    service_2 === "spectators" && "section1Item--act"
                  }`}
                  type="button"
                >
                  <div className="section1Item__ico">
                    <img src="img/design/u2.svg" alt="" />
                  </div>
                  <div className="section1Item__txt">Зрители</div>
                </button>
                <button
                  onClick={() => setService_2("liks")}
                  className={`section1Item ${
                    service_2 === "liks" && "section1Item--act"
                  }`}
                  type="button"
                >
                  <div className="section1Item__ico">
                    <img src="img/design/u3.svg" alt="" />
                  </div>
                  <div className="section1Item__txt">Лайки</div>
                </button>
                <button
                  onClick={() => setService_2("static")}
                  className={`section1Item ${
                    service_2 === "static" && "section1Item--act"
                  }`}
                  type="button"
                >
                  <div className="section1Item__ico">
                    <img src="img/design/u4.svg" alt="" />
                  </div>
                  <div className="section1Item__txt">Статистика</div>
                </button>
                <button
                  onClick={() => setService_2("views")}
                  className={`section1Item ${
                    service_2 === "views" && "section1Item--act"
                  }`}
                  type="button"
                >
                  <div className="section1Item__ico">
                    <img src="img/design/u5.svg" alt="" />
                  </div>
                  <div className="section1Item__txt">Просмотры</div>
                </button>
                <button
                  onClick={() => setService_2("IGTV")}
                  className={`section1Item ${
                    service_2 === "IGTV" && "section1Item--act"
                  }`}
                  type="button"
                >
                  <div className="section1Item__ico">
                    <img src="img/design/u6.svg" alt="" />
                  </div>
                  <div className="section1Item__txt">IGTV</div>
                </button>
                <button
                  onClick={() => setService_2("comments")}
                  className={`section1Item ${
                    service_2 === "comments" && "section1Item--act"
                  }`}
                  type="button"
                >
                  <div className="section1Item__ico">
                    <img src="img/design/u7.svg" alt="" />
                  </div>
                  <div className="section1Item__txt">Комментарии</div>
                </button>
                <button
                  onClick={() => setService_2("reels")}
                  className={`section1Item ${
                    service_2 === "reels" && "section1Item--act"
                  }`}
                  type="button"
                >
                  <div className="section1Item__ico">
                    <img src="img/design/u8.svg" alt="" />
                  </div>
                  <div className="section1Item__txt">Reels</div>
                </button>
              </div>
            </div>
            <div className="section1Items__wr1">
              <button
                onClick={() => {
                  setService_2("");
                  setSocial("");
                }}
                className="buttonBack"
              >
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z"
                    fill="#A3ACC5"
                  />
                </svg>
              </button>
              <button
                onClick={() => alert(social, service_2)}
                disabled={!(social && service_2)}
                type="button"
                className="orangeButtonOrange"
              >
                Оформить заказ
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
