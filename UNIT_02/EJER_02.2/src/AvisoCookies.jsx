export function AvisoCookies({children, onAceptar, onRechazar}) {
    const manejarAceptar = Boolean;
    const manajarRechazar = Boolean;

    if (manejarAceptar === true){
        <p>Cookies aceptadas</p>
        console.log("Cookies aceptadas");
    } else if (manajarRechazar === true){
        <p>Cookies rechazadas</p>
        console.log("Cookies rechazadas");
    }
    return  <div>
                <p>Aceptas las cookies?</p>
                <button onClick={() => manejarAceptar() = true}>Aceptar</button>
                <button onClick={() => manajarRechazar() = true}>Rechazar</button>
                <p id="cookies"></p>
            </div>
}