import { useState } from "react";

export function AvisoCookies({children, onAceptar, onRechazar}) {
    const [visible, setVisible] = useState(true);
    if(!visible) return null

    const manejarAceptar = () => {
        setVisible(false);
        if (onAceptar) onAceptar();
    }
    const manajarRechazar = () => {
        setVisible(false);
        if(onRechazar) onRechazar();
    }

    return  <div>
                <p>Aceptas Cookies?</p>
                <button onClick={manejarAceptar}>Aceptar</button>
                <button onClick={manajarRechazar}>Rechazar</button>
            </div>
}