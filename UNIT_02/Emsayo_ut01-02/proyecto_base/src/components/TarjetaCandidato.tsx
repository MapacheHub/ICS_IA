// RETO 2 · Componente TarjetaCandidato
// Ahora muestra datos fijos y el botón no hace nada. Hay que hacerlo configurable mediante props.

import type { Candidato, Estado } from "../tipos";



type TarjetaCandidatoProps = {
  candidato: Candidato,
  estado: Estado,
  textBoton?: String,
  alVotar: (id: number) => void,

}

export function TarjetaCandidato({
  candidato,
  estado,
  textBoton = 'votar',
  alVotar,
}: TarjetaCandidatoProps) {

  return (
    <article className="tarjeta">
      <h3>
        {candidato.nombre} <span className="numero">{candidato.numeroLista}</span>
      </h3>
      <p>
        Votos: <strong>{candidato.votos}</strong>

        {estado === 'lider' && <p>👑 Va en cabeza</p>}
        {estado === 'ninguno'&&<p>Todavia sin votos</p>}

      </p>

      {candidato.lema != null && <p>{candidato.lema}</p>}
      
      <button onClick={() => alVotar(candidato.id)}>{textBoton}</button>
    </article>
  );
}
