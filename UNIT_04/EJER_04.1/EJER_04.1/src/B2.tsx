import { useEffect, useState } from "react";

// Fragmento 1
// function Resumen({ nombre, apellidos }: PropsResumen) {
//   const [nombreCompleto, setNombreCompleto] = useState("");

//   useEffect(() => {
//     setNombreCompleto(`${nombre} ${apellidos}`);
//   }, [nombre, apellidos]);

//   return <p>{nombreCompleto}</p>;
// }

// Fragmento 1
function Resumen(/* { nombre, apellidos } : PropsResumen */) {
  // const nombreCompleto = (`${nombre} ${apellidos}`);

  // return <p>{nombreCompleto}</p>;
}

// Fragmento 2
// function Formulario() {
//   const [nombre, setNombre] = useState("");
//   const [enviado, setEnviado] = useState(false);

//   useEffect(() => {
//     if (enviado) {
//       guardarEnServidor({ nombre });
//     }
//   }, [enviado]);

//   function manejarEnvio(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setEnviado(true);
//   }

//   return (
//     <form onSubmit={manejarEnvio}>
//       <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
//     </form>
//   );
// }

// Fragmento 2
function Formulario() {
  const [nombre, setNombre] = useState("");

  function manejarEnvio(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // guardarEnServidor({ nombre });
  }

  return (
    <form onSubmit={manejarEnvio}>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
    </form>
  );
}

// Fragmento 3: el comentario debe vaciarse al cambiar de alumno
// function FichaAlumno({ idAlumno }: PropsFicha) {
//   const [comentario, setComentario] = useState("");

//   useEffect(() => {
//     setComentario("");
//   }, [idAlumno]);

//   return (
//     <textarea
//       value={comentario}
//       onChange={(e) => setComentario(e.target.value)}
//     />
//   );
// }

// Fragmento 3: el comentario debe vaciarse al cambiar de alumno
function FichaAlumno() {
  const [comentario, setComentario] = useState("");

  return (
    <textarea
      value={comentario}
      onChange={(e) => setComentario(e.target.value)}
    />
  );
}