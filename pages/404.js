import Layout from "@/components/layout";
import Link from "next/link";

export default function Pagina404() {
  return (
    <>
      <Layout title={"Pagina no encontrada"} description="Pagina no encontrada">
        <p className="error">La pagina solicitada no se ha encontrado</p>
        <Link className="error-enlace" href={"/"}>
          Volver a inicio
        </Link>
      </Layout>
    </>
  );
}
