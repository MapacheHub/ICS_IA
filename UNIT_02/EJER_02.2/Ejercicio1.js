// **1.1**

// Uso en App.jsx
<Saludo nombreAlumno="Lucía" />

// Saludo.jsx
export function Saludo({ nombre }) {
  return<p>¡Hola, {nombre}!</p>;
}

// Nunca se concreata el dato donde esta "Lucia"
// Al nunca concreatrse la variable donde metes el nombre que quieras, sencillamente no lo menciona
// Cambiando el nombre de la variable "nombreAlumno" a "nombre" o al reves se soluciona el problema


// **1.2**

export function Interruptor() {
  const [encendido, setEncendido] = useState(false);
  return (
    <button onClick={() => (encendido = !encendido)}>
      {encendido ? 'Apagar' : 'Encender'}
    </button>
  );
}

// El useState no esta referido en ningun sitio
// Al no estar referido el "useState" 
// Importando la funcion "useState" de React (aunque aun con esas no funciona lo de encendido)


// **1.3**

export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={setValor(valor + 1)}>Pulsado {valor} veces</button>;
}

// React llega al limite de numeros
// Al no concretar un limite el contador proboca un fallo
// el "setValor" esta mal escrito, deberia ser "onClick={() => setValor(valor + 1)}"


// **1.4**

export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={() => setValor(valor + 1)}>{valor}</button>;
}

// El navegador muestra el error `useState is not defined`.

// El useState no esta referido en ningun sitio
// Al no estar referido el "useState" 
// Importando la funcion "useState" de React (aunque aun con esas no funciona lo de encendido)


// **1.5**

export function BotonEnviar({ onEnviar }) {
  function manejarClic() {
    onEnviar();
  }
  return<button onClick={manejarClic}>Enviar</button>;
}

// En App.jsx
<BotonEnviar />

// Al dale a 'Enviar' falla, indicando que "OnEnviar" no es una funcion
// Al dale a 'Enviar' falla, intenta ejecutar la funcion "onEnviar" pero no existe
// Crear la funcion "onEnviar"


// **1.6**

export function Bandeja() {
  const [mensajesNuevos, setMensajesNuevos] = useState(0);
  return (
    <div>
      {mensajesNuevos &&<p>Tienes {mensajesNuevos} mensajes nuevos</p>}
    </div>
  );
}

// No llegar a imprimir la linea de texto
// No imprime la linea de texto
// Separando la creacion de la variable "mensajesNuevos" y el parrafo de texto