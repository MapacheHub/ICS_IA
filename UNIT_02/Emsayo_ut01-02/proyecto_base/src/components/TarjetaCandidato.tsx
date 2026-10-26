// RETO 2 · Componente TarjetaCandidato
// Ahora muestra datos fijos y el botón no hace nada. Hay que hacerlo configurable mediante props.

import type { Candidato, Estado } from "../tipos";



export type props = {
  candicato: Candidato,
  estado: Estado,
  textBoton?: String,
  alVotar: (id: Number) => void,

}

export function TarjetaCandidato({
  candicato,
  estado,
  textBoton = 'votar',
  alVotar,
}: props) {

  return (
    <article className="tarjeta">
      <h3>
        {candicato.nombre} <span className="numero">{candicato.numeroLista}</span>
      </h3>
      <p>
        Votos: <strong>{candicato.votos}</strong>

        {estado === 'lider' && <p>👑 Va en cabeza</p>}
        {estado === 'ninguno'&&<p>Todavia sin votos</p>}

      </p>

      {candicato.lema != null && <p>{candicato.lema}</p>}
      
      <button onClick={() => alVotar(candicato.id)}>{textBoton}</button>
    </article>
  );
}
