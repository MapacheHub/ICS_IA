import type { FiltroPrioridad } from "./Tarea";


interface PropsFiltros {
  filtroActivo: FiltroPrioridad;
  onCambiarFiltro: (nuevoFiltro: FiltroPrioridad) => void;
}

export const Filtros = ({ filtroActivo, onCambiarFiltro }: PropsFiltros) => {
  const opcionesFiltro: FiltroPrioridad[] = ["todas", "alta", "media", "baja"];

  return (
    <div className="filtros-container">
      {opcionesFiltro.map((opcion) => (
        <button
          key={opcion}
          onClick={() => onCambiarFiltro(opcion)}
          className={`btn-filtro ${filtroActivo === opcion ? "btn-filtro--activo" : ""}`}
        >
          {opcion.charAt(0).toUpperCase() + opcion.slice(1)}
        </button>
      ))}
    </div>
  );
};