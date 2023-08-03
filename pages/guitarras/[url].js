import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from "@/styles/guitarras.module.css";

export default function Producto({ guitarra, agregarCarrito }) {
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;
  const [cantidad, setCantidad] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Cantidad no valida");
      return;
    }

    //en caso de pasar la validacion

    const guitarraObjeto = {
      id: guitarra[0].id,
      nombre,
      precio,
      imagen: imagen.data.attributes.url,
      cantidad,
    };

    agregarCarrito(guitarraObjeto);
  };

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

            <form className={styles.formulario} onSubmit={handleSubmit}>
              <label htmlFor="cantidad">Cantidad: </label>
              <select
                id="cantidad"
                onChange={(e) => setCantidad(+e.target.value)}
              >
                <option value="0"> Agregue la cantidad </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <input type="submit" value="Agregar al carrito" />
            </form>
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
