import { useState } from "react";

export function Contador2({etiqueta, valorInicial = 0}) {
    const [valor, setValor] = useState(valorInicial);
    const manejarIncremento = () => setValor(valor + 1);
    const manajarDecremento = () => setValor(valor - 1);
    const manejarReinicio = () => setValor(0);
    const menorQueCero = (valor <= 0) ? true : false;

    return (
        <div>
            <p>{valor}</p>
            <button onClick={() => manejarIncremento(valor)}>Incrementar</button>

            <button disabled={menorQueCero} onClick={() => manajarDecremento(valor)}>Decrementar</button>    

            <button onClick={() => manejarReinicio(valor)}>Reiniciar</button>
        </div>
        
    ) 
}
