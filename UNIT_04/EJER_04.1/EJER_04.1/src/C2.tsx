import { useEffect, useRef, useState } from "react";

function formatearTiempo(decimasTotales: number): string {
    const minutos = Math.floor(decimasTotales / 600);
    const segundos = Math.floor((decimasTotales % 600) / 10);
    const decimas = decimasTotales % 10;

    // Formatea minutos y segundos con dos dígitos, con padStart o con new Intl.NumberFormat("es-ES", { minimumIntegerDigits: 2 }).
    const mm = String(minutos).padStart(2, "0");
    const ss = String(segundos).padStart(2, "0");

    // ... que cuenta décimas de segundo y muestra el tiempo como mm:ss.d ...
    return `${mm}:${ss}.${decimas}`;
}

// Crea Cronometro ...
export function Cronometro() {
    const [decimas, setDecimas] = useState(0);
    const [enMarcha, setEnMarcha] = useState(false);
    const [vueltas, setVueltas] = useState<number[]>([]);

    const idIntervaloRef = useRef<number | null>(null);
    const inicioRef = useRef<number>(0);

    function iniciar() {
        if (idIntervaloRef.current !== null) return;

        //  Guarda en otra ref el instante de inicio (Date.now()) y calcula el tiempo transcurrido a partir de él.
        setEnMarcha(true);
        inicioRef.current = Date.now() - decimas * 100;

        // El id del setInterval se guarda en una ref. Pulsar Iniciar dos veces seguidas no crea un segundo temporizador.
        idIntervaloRef.current = window.setInterval(() => {
            const transcurridoMs = Date.now() - inicioRef.current;
            setDecimas(Math.floor(transcurridoMs / 100));
        }, 50);                               
    }

    function parar() {
        if (idIntervaloRef.current !== null) {
            clearInterval(idIntervaloRef.current);
            idIntervaloRef.current = null;
        }
    setEnMarcha(false);
    }

    // Vuelta añade el tiempo actual a una lista (number[] en el estado, sin mutarlo) y solo está activo mientras el cronómetro corre.
    function registrarVuelta() {
        setVueltas((prev) => [...prev, decimas]);
    }

    // Reiniciar para el temporizador, pone el tiempo a 0 y borra las vueltas.
    function reiniciar() {
        parar();
        setDecimas(0);
        setVueltas([]);
    }

    useEffect(() => {
        return () => {
            if (idIntervaloRef.current !== null) {
                clearInterval(idIntervaloRef.current);
            }
        };
    }, []);

    return (
        <section>
            <h2>{formatearTiempo(decimas)}</h2>

            {/* ... con los botones Iniciar, Parar, Vuelta y Reiniciar. */}
            <div>
                <button onClick={iniciar} disabled={enMarcha}> Iniciar </button>
                <button onClick={parar} disabled={!enMarcha}> Parar </button>
                <button onClick={registrarVuelta} disabled={!enMarcha}> Vuelta </button>
                <button onClick={reiniciar}> Reiniciar</button>
            </div>

            {vueltas.length > 0 && (
            <ol>
                {vueltas.map((marca, indice) => (
                    <li key={indice}>Vuelta {indice + 1}: {formatearTiempo(marca)}</li>
                ))}
            </ol>
            )}
        </section>
    );
}