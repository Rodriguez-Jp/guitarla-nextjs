import Layout from "@/components/layout";
import Link from "next/link";
import styles from "@/styles/home.module.css";
import Curso from "@/components/curso";

export default function Home({ curso }) {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de musica, venta de guitarras y mas!"}
      >
        <main className="contenedor">
          <h1 className="heading">Bienvenido a nuestra tienda de guitarras</h1>
          <div className={styles["seccion-botones"]}>
            <Link href={"/tienda"} className={styles.boton}>
              Tienda
            </Link>
            <Link href={"/blog"} className={styles.boton}>
              {" "}
              Blog
            </Link>
          </div>
        </main>

        <section>
          <Curso curso={curso.attributes} />
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
  const { data: curso } = await respuesta.json();

  return {
    props: {
      curso,
    },
  };
}
