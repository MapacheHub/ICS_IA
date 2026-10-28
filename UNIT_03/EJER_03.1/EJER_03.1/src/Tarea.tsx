export type Prioridad = "alta" | "media" | "baja";

export type FiltroPrioridad = Prioridad | "todas";

export interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
  prioridad: Prioridad;
}

interface TareaItemProps {
  tarea: Tarea,
  onToggle: (id: number) => void,
}


export const tareasIniciales: Tarea[] = [
  { id: 1, texto: "Aprender sobre renderizado de listas en React", completada: true, prioridad: "alta" },
  { id: 2, texto: "Implementar el filtrado de tareas", completada: false, prioridad: "alta" },
  { id: 3, texto: "Entender cómo se eleva el estado", completada: false, prioridad: "media" },
  { id: 4, texto: "Estilizar los componentes con Bootstrap", completada: true, prioridad: "baja" },
  { id: 5, texto: "Crear el componente de resumen condicional", completada: false, prioridad: "media" },
  { id: 6, texto: "Desplegar la aplicación en Netlify", completada: false, prioridad: "baja" },
];

export function TareaItem({ tarea, onToggle}: TareaItemProps){
  const badgeColor = {
    alta: "bg-danger",
    media: "bg-warning text-dark",
    baja: "bg-succes",
  }

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center tarea--${
        tarea.prioridad
      } ${tarea.completada ? "opacity-50 text-decoration-line-through" : ""}`}>
      <div className="form-check m-0">
        <input className="form-check-input style-checkbox"
          type="checkbox"
          checked={tarea.completada}
          id={`tarea-check-${tarea.id}`}
          onChange={() => onToggle(tarea.id)}
          />
        <label className="form-check-label ms-2" htmlFor={`tarea-check-${tarea.id}`}>
          {tarea.texto}
        </label>
      </div>
      <span className={`badge ${badgeColor[tarea.prioridad]} text-capitalize`}>
        {tarea.prioridad}
      </span>
    </li>
  )
}