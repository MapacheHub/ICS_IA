import type { Producto } from "./adicional";
import { formatearPrecio } from "./farmato";


interface TarjetaProductoProps {
    producto: Producto;
    cantidadEnCarrito: number;
    onAnadir: (idProducto: string) => void;
}

export function TarjetaProducto({
    producto,
    cantidadEnCarrito,
    onAnadir,
}: TarjetaProductoProps) {
    // Si no queda stock, el botón se deshabilita...
    const sinStockInicial = producto.stock === 0;
    const sinMasUnidades = !sinStockInicial && cantidadEnCarrito >= producto.stock;
    const deshabilitado = sinStockInicial || sinMasUnidades;

    let textoBoton = "Añadir";
    // ... y muestra «Agotado» (stock 0) o «Sin más unidades» (ya has añadido todo el stock).
    if (sinStockInicial) textoBoton = "Agotado";
    else if (sinMasUnidades) textoBoton = "Sin más unidades";

    return (
        <article style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
            {/* Cada TarjetaProducto muestra nombre, precio con formato de moneda...  */}
            <h3>{producto.nombre}</h3>
            <p>{formatearPrecio(producto.precio)}</p>
            <p style={{ fontSize: "0.85rem", color: "#666" }}>
                Stock disponible: {producto.stock - cantidadEnCarrito}
            </p>
            {/* ... y un botón Añadir. */}
            <button
                type="button"
                disabled={deshabilitado}
                onClick={() => onAnadir(producto.id)}
            >
                {textoBoton}
            </button>
        </article>
    );
}