import type { ItemCarrito, Producto } from "./adicional";
import { FilaCarrito } from "./filaCarrito";
import { ResumenCarrito } from "./resumenCarrito";


interface CarritoProps {
    carrito: ItemCarrito[];
    catalogo: Producto[];
    onIncrementar: (idProducto: string) => void;
    onDecrementar: (idProducto: string) => void;
    onEliminar: (idProducto: string) => void;
    onVaciar: () => void;
}

export function Carrito({
    carrito,
    catalogo,
    onIncrementar,
    onDecrementar,
    onEliminar,
    onVaciar,
}: CarritoProps) {
    if (carrito.length === 0) {
    return (
        // Con el carrito vacío, Carrito muestra «Tu carrito está vacío», no se muestra el resumen y no aparece el botón Vaciar carrito.
        <section>
        <h2>Carrito</h2>
        <p>Tu carrito está vacío</p>
        </section>
    );
    }

  // Datos derivados calculados al vuelo a partir de carrito + catalogo
    let totalUnidades = 0;
    let subtotal = 0;

    for (const item of carrito) {
    const producto = catalogo.find((p) => p.id === item.idProducto);
    if (producto) {
        totalUnidades += item.cantidad;
      subtotal += producto.precio * item.cantidad;
    }
    }

    return (
    <section>
        {/* Con productos, el botón Vaciar carrito elimina todas las líneas. */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Carrito</h2>
        <button type="button" onClick={onVaciar}>
            Vaciar carrito
        </button>
        </div>

        <div>
        {carrito.map((item) => {
            const producto = catalogo.find((p) => p.id === item.idProducto);
            if (!producto) return null;

            return (
            <FilaCarrito
              key={item.idProducto} // Clave estable imprescindible
                producto={producto}
                cantidad={item.cantidad}
                onIncrementar={onIncrementar}
                onDecrementar={onDecrementar}
                onEliminar={onEliminar}
            />
            );
        })}
        </div>

        <ResumenCarrito totalUnidades={totalUnidades} subtotal={subtotal} />
    </section>
    );
}