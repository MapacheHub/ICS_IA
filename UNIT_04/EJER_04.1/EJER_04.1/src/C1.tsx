
import { useEffect, useRef, useState } from "react";

// Crea FormularioAcceso, con los campos correo y contraseña (ambos controlados)
export function FormularioAcceso() {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [intentado, setIntentado] = useState(false);
    const [mostrarContrasena, setMostrarContrasena] = useState(false);

    // Al mostrarse, el foco está en el campo de correo (useRef<HTMLInputElement>(null) y un efecto).
    const campoCorreo = useRef<HTMLInputElement>(null);
    const campoContrasena = useRef<HTMLInputElement>(null);

    useEffect(() => {
        campoCorreo.current?.focus();
    }, []);

    // Los mensajes de error se calculan a partir de los valores, sin un estado propio para cada uno.
    const errorCorreo = intentado && !correo.includes("@") ? "El correo debe contener @" : "";
    const errorContrasena = intentado && contrasena.length < 8 ? "La contraseña debe tener al menos 8 caracteres" : "";

    function manejarEnvio(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIntentado(true);

        // Al enviar, si el correo no contiene @, se muestra un error y el foco va al campo de correo.
        if (!correo.includes("@")) {
            campoCorreo.current?.focus();
            return;
        }

        // Si el correo es correcto pero la contraseña tiene menos de 8 caracteres, el foco va a la contraseña.
        if (contrasena.length < 8) {
            campoContrasena.current?.focus();
            return;
        }

        alert("Acceso correcto");
    }

    function manejarVaciar() {
        setCorreo("");
        setContrasena("");
        setIntentado(false);
        campoCorreo.current?.focus();
    }

    function alternarVisibilidad() {
        setMostrarContrasena((prev) => !prev);
        campoContrasena.current?.focus();
    }

    return (
        <form onSubmit={manejarEnvio} noValidate>
            <div>
                <label> Correo:
                    <input
                        ref={campoCorreo}
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </label>
                {errorCorreo && <p role="alert">{errorCorreo}</p>}
            </div>

            <div>
                <label> Contraseña:
                    <input
                    // Amplía: un botón Mostrar contraseña que cambie el type del campo entre password y text sin que el campo pierda el foco.
                        ref={campoContrasena}
                        type={mostrarContrasena ? "text" : "password"}
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                    />
                </label>
            <button type="button" onClick={alternarVisibilidad}>
                {mostrarContrasena ? "Ocultar" : "Mostrar"} contraseña
            </button>
            {errorContrasena && <p role="alert">{errorContrasena}</p>}
            </div>

            {/* ... un botón Entrar. */}
            <button type="submit">Entrar</button>
            {/* Un botón Vaciar limpia los dos campos y devuelve el foco al primero. */}
            <button type="button" onClick={manejarVaciar}> Vaciar </button>
        </form>
    );
}