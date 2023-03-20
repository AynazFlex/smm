import Link from "next/link";
import { useState } from "react";

export default function MenuItem({icon, name, types}) {
  const [smclick, setSmclick] = useState(false);
  const toggleSmclick = () => setSmclick((value) => !value);

  return (
    <div className="servicePodmenuItem">
      <div className="servicePodmenuItem__top">
        <div className="servicePodmenuItem__title">
          <i>
            <img src={icon} alt="" />
          </i>
          <span>{name}</span>
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
          smclick ? "servicePodmenuItem__cont act" : "servicePodmenuItem__cont"
        }`}
      >
        <nav>
            {types.map(item => (
                <Link key={item.id} href={`/order/${item.slug}`}>{item.name}</Link>
            ))}
        </nav>
      </div>
    </div>
  );
}
