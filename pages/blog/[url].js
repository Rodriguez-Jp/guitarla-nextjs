import Layout from "@/components/layout";
import Image from "next/image";
import { formatearFecha } from "@/utils/helpers";
import styles from "@/styles/blog.module.css";

export default function Blog({ blog }) {
  const { titulo, contenido, imagen, publishedAt } = blog[0].attributes;

  return (
    <>
      <Layout title={`Blog ${titulo}`} description={`Blog sobre ${titulo}`}>
        <article className={`${styles.post} ${styles.mt3}`}>
          <Image
            src={imagen.data.attributes.url}
            alt={`Imagen de curso ${titulo}`}
            width={1000}
            height={400}
          ></Image>
          <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query: { url } }) {
  console.log(url);
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );

  const { data: blog } = await respuesta.json();

  console.log(blog);

  //Se utiliza en caso de que no encuentre pagina (Dedicado al routing dinamico)
  if (!blog?.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog,
    },
  };
}
