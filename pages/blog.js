import Layout from "@/components/layout";
import Post from "@/components/post";
import styles from "@/styles/grid.module.css";

export default function Blog({ resultados }) {
  console.log(resultados);
  return (
    <Layout title="Blog" description="Blog de musica">
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {resultados.map((resultado) => (
            <Post post={resultado.attributes} key={resultado.id} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data: resultados } = await respuesta.json();

  console.log(resultados);
  return {
    props: { resultados },
  };
}
