// RETO 5 · Componente FormularioCandidato
// Ahora es un formulario estático que no hace nada. Hay que hacerlo funcional.

import { useState, type FormEvent } from "react";
import type { Candidato } from "../tipos";

type FormularioCandidatoProps = {
  alAñadir: (candidato: Candidato) => void;
};

export default function FormularioCandidato({ alAñadir }: FormularioCandidatoProps) {

  const [nombre, setNombre] = useState("");
  const [numeroLista, setNumeroLista] = useState("");
  const [lema, setLema] = useState("");

  const num = Number(numeroLista);
  const esNombreValido = nombre.trim() !== "";
  const esNumeroValido = numeroLista !== "" && num >= 1 && num <= 30;
  const esFormulacioValido = esNombreValido && esNumeroValido;

  function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
      evento.preventDefault();

      if (!esFormulacioValido) return;

      const nuevoCandidato: Candidato = {
        id: Date.now(),
        nombre: nombre.trim(),
        numeroLista: num,
        votos: 0,
        ...(lema.trim() !== "" && { lema: lema.trim() }),
      };

      alAñadir(nuevoCandidato);

      setNombre("");
      setNumeroLista("");
      setLema("");
  };


  return (
    <form onSubmit={manejarEnvio} className="formulario">
      <h2>Nueva candidatura</h2>
      <div className="campo">
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      </div>
      <div className="campo">
        <label htmlFor="numeroLista">Número de lista (1 a 30)</label>
        <input id="numeroLista" type="number" min="1" max="30" step="1" value={numeroLista} onChange={(e) => setNumeroLista(e.target.value)}/>
      </div>
      <div className="campo">
        <label htmlFor="lema">Lema (opcional)</label>
        <input id="lema" type="text" value={lema} onChange={(e) => e.target.value}/>
      </div>
      <button type="submit" disabled={!esFormulacioValido}>Presentar candidatura</button>
    </form>
  );
}
