import { useState } from "react";
import type { Producto } from "./adicional";
import { formatearPrecio } from "./farmato";


interface FilaCarritoProps {
    producto: Producto;
    cantidad: number;
    onIncrementar: (idProducto: string) => void;
    onDecrementar: (idProducto: string) => void;
    onEliminar: (idProducto: string) => void;
}


export function FilaCarrito({
    producto,
    cantidad,
    onIncrementar,
    onDecrementar,
    onEliminar,
}: FilaCarritoProps) {
    const [notaRegalo, setNotaRegalo] = useState("");

    const subtotalLinea = producto.precio * cantidad;
    const topeStockAlcanzado = cantidad >= producto.stock;

    return (
        // Una FilaCarrito por cada línea ...
    <div style={{ borderBottom: "1px solid #eee", padding: "0.75rem 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
            <div>
                {/* ... con nombre ... */}
                <strong>{producto.nombre}</strong>

                {/* ... precio unitario ... */}
                <div>Precio unitario: {formatearPrecio(producto.precio)}</div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            
             {/* ... los botones −, + y Eliminar ... */}
                <button type="button" onClick={() => onDecrementar(producto.id)}> − </button>
            
            {/* ... cantidad ... */}
                <span>{cantidad}</span>
            
                <button
                    type="button"
                    // ... + no puede superar el stock
                    disabled={topeStockAlcanzado}
                    onClick={() => onIncrementar(producto.id)}
                > + </button>
            </div>

            <div>
                {/* ... subtotal*/}
                <strong>{formatearPrecio(subtotalLinea)}</strong>
            </div>

            <button type="button" onClick={() => onEliminar(producto.id)}> Eliminar </button>
        </div>

        <div style={{ marginTop: "0.5rem" }}>
            {/* Cada fila incluye un <input> de texto «Nota para regalo» cuyo valor se guarda en el estado local de FilaCarrito. */}
            <input
                type="text"
                placeholder="Nota para regalo..."
                value={notaRegalo}
                onChange={(e) => setNotaRegalo(e.target.value)}
                style={{ width: "100%", maxWidth: "300px", padding: "0.25rem" }}
            />
        </div>
    </div>
    );
}