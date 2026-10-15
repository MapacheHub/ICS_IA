export const RelojEstatico = () => {
    const hora = new Date().toLocaleTimeString('es-ES')
    return <p>Hora del renderizado: {hora}</p>
}
