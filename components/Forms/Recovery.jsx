import form from "./Forms.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { reset, recovery } from "../../store/apiReducer";

export default function Recovery({ setClose, setWtf }) {
  const { register, handleSubmit } = useForm();
  const { sign, msg, error, isPending } = useSelector((state) => state.api);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(reset());
  }, []);

  useEffect(() => {
    !sign || setWtf("reset")
  }, [sign])

  const onSubmit = (data) => dispatch(recovery(data));

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
      <div className={form.form__title}>Восстановление пароля</div>
      <label>
        E-mail
        <input
          placeholder="Введите E-mail"
          {...register("email", {
            required: true,
          })}
        />
      </label>
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
        value="Сбросить пароль"
        disabled={isPending || msg.length > 0}
        type="submit"
      />
      <button
        onClick={() => setWtf("login")}
        className={form.form__directToRegister}
      >
        Назад ко входу
      </button>
    </form>
  );
}
