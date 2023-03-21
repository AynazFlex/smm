import "./HeaderIndex.sass";
import MenuItem from "./MenuItem";

export default function PodMenu({ setPodmenu, setBurger, catalog }) {

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
              {!!catalog && catalog.categories.map(item => (
                <MenuItem key={item.id} {...item} types={catalog.types[`${item.id}`]} setClose={() => {
                  setBurger(false)
                  setPodmenu(false)
                }}/>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
