import form from "./Forms.module.scss";
import { useEffect, useRef, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Recovery from "./Recovery";
import Reset from "./Reset";
import { useDispatch } from "react-redux";
import { reset } from "../../store/apiReducer";

export default function FormWrap({ setClose }) {
  const [wtf, setWtf] = useState("login");
  const wrapper = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, []);

  useEffect(() => {
    const close = (e) => e.target.closest(`.${form.form}`) || setClose();

    wrapper.current.addEventListener("click", close);
  }, [wrapper]);

  return (
    <div ref={wrapper} className={form.wrapper}>
      {wtf === "login" && <Login setClose={setClose} setWtf={setWtf} />}
      {wtf === "register" && <Register setClose={setClose} setWtf={setWtf} />}
      {wtf === "recovery" && <Recovery setClose={setClose} setWtf={setWtf} />}
      {wtf === "reset" && <Reset setClose={setClose} setWtf={setWtf} />}
    </div>
  );
}
