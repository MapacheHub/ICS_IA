// APARTADO 5 · Componente FormularioNota
// Ahora es un formulario estático que no hace nada. Hay que hacerlo funcional.

import { useState, type FormEvent } from "react";
import type { Nota } from "../tipos";

type FormularioNotasProps = {
  alAñadir: (Nota: Nota) => void;
};


export function FormularioNota({ alAñadir }: FormularioNotasProps) {


const [modulos, setModulos] = useState("");
const [calificacion, setCalificacion] = useState<string>();
const [observaciones, setObservaciones] = useState("");

const num = Number(calificacion);
const esModuloValido = modulos.trim() !== "";
const esCalificacionValido = calificacion !== "" && num >= 1 && num <= 30;
const esFormulacioValido = esModuloValido && esCalificacionValido;

function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
  evento.preventDefault();

  if (!esFormulacioValido) return;

  
      const nuevoCandidato: Nota = {
        id: Date.now(),
        modulo: modulos.trim(),
        calificacion: num,
        ...(observaciones.trim() !== "" && { observaciones: observaciones.trim() }),
      };

      alAñadir(nuevoCandidato);

      setModulos("");
      setCalificacion("");
      setObservaciones("");

}

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <h2>Añadir nota</h2>
      <div className="campo">
        <label htmlFor="modulo">Módulo</label>
        <input id="modulo" type="text" value={modulos} onChange={(e) => (e.target.value)}/>
      </div>
      <div className="campo">
        <label htmlFor="calificacion">Calificación (0 a 10)</label>
        <input id="calificacion" type="number" min="0" max="10" step="0.1" value={calificacion} onChange={(e) => setCalificacion(e.target.value)}/>
      </div>
      <div className="campo">
        <label htmlFor="observaciones">Observaciones (opcional)</label>
        <input id="observaciones" type="text" value={observaciones} onChange={(e) => (e.target.value)}/>
      </div>
      <button type="submit"disabled={!esFormulacioValido}>Añadir nota</button>
    </form>
  );
}
