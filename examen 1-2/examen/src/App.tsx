// APARTADOS 4 y 5 · Estado, lista de notas y uso de los componentes.
// Ahora solo muestra el título. Importa lo que necesites desde `./datos`, `./tipos`,
// `./utilidades` y `./components`.

import { useState } from "react";
import { notasIniciales } from "./datos";
import type { Nota } from "./tipos";
import { ResumenNotas } from "./components/ResumenNotas";
import { calcularResultado } from "./utilidades";
import { FormularioNota } from "./components/FormularioNota";

function App() {

  const [notas, setNotas] = useState<Nota[]>(notasIniciales);

  const total = notas.length;
  const aprobadas = notas.filter((nota) => nota.calificacion >= 5).length
  const media = (total !== 0 ? (aprobadas / total) : 0);

  function manejarAñadirNotas(nuevaNota: Nota){
    setNotas((notasPrevias) => [...notasPrevias, nuevaNota])
  }

  return (
    <main className="contenedor">
      <h1>Registro de notas</h1>
      {total === 0 ? 
        <p className="vacio">Todavía no hay notas registradas</p> :
        
        <div>
          <ResumenNotas
            titulo = {'Resumen del curso'}
            media = {media}
            aprobadas = {aprobadas}
            total = {total}
          ></ResumenNotas>
          <ul className="lista-notas">

            {notas.map((nota) => (
            <li key={nota.id}>
              <p><span className="nota_modulo">{nota.modulo}</span></p>
              <p><span className="nota_calificacion">{nota.calificacion} * {calcularResultado(nota.calificacion)}</span></p>
              {nota.observaciones != null && <p><span className="observaciones">{nota.observaciones}</span></p>}
            </li>
            ))}

          </ul>
        </div>
      }
      <FormularioNota alAñadir={manejarAñadirNotas}></FormularioNota>
      <p className="subtitulo">2.º DAW · Evaluación final</p>
    </main>
  );
}

export default App;
