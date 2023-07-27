import Image from "next/image";
import styles from "@/styles/blog.module.css";
import Link from "next/link";
import { formatearFecha } from "@/utils/helpers";

export default function Post({ post }) {
  const { titulo, contenido, imagen, publishedAt, url } = post;
  const fechaFormateada = formatearFecha(publishedAt);
  return (
    <>
      <article>
        <Image
          src={imagen.data.attributes.formats.medium.url}
          alt={`Imagen de curso ${titulo}`}
          width={300}
          height={200}
        ></Image>
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{fechaFormateada}</p>
          <p className={styles.resumen}>{contenido}</p>
          <Link href={`/blog/${url}`} className={styles.enlace}>
            Leer post
          </Link>
        </div>
      </article>
    </>
  );
}
