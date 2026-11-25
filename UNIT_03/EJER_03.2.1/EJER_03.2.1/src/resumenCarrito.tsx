import { formatearPrecio } from "./farmato";

interface ResumenCarritoProps {
    totalUnidades: number;
    subtotal: number;
}

// Gastos de envío: 4,95 €, gratis si el subtotal es ≥ 50 €.
const UMBRAL_ENVIO_GRATIS = 50;
const COSTE_ENVIO = 4.95;

export function ResumenCarrito({ totalUnidades, subtotal }: ResumenCarritoProps) {
    const esEnvioGratis = subtotal >= UMBRAL_ENVIO_GRATIS;
    const gastosEnvio = esEnvioGratis ? 0 : COSTE_ENVIO;
    const total = subtotal + gastosEnvio;
    const restanteEnvioGratis = Math.max(0, UMBRAL_ENVIO_GRATIS - subtotal);
    const porcentajeProgreso = Math.min(100, (subtotal / UMBRAL_ENVIO_GRATIS) * 100);

    return (
        <div style={{ marginTop: "1.5rem", padding: "1rem", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
            <h3>Resumen del pedido</h3>

            <div style={{ marginBottom: "1rem" }}>
                {esEnvioGratis ? (
                    // Si ya se alcanza, muestra «¡Envío gratis!»
                    <p style={{ color: "green", fontWeight: "bold" }}>¡Envío gratis!</p>
                ) : (
                    // Si el subtotal es menor de 50 €, muestra «Te faltan X € para el envío gratis», junto con una barra de progreso.
                    <>
                    <p>Te faltan {formatearPrecio(restanteEnvioGratis)} para el envío gratis</p>
                    <progress value={porcentajeProgreso} max={100} style={{ width: "100%" }} />
                    </>
                )}
            </div>

            {/* Muestra el número de unidades ... */}
            <p>Unidades totales: {totalUnidades}</p>

            {/* ... el subtotal ... */}
            <p>Subtotal: {formatearPrecio(subtotal)}</p>

            {/* ... los gastos de envío ... */}
            <p>Gastos de envío: {esEnvioGratis ? "Gratis" : formatearPrecio(gastosEnvio)}</p>
            <hr />
            <p style={{ fontSize: "1.2rem" }}>
            {/* ... y el total. */}
            <strong>Total: {formatearPrecio(total)}</strong>
            </p>
        </div>
    );
}