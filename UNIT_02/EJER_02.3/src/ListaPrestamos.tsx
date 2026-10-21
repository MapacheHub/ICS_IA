import { useState } from "react";

type Prestamo = {
  id: number;
  titulo: string;
  alumno: string;
  devuelto: boolean;
};

export const ListaPrestamos = () => {
  // Inicializado con dos préstamos de ejemplo (Infiere Prestamo[])
  const [prestamos, setPrestamos] = useState<Prestamo[]>([
    { id: 1, titulo: "El Quijote", alumno: "Carlos García", devuelto: false },
    { id: 2, titulo: "Cien años de soledad", alumno: "Ana Martínez", devuelto: false }
  ]);

  // Estado que empieza en null y puede contener un Prestamo
  const [prestamoSeleccionado, setPrestamoSeleccionado] = useState<Prestamo | null>(null);

  const marcarComoDevuelto = (id: number) => {
    setPrestamos(prevPrestamos =>
      prevPrestamos.map(p => p.id === id ? { ...p, devuelto: true } : p)
    );
    
    // Sincronizar el detalle seleccionado si cambia de estado
    if (prestamoSeleccionado?.id === id) {
      setPrestamoSeleccionado(prev => prev ? { ...prev, devuelto: true } : null);
    }
  };

  return (
    <div>
      <h2>Lista de Préstamos Activos</h2>
      <ul>
        {prestamos.map(p => (
          <li key={p.id} style={{ margin: '10px 0' }}>
            <span><strong>{p.titulo}</strong> - {p.alumno} ({p.devuelto ? 'Devuelto' : 'Pendiente'})</span>
            
            <button 
              onClick={() => setPrestamoSeleccionado(p)}
              style={{ marginLeft: '10px' }}
            >
              Ver detalle
            </button>

            {!p.devuelto && (
              <button 
                onClick={() => marcarComoDevuelto(p.id)}
                style={{ marginLeft: '10px', backgroundColor: '#e0f7fa' }}
              >
                Marcar como devuelto
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Panel de Vista de Detalle si hay un objeto seleccionado */}
      {prestamoSeleccionado && (
        <div style={{ marginTop: '20px', padding: '15px', border: '2px dashed blue', borderRadius: '4px' }}>
          <h3>Detalle del Préstamo Seleccionado</h3>
          <p><strong>ID:</strong> {prestamoSeleccionado.id}</p>
          <p><strong>Libro:</strong> {prestamoSeleccionado.titulo}</p>
          <p><strong>Alumno:</strong> {prestamoSeleccionado.alumno}</p>
          <p><strong>Estado actual:</strong> {prestamoSeleccionado.devuelto ? '✅ Devuelto' : '⏳ En posesión del alumno'}</p>
          <button onClick={() => setPrestamoSeleccionado(null)}>Cerrar Detalle</button>
        </div>
      )}
    </div>
  );
};