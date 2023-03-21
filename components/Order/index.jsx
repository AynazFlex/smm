import { useRouter } from "next/router";
import { useState } from "react";

export default function Order({ catalog }) {
  const [social, setSocial] = useState("");
  const [service_1, setService_1] = useState("");
  const [service_2, setService_2] = useState(null);
  const router = useRouter();

  return (
    <>
      <div className="section1__wrap">
        <div className="section1Items">
          <div className="section1Items__title">
            Сначала выберите социальную сеть
          </div>
          <div className="section1Items__wr">
            {!!catalog &&
              catalog.categories.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSocial(item.id)}
                  className={`section1Item ${
                    social === item.id && "section1Item--act"
                  }`}
                  type="button"
                >
                  <div className="section1Item__ico">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="section1Item__txt">{item.name}</div>
                </button>
              ))}
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
                  {!!catalog &&
                    catalog.types[social].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setService_2(item)}
                        className={`section1Item ${
                          service_2?.id === item.id && "section1Item--act"
                        }`}
                        type="button"
                      >
                        <div className="section1Item__ico">
                          <img src={item.icon} alt="" />
                        </div>
                        <div className="section1Item__txt">{item.name}</div>
                      </button>
                    ))}
                </div>
              </>
            )}
          </div>
          <div className="section1Items__wr1">
            <button
              onClick={() => router.push(`/order/${service_2?.slug}`)}
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
              {!!catalog &&
                catalog.categories.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSocial(item.id)}
                    className={`section1Item ${
                      social === item.id && "section1Item--act"
                    }`}
                    type="button"
                  >
                    <div className="section1Item__ico">
                      <img src={item.icon} alt="" />
                    </div>
                    <div className="section1Item__txt">{item.name}</div>
                  </button>
                ))}
            </div>
          </div>
        )}
        {!!social && (
          <div className="section1Items">
            <div className="section1Items__title">Затем выберите услугу</div>
            <div className="section1Items__steps">
              <div className="section1Items__wr2">
                {!!catalog &&
                  catalog.types[social].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setService_2(item)}
                      className={`section1Item ${
                        service_2?.id === item.id && "section1Item--act"
                      }`}
                      type="button"
                    >
                      <div className="section1Item__ico">
                        <img src={item.icon} alt="" />
                      </div>
                      <div className="section1Item__txt">{item.name}</div>
                    </button>
                  ))}
              </div>
            </div>
            <div className="section1Items__wr1">
              <button
                onClick={() => {
                  setService_2(null);
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
                onClick={() => router.push(`/order/${service_2?.slug}`)}
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
