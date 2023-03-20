import HeaderIndex from "../components/HeaderIndex";

export default function Testindex({ catalog }) {
  return (
    <>
      <HeaderIndex catalog={catalog}/>
      <div>
        {catalog.categories.map((item) => {
          return <div key={item.position}>{item.name}</div>;
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://flowsmm.net/api/data/all");
  const { catalog } = await res.json();

  return {
    props: {
      catalog,
    },
  };
}
