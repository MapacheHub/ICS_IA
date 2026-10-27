// RETOS 3, 4 y 5 · Estado, lista de tarjetas, votos y uso de los componentes.
// Ahora solo muestra el título. Importa lo que necesites desde `./datos`, `./tipos`,
// `./utilidades` y `./components`.

import { useState } from "react";
import { candidatosIniciales } from "./datos";
import type { Candidato } from "./tipos";
import { TarjetaCandidato } from "./components/TarjetaCandidato";
import { obtenerEstado } from "./utilidades";
import  FormularioCandidato from "./components/FormularioCandidato";

function App() {
  const [candidatos, setCandidatos] = useState<Candidato[]>(candidatosIniciales);

  const totalVotos = candidatos.reduce((acc, c) => acc + c.votos, 0);
  const maximo = Math.max(0, ...candidatos.map((c) => c.votos));

  function manejoVotar(id: number){
    setCandidatos((lista) => 
    lista.map((x) => 
      x.id === id? {...x, votos: x.votos + 1}: x));
  }

  function manejarAñadirCandidato(nuevoCandidato: Candidato){
    setCandidatos((candidatosPrevios) => [...candidatosPrevios, nuevoCandidato])
  }

  return (
    <main className="contenedor">
      <h1>Elección de delegado/a</h1>
      <p className="subtitulo">Votos emitidos: {totalVotos}</p>

      {candidatos.length === 0 ? (
        <p className="vacio">Todavia no hay candidaturas.</p>
      ) : (
        <div className="contenedor-tarjetas">
          {candidatos.map((candidato) => (
            <TarjetaCandidato
              key={candidato.id}
              candidato={candidato}
              estado={obtenerEstado(candidato.votos, maximo)}
              alVotar={manejoVotar}
            />
          ))}
        </div>
      )}
      <FormularioCandidato alAñadir={manejarAñadirCandidato} />
    </main>
  );
}

export default App;
