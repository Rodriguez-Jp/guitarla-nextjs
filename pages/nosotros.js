import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../styles/nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout title={"Nosotros"} description={"Acerca de nosotros"}>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            src={"/img/nosotros.jpg"}
            width={1000}
            height={800}
            alt="Imagen seccion nosotros"
          ></Image>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim dignissim scelerisque. Praesent maximus, tellus id
              tincidunt rutrum, nibh arcu eleifend urna, vel gravida risus dui
              sit amet nunc. Sed porttitor quis ante non dignissim. Vestibulum
              venenatis volutpat dui, aliquet sollicitudin nunc pellentesque
              vestibulum. Proin ut nunc ac enim mattis condimentum. Maecenas vel
              eros sem. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Praesent libero urna, maximus
              rutrum.
            </p>
            <p>
              Fusce nec nulla neque. Maecenas sagittis non ipsum id commodo.
              Integer vel suscipit massa, vitae commodo odio. In mollis maximus
              metus, sit amet mattis quam accumsan quis. Fusce venenatis lectus
              orci, vitae interdum massa cursus volutpat. Fusce mattis purus
              vitae erat luctus, vitae porta tellus rhoncus. Aenean a viverra
              urna. Proin scelerisque ligula et lacus iaculis ullamcorper.
              Integer consequat, enim sit amet rutrum cursus, ligula nisl
              sagittis turpis, ac gravida libero est et justo. Maecenas faucibus
              lectus eu feugiat elementum.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
