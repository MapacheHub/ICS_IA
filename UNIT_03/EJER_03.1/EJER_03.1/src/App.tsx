import { useState } from 'react'
import './App.css'

import { Filtros } from './Filtros';
import { ListaTareas } from './ListaTareas';
import { ResumenTareas } from './ResumenTareas';
import { tareasIniciales, type FiltroPrioridad, type Tarea } from './Tarea';

function App() {

  const [tareas, setTareas] = useState<Tarea[]>(tareasIniciales);
  const [filtro, setFiltro] = useState<FiltroPrioridad>("todas");

  const tareasVisibles = tareas.filter(
    (tarea) => filtro === "todas" || tarea.prioridad === filtro
  );

  const estado = (id: number): void => {
    setTareas((previewTareas) => 
      previewTareas.map((tarea) =>
        tarea.id === id ? {...tarea, completada: !tarea.completada} : tarea))
  }

  return (
      <div>
        <Filtros filtroActivo={filtro} onCambiarFiltro={setFiltro} />

        <ResumenTareas tareasVisibles={tareasVisibles} totalTareas={tareas.length} />

        <ListaTareas tareas={tareasVisibles} onToggle={estado} />
      </div>
  )
}

export default App
