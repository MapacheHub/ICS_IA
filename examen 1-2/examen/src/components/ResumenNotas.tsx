// APARTADO 3 · Componente ResumenNotas
// Ahora muestra datos fijos. Hay que convertirlo en un componente configurable mediante props.

type ResumenNotasProps = {
  titulo?: string,
  media: number,
  aprobadas: number,
  total: number,
}

export function ResumenNotas({
  titulo = 'Resumen',
  media,
  aprobadas, 
  total, 
}: ResumenNotasProps) {

  return (
    <section className="resumen">
      <h2>{titulo}</h2>
      <p>
        Nota media: <strong>{media.toFixed(2)}</strong>
      </p>
      <p>Módulos aprobados: {aprobadas} de {total}
        {aprobadas === total && <p>¡Enorabuena, todo aprobado!</p>}
        {aprobadas !== total && <p>Tienes módulos pendientes</p>}
      </p>
    </section>
  );

}
