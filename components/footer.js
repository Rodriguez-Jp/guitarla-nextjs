import Link from "next/link";
import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor`}>
        <nav className={styles.navegacion}>
          <Link href={"/"}>Inicio</Link>
          <Link href={"/nosotros"}>Nosotros</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/tienda"}>Tienda</Link>
        </nav>
      </div>
    </footer>
  );
}
