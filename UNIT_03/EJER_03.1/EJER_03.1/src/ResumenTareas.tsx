import type { Tarea } from "./Tarea";

interface PropsResumen {
  tareasVisibles: Tarea[];
  totalTareas: number;
}

export const ResumenTareas = ({ tareasVisibles, totalTareas }: PropsResumen) => {
  if (tareasVisibles.length === 0) {
    return <p className="resumen-texto">No hay tareas para este filtro.</p>;
  }

  const todasCompletadas = tareasVisibles.every((tarea) => tarea.completada);

  if (todasCompletadas) {
    return (
      <p className="resumen-texto resumen-texto--exito">
        ¡Felicidades! Has completado todas las tareas de esta sección.
      </p>
    );
  }

  return (
    <p className="resumen-texto">
      Mostrando {tareasVisibles.length} de {totalTareas} tareas.
    </p>
  );
};