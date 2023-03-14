import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../store/apiReducer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import form from "./Forms.module.scss";

export default function Login({ setClose, setWtf }) {
  const { register, handleSubmit } = useForm();
  const { success, msg, error, isPending, url } = useSelector(
    (state) => state.api
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [type, setType] = useState("password");

  useEffect(() => {
    return () => dispatch(reset());
  }, [])

  useEffect(() => {
    if(success) {
      router.push(url);
      setClose()
    }
  }, [success]);

  const onSubmit = (data) => dispatch(login(data));

  return (
    <form className={form.form} onSubmit={handleSubmit(onSubmit)}>
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
      <div className={form.form__title}>Вход в аккаунт</div>
      <label>
        E-mail
        <input
          placeholder="Введите E-mail"
          {...register("email", {
            required: true,
          })}
        />
      </label>
      <label>
        Пароль
        <input
          type={type}
          placeholder="Введите пароль"
          {...register("password", { required: true })}
        />
        <button
          type="button"
          onPointerDown={() => setType("text")}
          onPointerUp={() => setType("password")}
        >
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.95535 4.25873C3.38925 5.63218 2.34505 7.19804 1.89979 7.93694C1.8752 7.97775 1.8752 8.02225 1.89979 8.06306C2.34505 8.80196 3.38925 10.3678 4.95535 11.7413C6.52095 13.1143 8.5546 14.25 11.0001 14.25C13.4455 14.25 15.4792 13.1143 17.0448 11.7413C18.6109 10.3678 19.6551 8.80196 20.1003 8.06306C20.1249 8.02225 20.1249 7.97775 20.1003 7.93694C19.655 7.19804 18.6109 5.63218 17.0448 4.25873C15.4792 2.88571 13.4455 1.75 11.0001 1.75C8.5546 1.75 6.52095 2.88571 4.95535 4.25873ZM3.96632 3.13097C5.69404 1.61578 8.06564 0.25 11.0001 0.25C13.9345 0.25 16.3061 1.61578 18.0338 3.13097C19.761 4.64573 20.8982 6.35478 21.3851 7.16274C21.6966 7.67979 21.6966 8.3202 21.3851 8.83726C20.8982 9.64521 19.761 11.3543 18.0338 12.869C16.3061 14.3842 13.9345 15.75 11.0001 15.75C8.06564 15.75 5.69404 14.3842 3.96632 12.869C2.2391 11.3543 1.1019 9.64522 0.615029 8.83726C0.303454 8.32021 0.303453 7.6798 0.615029 7.16274C1.1019 6.35479 2.2391 4.64573 3.96632 3.13097ZM11.0001 5.75C9.75741 5.75 8.75005 6.75736 8.75005 8C8.75005 9.24264 9.75741 10.25 11.0001 10.25C12.2427 10.25 13.2501 9.24264 13.2501 8C13.2501 6.75736 12.2427 5.75 11.0001 5.75ZM7.25005 8C7.25005 5.92893 8.92898 4.25 11.0001 4.25C13.0711 4.25 14.7501 5.92893 14.7501 8C14.7501 10.0711 13.0711 11.75 11.0001 11.75C8.92898 11.75 7.25005 10.0711 7.25005 8Z"
              fill="#A3ACC5"
            />
          </svg>
        </button>
      </label>
      <button onClick={() => setWtf("recovery")} type="button" className={form.form__recovery}>
        Забыли пароль?
      </button>
      {!!error && (
        <div className={form.form__error}>
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
        <div className={form.form__msg}>
          <svg
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.6585 0.747437C16.0742 1.11112 16.1163 1.74288 15.7526 2.15852L7.00259 12.1585C6.64026 12.5726 6.01145 12.6162 5.59546 12.256L0.345459 7.71057C-0.0720752 7.34907 -0.117499 6.71754 0.244003 6.3C0.605505 5.88247 1.23704 5.83704 1.65457 6.19855L6.15251 10.0929L14.2474 0.841509C14.6111 0.425872 15.2429 0.383755 15.6585 0.747437Z"
              fill="#27AE60"
            />
          </svg>
          {msg}
        </div>
      )}
      <input
        value="Войти"
        disabled={isPending || msg.length > 0}
        type="submit"
      />
      <button onClick={() => setWtf("register")} className={form.form__directToRegister}>
        Зарегистрироваться
      </button>
    </form>
  );
}
