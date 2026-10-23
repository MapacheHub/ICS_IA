import { useState, type ReactElement } from "react";

export interface peliculas{                                                                         //   (titulo, anio, genero).
    titulo: String;
    anio: Number;
    genero: String;
}

const catalogoPeliculas: peliculas[] = [                                                            //  un array fijo de al menos 8 películas
    {titulo: "Interestelar", anio: 2014, genero: "Sci-fy"},
    {titulo: "El Resplandor", anio: 1983, genero: "Terror"},
    {titulo: "Blade Runner", anio: 1987, genero: "Thriler"},
    {titulo: "Memento", anio: 2001, genero: "Thriler"},
    {titulo: "Alien", anio: 1997, genero: "Terror"},
    {titulo: "Avatar", anio: 2008, genero: "Sci-fy"},
    {titulo: "Caroline", anio: 2013, genero: "Animacion"},
    {titulo: "El juego de Ender", anio: 2017, genero: "Sci-fy"},
];
                                                                                                    // La lista filtrada es un dato derivado.
export function BuscadorPeliculas(): ReactElement {                                                 //  Estado: solo busqueda (texto) y genero (un select con “Todos” y los géneros).
    const [busqueda, setBusqueda] = useState<string>("");                                               //  busqueda y la funcion que mete en busqueda
    const [genero, setGenero] = useState<string>("Todos");                                              //  ...

    const peliculasFiltradas: peliculas[] = catalogoPeliculas.filter((pelicula) => {                //  la busqueda (o filtro) de peliculas
        const coincideTitulo = pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase());          //  buscamos que coincida en titulo
        const coincideGenero = genero === 'Todos' || pelicula.genero === genero;                        //  Buscamos que coincida el genero seleccionado
        return coincideTitulo && coincideGenero;                                                        //  Devulven el titulo y genero
    })

    const totalResultados: number = peliculasFiltradas.length;                                      //  el contador “N resultados” es un dato derivado.

return(
    <div>
        <div>
            <p>Catalogo de peliculas</p>

            <input                                                                                  //  Input:
                type="text"                                                                             //  escribimos (en este caso lo que queremos buscar)
                value={busqueda}                                                                        //  lo que escribimos se almacena en
                //onChange={}
                // onKeyDown={}                                                                            //  si se pulsa x tecla pasa y
            />
            
            <select 
                value={genero}
                //onChange={}
            >
                <option value="Todos">Todos los generos</option>
                <option value="Terror">Terror</option>
                <option value="Sci-fy">Ciencia Ficcion</option>
                <option value="Thriler">Thiler</option>
                <option value="Animacion">Animacion</option>
            </select>

            <button /*</div>onClick={}</div>*/>Limpiar filtros seleccionados</button>
        </div>
    </div>
);
}


// interface Pelicula {
//   titulo: string;
//   anio: number;
//   genero: string;
// }

// const PELICULAS_ESTATICAS: Pelicula[] = [
//   { titulo: 'El Padrino', anio: 1972, genero: 'Drama' },
//   { titulo: 'Pulp Fiction', anio: 1994, genero: 'Crimen' },
//   { titulo: 'El Caballero Oscuro', anio: 2008, genero: 'Acción' },
//   { titulo: 'Interstellar', anio: 2014, genero: 'Ciencia Ficción' },
//   { titulo: 'Origen', anio: 2010, genero: 'Ciencia Ficción' },
//   { titulo: 'Parásitos', anio: 2019, genero: 'Drama' },
//   { titulo: 'Gladiator', anio: 2000, genero: 'Acción' },
//   { titulo: 'Cadena Perpetua', anio: 1994, genero: 'Drama' },
// ];

// export default function BuscadorPeliculas(): ReactElement {
//   const [busqueda, setBusqueda] = useState<string>('');
//   const [generoSeleccionado, setGeneroSeleccionado] = useState<string>('Todos');

//   // Datos derivados (Filtrado de la lista original)
//   const peliculasFiltradas: Pelicula[] = PELICULAS_ESTATICAS.filter((pelicula) => {
//     const coincideTexto = pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase());
//     const coincideGenero = generoSeleccionado === 'Todos' || pelicula.genero === generoSeleccionado;
//     return coincideTexto && coincideGenero;
//   });

//   const totalResultados: number = peliculasFiltradas.length;

//   const manejarCambioBusqueda = (evento: ChangeEvent<HTMLInputElement>): void => {
//     setBusqueda(evento.target.value);
//   };

//   const manejarCambioGenero = (evento: ChangeEvent<HTMLSelectElement>): void => {
//     setGeneroSeleccionado(evento.target.value);
//   };

//   const manejarTeclaEscape = (evento: KeyboardEvent<HTMLInputElement>): void => {
//     if (evento.key === 'Escape') {
//       setBusqueda('');
//     }
//   };

//   const limpiarFiltros = (): void => {
//     setBusqueda('');
//     setGeneroSeleccionado('Todos');
//   };

//   return (
//     <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
//       <h2>Ejercicio 4: Buscador de Películas</h2>

//       <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
//         <input
//           type="text"
//           value={busqueda}
//           onChange={manejarCambioBusqueda}
//           onKeyDown={manejarTeclaEscape}
//           placeholder="Buscar por título... (Esc para borrar)"
//         />

//         <select value={generoSeleccionado} onChange={manejarCambioGenero}>
//           <option value="Todos">Todos los géneros</option>
//           <option value="Drama">Drama</option>
//           <option value="Crimen">Crimen</option>
//           <option value="Acción">Acción</option>
//           <option value="Ciencia Ficción">Ciencia Ficción</option>
//         </select>

//         <button onClick={limpiarFiltros}>Limpiar filtros</button>
//       </div>

//       <p style={{ fontWeight: 'bold' }}>{totalResultados} resultados encontrados</p>

//       {totalResultados === 0 ? (
//         <p style={{ color: 'gray', italic: 'true' } as any}>Sin resultados</p>
//       ) : (
//         <ul>
//           {peliculasFiltradas.map((pelicula, indice) => (
//             <li key={indice}>
//               <strong>{pelicula.titulo}</strong> ({pelicula.anio}) - <em>{pelicula.genero}</em>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }