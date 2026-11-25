// Parte del primer punto del 2.
const formateador = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
});

export function formatearPrecio(cantidad: number): string {
    return formateador.format(cantidad);
}