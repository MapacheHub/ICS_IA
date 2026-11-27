export interface Alumno {
  id: string;
  nombre: string;
  nota: number; // de 0 a 10
}

export interface EstadoCuaderno {
  alumnos: Alumno[];
  historial: Alumno[][];
}

export type Accion =
  | { tipo: "anadir"; id: string; nombre: string; nota: number }
  | { tipo: "cambiarNota"; id: string; nota: number }
  | { tipo: "eliminar"; id: string }
  | { tipo: "cargar"; alumnos: Alumno[] }
  | { tipo: "vaciar" }
  | { tipo: "deshacer" };

function limitarNota(nota: number): number {
  if (Number.isNaN(nota)) return 0;
  return Math.min(10, Math.max(0, nota));
}

export function esListaAlumnos(dato: unknown): dato is Alumno[] {
  if (!Array.isArray(dato)) return false;

  return dato.every(
    (item) =>
      typeof item === "object" &&
      item !== null &&
      "id" in item &&
      typeof item.id === "string" &&
      "nombre" in item &&
      typeof item.nombre === "string" &&
      "nota" in item &&
      typeof item.nota === "number"
  );
}

export function cuadernoReducer(
  estado: EstadoCuaderno,
  accion: Accion
): EstadoCuaderno {
  switch (accion.tipo) {
    case "anadir": {
      const nombreLimpio = accion.nombre.trim();
      if (!nombreLimpio) return estado;

      const nuevoAlumno: Alumno = {
        id: accion.id,
        nombre: nombreLimpio,
        nota: limitarNota(accion.nota),
      };

      return {
        alumnos: [...estado.alumnos, nuevoAlumno],
        historial: [...estado.historial, estado.alumnos],
      };
    }

    case "cambiarNota": {
      const notaValida = limitarNota(accion.nota);
      return {
        alumnos: estado.alumnos.map((al) =>
          al.id === accion.id ? { ...al, nota: notaValida } : al
        ),
        historial: [...estado.historial, estado.alumnos],
      };
    }

    case "eliminar": {
      return {
        alumnos: estado.alumnos.filter((al) => al.id !== accion.id),
        historial: [...estado.historial, estado.alumnos],
      };
    }

    // Estado con useReducer. El estado es Alumno[]. La nota queda siempre entre 0 y 10 (lo garantiza el reductor, no el formulario) y un nombre vacío no añade nada. Sin default en el switch.
    case "cargar": {
      const alumnosNormalizados = accion.alumnos
        .filter((al) => al.nombre.trim() !== "")
        .map((al) => ({
          ...al,
          nombre: al.nombre.trim(),
          nota: limitarNota(al.nota),
        }));

      return {
        alumnos: alumnosNormalizados,
        historial: [...estado.historial, estado.alumnos],
      };
    }

    case "vaciar": {
      if (estado.alumnos.length === 0) return estado;
      return {
        alumnos: [],
        historial: [...estado.historial, estado.alumnos],
      };
    }

    case "deshacer": {
      if (estado.historial.length === 0) return estado;
      const anterior = estado.historial[estado.historial.length - 1];
      return {
        alumnos: anterior,
        historial: estado.historial.slice(0, -1),
      };
    }
  }
}