import { useState, type ChangeEvent, type KeyboardEvent, type ReactElement } from "react";

export interface peliculas{                                                                         //   (titulo, anio, genero).
    titulo: String;
    anio: number;
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

  const manejarCambioBusqueda = (evento: ChangeEvent<HTMLInputElement>): void => {
    setBusqueda(evento.target.value);
  };

  const manejarCambioGenero = (evento: ChangeEvent<HTMLSelectElement>): void => {
    setGenero(evento.target.value);
  };

  const manejarTeclaEscape = (evento: KeyboardEvent<HTMLInputElement>): void => {
    if (evento.key === 'Escape') {
      setBusqueda('');
    }
  };

  const limpiarFiltros = (): void => {
    setBusqueda('');
    setGenero('Todos');
  };
return(
    <div>
        <div>
            <p>Catalogo de peliculas</p>

            <input                                                                                  //  Input:
                type="text"                                                                             //  escribimos (en este caso lo que queremos buscar)
                value={busqueda}                                                                        //  lo que escribimos se almacena en
                onChange={manejarCambioBusqueda}
                onKeyDown={manejarTeclaEscape}     
                placeholder="Buscaodr de peliculas, pulse ESC para salir"                                                                       //  si se pulsa x tecla pasa y
            />
            
            <select 
                value={genero}
                onChange={manejarCambioGenero}
            >
                <option value="Todos">Todos los generos</option>
                <option value="Terror">Terror</option>
                <option value="Sci-fy">Ciencia Ficcion</option>
                <option value="Thriler">Thiler</option>
                <option value="Animacion">Animacion</option>
            </select>

            <button onClick={limpiarFiltros}>Limpiar filtros seleccionados</button>
        </div>
        <p>{totalResultados} resultados encontrados</p>
        {totalResultados === 0 ? (
            <p>Sin resultados</p>
        ) : (
            <ul>
                {peliculasFiltradas.map((pelicula, indice) => (
                    <li key={indice}>
                        <strong>{pelicula.titulo}</strong> ({pelicula.anio}) - <em>{pelicula.genero}</em>
                    </li>
                ))}
            </ul>
        )}
    </div>
);
}