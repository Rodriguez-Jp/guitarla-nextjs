import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from "@/styles/carrito.module.css";

export default function Carrito({
  carrito,
  actualizarCantidad,
  eliminarProducto,
}) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalActualizado = carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );

    setTotal(totalActualizado);
  }, [carrito]);

  return (
    <Layout
      title={"Carrito de compras"}
      description="Pagina carrito de compras"
    >
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>
            {carrito.length === 0
              ? "Carrito Vacio"
              : carrito.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image
                        src={producto.imagen}
                        height={300}
                        width={200}
                        alt={`Imagen guitarra ${producto.nombre}`}
                      ></Image>
                    </div>
                    <div>
                      <p className={styles.nombre}> {producto.nombre}</p>
                      <p>
                        Cantidad:
                        <select
                          className={styles.select}
                          onChange={(e) =>
                            actualizarCantidad({
                              id: producto.id,
                              cantidad: e.target.value,
                            })
                          }
                          value={producto.cantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </p>
                      <p className={styles.precio}> ${producto.precio}</p>
                      <p className={styles.subtotal}>
                        <span>
                          Subtotal: ${producto.precio * producto.cantidad}
                        </span>
                      </p>
                    </div>

                    <button
                      className={styles.eliminar}
                      type="button"
                      onClick={() => {
                        eliminarProducto(producto.id);
                      }}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: {total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
