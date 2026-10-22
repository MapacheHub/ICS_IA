import { useState } from "react"

export const InterruptorLuz = () => {
    const [encendida, setEncendida] = useState<boolean>(false);
    
        if (encendida == true) {
            return(
                <div>
                    <button 
                    //  La luz esta encendida
                        type="button"
                        onClick={() => setEncendida((encendida) => !encendida)}
                    >Apagar</button>
                    <div style={{width: 50,height: 50, backgroundColor: 'yellow' }}>
                            
                    </div>
                </div>
            )
        } else {

            return (
                <div>
                    <button 
                    //  La luz esta apagado
                        type="button"
                        onClick={() => setEncendida((encendida) => !encendida)}
                    >Encender</button>
                    <div style={{width: 50,height: 50, backgroundColor: 'grey' }}>
                            
                    </div>
                </div>
            )
        }
}