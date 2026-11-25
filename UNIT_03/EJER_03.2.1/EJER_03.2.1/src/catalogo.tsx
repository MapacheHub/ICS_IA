import type { ItemCarrito, Producto } from "./adicional";
import { TarjetaProducto } from "./tarejetaProducto";


interface CatalogoProps {
    productos: Producto[];
    carrito: ItemCarrito[];
    onAnadir: (idProducto: string) => void;
}

export function Catalogo({ productos, carrito, onAnadir }: CatalogoProps) {
    return (
        <section>
            <h2>Catálogo</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
                {productos.map((producto) => {
                    const item = carrito.find((i) => i.idProducto === producto.id);
                    const cantidadEnCarrito = item ? item.cantidad : 0;

                    return (
                        <TarjetaProducto
                            key={producto.id}
                            producto={producto}
                            cantidadEnCarrito={cantidadEnCarrito}
                            onAnadir={onAnadir}
                        />
                    );
                })}
            </div>
        </section>
    );
}