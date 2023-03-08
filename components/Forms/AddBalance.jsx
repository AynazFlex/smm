import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import form from "./Forms.module.scss";
import { balanceTopUp, reset } from "../../store/apiReducer";
import { useRouter } from "next/router";

export default function AddBalance({ setClose }) {
  const wrapper = useRef(null);
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState(1);
  const { success, error, msg, url, isPending } = useSelector(
    (state) => state.api
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const close = (e) => e.target.closest(`.${form.form}`) || setClose();

    wrapper.current.addEventListener("click", close);
  }, []);

  useEffect(() => {
    if (success) {
      router.push(url);
      dispatch(reset());
      setClose();
    }
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(balanceTopUp(amount, method));
  };

  return (
    <div ref={wrapper} className={form.wrapper}>
      <form className={form.form} onSubmit={handleSubmit}>
        <button type="button" onClick={setClose} className={form.form__close}>
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
        <div className={form.form__title}>Пополнение баланса</div>
        <label>
          Сумма пополнения
          <input
            className={form.form__mt12px}
            value={amount}
            onChange={(e) =>
              setAmount(
                e.target.value
                  .split("")
                  .filter((item) => "0123456789".includes(item))
                  .join("")
              )
            }
          />
          <span className={form.warning}>Минимум 15 ₽</span>
        </label>
        <div className={form.setButtons}>
          <div className={form.setButtons__1}>
            <button onClick={() => setAmount(250)} type="button">
              250 ₽
            </button>
            <button onClick={() => setAmount(500)} type="button">
              500 ₽
            </button>
            <button onClick={() => setAmount(1000)} type="button">
              1 000 ₽
            </button>
            <button onClick={() => setAmount(2500)} type="button">
              2 500 ₽
            </button>
            <button onClick={() => setAmount(5000)} type="button">
              5 000 ₽
            </button>
          </div>
          <div className={form.setButtons__title}>Дополнить до</div>
          <div className={form.setButtons__2}>
            <button onClick={() => setAmount(1050)} type="button">
              1 000 ₽<span>+ 50 ₽</span>
            </button>
            <button onClick={() => setAmount(3000)} type="button">
              2 500 ₽<span>+ 500 ₽</span>
            </button>
            <button onClick={() => setAmount(6000)} type="button">
              5 000 ₽<span>+ 1000 ₽</span>
            </button>
          </div>
        </div>
        <div className={form.form__title_2}>Способ оплаты</div>
        <div className={form.form__method}>
          <button
            className={
              method === 1 ? form.methodButton__act : form.methodButton
            }
            onClick={() => setMethod(1)}
            type="button"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="12" fill="white" />
              <rect
                x="8.25"
                y="12.25"
                width="31.5"
                height="22.3571"
                rx="1.75"
                fill="white"
                stroke="#F5F5F5"
                strokeWidth="0.5"
              />
              <g mask="url(#mask0_1186_7697)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 27.2382H40V19.6191H8V27.2382Z"
                  fill="#0C47B7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 34.8573H40V27.2383H8V34.8573Z"
                  fill="#E53B35"
                />
              </g>
            </svg>
            Карта РФ
          </button>
          <button
            className={
              method === 2 ? form.methodButton__act : form.methodButton
            }
            onClick={() => setMethod(2)}
            type="button"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="12" fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.667 18.6668C10.667 15.7213 13.0548 13.3335 16.0003 13.3335H32.0003C34.9458 13.3335 37.3337 15.7213 37.3337 18.6668V29.3335C37.3337 32.279 34.9458 34.6668 32.0003 34.6668H16.0003C13.0548 34.6668 10.667 32.279 10.667 29.3335V18.6668ZM16.0003 16.0002C14.5276 16.0002 13.3337 17.1941 13.3337 18.6668V29.3335C13.3337 30.8063 14.5276 32.0002 16.0003 32.0002H32.0003C33.4731 32.0002 34.667 30.8063 34.667 29.3335V18.6668C34.667 17.1941 33.4731 16.0002 32.0003 16.0002H16.0003Z"
                fill="#B0B0B0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36 22.6667H12V20H36V22.6667Z"
                fill="#B0B0B0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.333 27.9998C25.333 27.2635 25.93 26.6665 26.6663 26.6665L30.6663 26.6665C31.4027 26.6665 31.9997 27.2635 31.9997 27.9998C31.9997 28.7362 31.4027 29.3332 30.6663 29.3332L26.6663 29.3332C25.93 29.3332 25.333 28.7362 25.333 27.9998Z"
                fill="#B0B0B0"
              />
            </svg>
            Карта другой страны
          </button>
          <button
            className={
              method === 3 ? form.methodButton__act : form.methodButton
            }
            onClick={() => setMethod(3)}
            type="button"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="12" fill="white" />
              <g clipPath="url(#clip0_1186_7650)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.277 35.814C31.986 35.814 34.925 36.741 38.179 39.618C38.505 39.906 38.939 39.548 38.654 39.19C35.457 35.161 32.5 34.394 29.551 33.746C25.943 32.952 24.088 30.926 22.795 28.702C22.538 28.26 22.422 28.338 22.399 28.907C22.37 29.602 22.419 30.523 22.575 31.429C22.429 31.435 22.283 31.434 22.135 31.434C16.975 31.434 12.791 27.258 12.791 22.107C12.791 16.957 16.975 12.782 22.136 12.782C27.296 12.782 31.48 16.957 31.48 22.107C31.48 22.474 31.462 22.837 31.42 23.192C30.738 23.069 29.395 23.055 28.453 23.136C28.099 23.167 28.149 23.332 28.417 23.38C31.506 23.937 33.627 25.848 34.113 29.315C34.123 29.395 34.229 29.418 34.27 29.349C35.5835 27.162 36.2753 24.6581 36.271 22.107C36.271 14.317 29.942 8 22.136 8C14.329 8 8 14.316 8 22.107C8 29.899 14.329 36.216 22.136 36.216C24.206 36.216 26.262 35.814 29.277 35.814ZM30.329 30.692C30.958 31.222 31.149 31.853 30.817 32.298C30.632 32.542 30.332 32.677 29.972 32.677C29.6208 32.6771 29.2807 32.5539 29.011 32.329C28.439 31.83 28.271 31.022 28.644 30.563C28.79 30.383 29.027 30.284 29.311 30.284C29.656 30.284 30.018 30.429 30.329 30.692ZM33.231 29.344C33.323 29.962 33.128 30.218 32.931 30.218C32.716 30.218 32.447 29.968 32.13 29.473C31.816 28.985 31.701 28.425 31.857 28.142C31.959 27.955 32.174 27.873 32.445 27.976C32.97 28.173 33.175 28.975 33.231 29.344ZM52.825 26.114L51.195 24.157C51.1568 24.1109 51.1325 24.0548 51.125 23.9953C51.1175 23.9359 51.1271 23.8755 51.1528 23.8213C51.1784 23.7672 51.2189 23.7214 51.2696 23.6895C51.3203 23.6575 51.3791 23.6407 51.439 23.641H54.848C55.01 23.159 55.102 22.644 55.102 22.108C55.102 19.658 53.274 17.545 50.766 17.545C48.258 17.545 46.43 19.658 46.43 22.108C46.43 24.558 48.258 26.642 50.766 26.642C51.526 26.642 52.222 26.448 52.826 26.113L52.825 26.114ZM60.199 29.419C60.376 29.615 60.231 29.929 59.964 29.929H56.244C56.1692 29.9291 56.0954 29.9127 56.0276 29.8811C55.9599 29.8495 55.8999 29.8034 55.852 29.746L55.222 28.989C53.8952 29.8495 52.3474 30.3066 50.766 30.305C46.237 30.305 42.553 26.628 42.553 22.108C42.553 17.588 46.237 13.911 50.766 13.911C55.295 13.911 58.979 17.588 58.979 22.108C58.979 23.738 58.499 25.256 57.674 26.534L60.199 29.419ZM94.568 14.29H91.531C91.4242 14.2903 91.3218 14.3328 91.2463 14.4083C91.1708 14.4838 91.1283 14.5862 91.128 14.693V29.526C91.128 29.749 91.308 29.929 91.531 29.929H94.568C94.791 29.929 94.972 29.749 94.972 29.526V14.692C94.972 14.5849 94.9294 14.4821 94.8537 14.4063C94.7779 14.3306 94.6751 14.288 94.568 14.288V14.29ZM89.458 14.29H86.062C85.9757 14.2897 85.8916 14.317 85.822 14.3679C85.7523 14.4188 85.7008 14.4907 85.675 14.573L82.987 23.339L80.032 14.563C80.0049 14.4829 79.9534 14.4134 79.8847 14.3642C79.8159 14.3151 79.7335 14.2887 79.649 14.289H77.279C77.1943 14.2887 77.1117 14.315 77.0428 14.3641C76.9739 14.4133 76.9222 14.4829 76.895 14.563L73.941 23.339L71.253 14.573C71.2273 14.4905 71.1759 14.4184 71.1062 14.3673C71.0366 14.3162 70.9524 14.2887 70.866 14.289H67.469C67.4052 14.2891 67.3423 14.3043 67.2855 14.3333C67.2287 14.3623 67.1795 14.4044 67.142 14.456C67.1045 14.5071 67.0799 14.5665 67.0701 14.6292C67.0604 14.6918 67.0658 14.7559 67.086 14.816L72.076 29.657C72.131 29.821 72.286 29.931 72.459 29.931H75.155C75.329 29.931 75.483 29.821 75.538 29.658L78.464 20.987L81.389 29.657C81.444 29.821 81.599 29.931 81.772 29.931H84.469C84.643 29.931 84.797 29.821 84.852 29.657L89.842 14.816C89.8621 14.7559 89.8676 14.692 89.8581 14.6293C89.8485 14.5667 89.8241 14.5073 89.787 14.456C89.7493 14.4043 89.7 14.3622 89.643 14.3332C89.586 14.3042 89.5229 14.289 89.459 14.289L89.458 14.29ZM65.8 14.693V29.526C65.8 29.749 65.62 29.929 65.396 29.929H62.36C62.253 29.929 62.1504 29.8866 62.0747 29.811C61.9989 29.7355 61.9563 29.633 61.956 29.526V14.692C61.956 14.469 62.136 14.288 62.36 14.288H65.396C65.619 14.288 65.8 14.468 65.8 14.692V14.693Z"
                  fill="#FF8C00"
                />
              </g>
              <defs>
                <clipPath id="clip0_1186_7650">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(8 8)"
                  />
                </clipPath>
              </defs>
            </svg>
            Qiwi
          </button>
        </div>
        <input
          value={`Оплатить ${!!amount ? amount + " ₽" : amount}`}
          disabled={!(amount && method) || isPending}
          type="submit"
        />
        {!!error && (
          <div className={`${form.form__error} ${form.form__mt32px}`}>
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
        {!!msg && (
          <div className={`${form.form__msg} ${form.form__mt32px}`}>
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
                d="M12 2.5C12.5523 2.5 13 2.94772 13 3.5L13 6.5C13 7.05228 12.5523 7.5 12 7.5C11.4477 7.5 11 7.05228 11 6.5L11 3.5C11 2.94772 11.4477 2.5 12 2.5Z"
                fill="#27AE60"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 12.5C17 11.9477 17.4477 11.5 18 11.5H21C21.5523 11.5 22 11.9477 22 12.5C22 13.0523 21.5523 13.5 21 13.5H18C17.4477 13.5 17 13.0523 17 12.5Z"
                fill="#27AE60"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22.5C11.4477 22.5 11 22.0523 11 21.5L11 18.5C11 17.9477 11.4477 17.5 12 17.5C12.5523 17.5 13 17.9477 13 18.5L13 21.5C13 22.0523 12.5523 22.5 12 22.5Z"
                fill="#27AE60"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12.5C2 11.9477 2.44772 11.5 3 11.5L6 11.5C6.55228 11.5 7 11.9477 7 12.5C7 13.0523 6.55228 13.5 6 13.5L3 13.5C2.44772 13.5 2 13.0523 2 12.5Z"
                fill="#27AE60"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.92879 5.42888C5.31931 5.03836 5.95248 5.03836 6.343 5.42888L8.46432 7.5502C8.85484 7.94072 8.85484 8.57389 8.46432 8.96441C8.0738 9.35494 7.44063 9.35494 7.05011 8.96441L4.92879 6.84309C4.53826 6.45257 4.53826 5.8194 4.92879 5.42888Z"
                fill="#27AE60"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.0706 5.42888C19.4611 5.8194 19.4611 6.45257 19.0706 6.84309L16.9493 8.96441C16.5588 9.35494 15.9256 9.35494 15.5351 8.96441C15.1446 8.57389 15.1446 7.94072 15.5351 7.5502L17.6564 5.42888C18.0469 5.03836 18.6801 5.03836 19.0706 5.42888Z"
                fill="#27AE60"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.0712 19.5711C18.6807 19.9616 18.0475 19.9616 17.657 19.5711L15.5357 17.4498C15.1452 17.0593 15.1452 16.4261 15.5357 16.0356C15.9262 15.6451 16.5594 15.6451 16.9499 16.0356L19.0712 18.1569C19.4617 18.5474 19.4617 19.1806 19.0712 19.5711Z"
                fill="#27AE60"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.92864 19.571C4.53811 19.1804 4.53811 18.5473 4.92864 18.1568L7.04996 16.0354C7.44048 15.6449 8.07364 15.6449 8.46417 16.0354C8.85469 16.426 8.85469 17.0591 8.46417 17.4496L6.34285 19.571C5.95232 19.9615 5.31916 19.9615 4.92864 19.571Z"
                fill="#27AE60"
              />
            </svg>
            {msg}
          </div>
        )}
      </form>
    </div>
  );
}
