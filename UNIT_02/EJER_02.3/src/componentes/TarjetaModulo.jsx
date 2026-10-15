export function TarjetaModulo({titulo, horas = 0, curso = '1º', children }) {
  // Requisito 2: Determinar el emoji accesible según el curso
    const emojiCurso = curso === '2º' ? '📗' : '📘';
    const descripcionCurso = curso === '2º' ? 'Curso de segundo' : 'Curso de primero';
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '12px 0', borderRadius: '8px' }}>
      <h3>
        {/* Usamos un span con rol e identificador para que el emoji sea accesible */}
        <span role="img" aria-label={descripcionCurso}> {emojiCurso} </span>{' '}
        {titulo} ({curso})
      </h3>
      
      {/* Requisito 3: Si horas es mayor que 0, muestra el texto. Si no, nada */}
      {horas > 0 && <p><strong>{horas} horas semanales</strong></p>}
      
      {/* Muestra la descripción pasada a través de children */}
      {children && <p>{children}</p>}
    </div>
  );
}