import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import styles from "../styles/grid.module.css";

export default function Tienda({ guitarras }) {
  return (
    <Layout title="Tienda" description="Tienda de guitarras">
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <div className={styles.grid}>
          {guitarras.map((guitarra) => (
            <Guitarra guitarra={guitarra.attributes} key={guitarra.id} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const query = await fetch(`${process.env.API_URL}/guitarras`);
//   const { data: guitarras } = await query.json();

//   return {
//     props: {
//       guitarras,
//     },
//   };
// }

export async function getServerSideProps() {
  const query = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const { data: guitarras } = await query.json();

  return {
    props: {
      guitarras,
    },
  };
}
