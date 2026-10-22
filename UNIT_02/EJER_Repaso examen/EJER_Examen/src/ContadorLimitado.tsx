import { useState } from "react";

export const ContadorLimitado = () => {
    const [cuenta, setCuenta] = useState(0)

    let lesRango = cuenta <= 0 ? true : false;
    let fueraRango = cuenta >= 10 ? true : false;

    let maximoAlcanzado: string;

    if (cuenta == 10) {
        maximoAlcanzado = "Maximo alcanzado";
    }
    
    return (
        <div>
            <p>Numero actual: {cuenta}</p>
            <button
                disabled = {fueraRango}
                type="button"
                onClick={() => setCuenta((cuenta) => cuenta + 1)}
            >sumar</button>
            <button
                disabled = {lesRango}
                type="button"
                onClick={() => setCuenta((cuenta) => cuenta - 1)}
            >restar</button>
            <p>{maximoAlcanzado}</p>
        </div>
    )
}