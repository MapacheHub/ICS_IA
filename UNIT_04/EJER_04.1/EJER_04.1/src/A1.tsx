import { useState } from "react";

export function Contador() {
    const [cuenta, setCuenta] = useState(0);

    function manejarSumarTres() {
        setCuenta(cuenta + 3);
        // setCuenta(cuenta + 1);
        // setCuenta(cuenta + 1);
        console.log("Consola:", cuenta);
    }

    function manejarDuplicar() {
        setCuenta(cuenta + 1);
        setCuenta((anterior) => anterior * 2);
    }

    return (
        <section>
            <h3>{cuenta}</h3>
            <button onClick={manejarSumarTres}>Sumar 3</button>
            <button onClick={manejarDuplicar}>Duplicar</button>
        </section>
    );
}