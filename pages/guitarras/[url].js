import Image from "next/image";
import Layout from "@/components/layout";
import styles from "@/styles/guitarras.module.css";

export default function Producto({ guitarra }) {
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

  return (
    <>
      <Layout title={`Guitarra ${nombre}`} description={`Guitarra ${nombre}`}>
        <div className={styles.guitarra}>
          <Image
            src={imagen.data.attributes.url}
            alt={`Imagen guitarra ${nombre}`}
            width={300}
            height={200}
          />
          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );

  const { data: guitarra } = await respuesta.json();

  //Se utiliza en caso de que no encuentre pagina (Dedicado al routing dinamico)
  if (!guitarra.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      guitarra,
    },
  };
}
