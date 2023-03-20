import { useState } from "react";
import "./HeaderIndex.sass";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addOrder } from "../../store/apiReducer";
import MenuItem from "./MenuItem";

export default function PodMenu({ setPodmenu, setBurger, catalog }) {
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
              {catalog.categories.map(item => (
                <MenuItem key={item.id} {...item} types={catalog.types[`${item.id}`]}/>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
