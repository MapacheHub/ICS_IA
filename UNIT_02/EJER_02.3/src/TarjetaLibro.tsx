import { type ReactNode } from "react";

export type PropsTarjetaLibro = {
    titulo: string,
    autor: string,
    estado?: 'disponible' | 'prespado' | 'reservado',
    children?: ReactNode,
    alPrestar?: () => void,                                     //  Funcion sin parametros "()" que devuelve "=>" nada "void"
}

export const TarjetaLibro = ({
    titulo,
    autor,
    estado = 'disponible',
    children,
    alPrestar,
}: PropsTarjetaLibro) => {
    return (
        <div>
            <h3>{titulo}</h3>
            <p>Autor: {autor}</p>
            <p>Estado: {estado}</p>

            {children && <div>{children}</div>}

            {estado === 'disponible' && alPrestar && (
                <button onClick={() => alPrestar?.()}>Prestar</button>
            )}
        </div>
    )
}



