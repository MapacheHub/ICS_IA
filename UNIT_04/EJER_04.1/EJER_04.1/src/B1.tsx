import { useEffect, useState } from "react";


// ... con la prop opcional zonaHoraria?: string ...
interface PropsReloj {
    zonaHoraria?: string;
}


// Crea Reloj ...
export function Reloj({ zonaHoraria }: PropsReloj) {
    // El estado inicial se calcula con inicialización perezosa: useState(() => new Date()).
    const [ahora, setAhora] = useState(() => new Date());

    useEffect(() => {
        // ... y la actualiza cada segundo con setInterval.
        const id = setInterval(() => {

            // Comprueba: escribe un console.log("tic") dentro del temporizador y añade una casilla que oculte el reloj. Con la limpieza, al ocultarlo dejan de salir mensajes. Quita la limpieza y repite: verás dos mensajes por segundo y, al ocultarlo, siguen saliendo. Explica por qué (pista: StrictMode).
            console.log("tic");
            setAhora(new Date());
        }, 1000);

        // La limpieza llama a clearInterval.
        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <strong>{zonaHoraria ?? "Hora local"}: </strong>
            {/* ... Muestra la hora actual con toLocaleTimeString("es-ES", { timeZone: zonaHoraria }) ... */}
            <span>{ahora.toLocaleTimeString("es-ES", { timeZone: zonaHoraria })}</span>
        </div>
    );
}

// Uso en el componente padre con casilla para ocultar:
export function ContenedorRelojes() {
    const [mostrar, setMostrar] = useState(true);

    return (
        <section>
            <label>
            <input
                type="checkbox"
                checked={mostrar}
                onChange={(e) => setMostrar(e.target.checked)}
            /> Mostrar relojes </label>

            {mostrar && (
                // Muestra dos relojes con zonas horarias distintas.
            <>
                <Reloj zonaHoraria="Europe/Madrid" />
                <Reloj zonaHoraria="America/Mexico_City" />
            </>
            )}
        </section>
    );
}