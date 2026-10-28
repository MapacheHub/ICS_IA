import { useState } from 'react'
import './App.css'
import { tareasIniciales, type FiltroPrioridad, type Tarea } from './tarea'

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
        {/* <Filtros />
        <ResumenTareas />
        <ListaTareas /> */}
      </div>
  )
}

export default App
