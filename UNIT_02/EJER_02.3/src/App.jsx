import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { Cabecera } from './componentes/Cabecera';
import { Principal } from './componentes/Principal';
import { Pie } from './componentes/Pie';
import Captura from './Captura/Captura'
import { Bandeja, BotonEnviar, Contador, Interruptor, Saludo } from './componentes/Saludo'
import { TarjetaModulo } from './componentes/TarjetaModulo'
import { Contador2 } from './componentes/Contador'
import { AvisoCookies } from './componentes/AvisoCookies'
import { TarjetaLibro } from './TarjetaLibro'
import { ListaPrestamos } from './ListaPrestamos';



Saludo
export function Tarjeta() {
  return (
    // <h2>Desarrollo Web en Entorno Cliente</h2>
    <p>Segundo curso de DAW</p>
  );
}

// import { Pie } from 'Pie.jsx';

// Archivo: src/App.jsx
// import { Cabecera } from 'Cabecera.jsx';

export function Fecha() {
  const anioActual = new Date().getFullYear();
  return<p>Estamos en el año {anioActual}</p>;
}



// function App() {
//   return (
//     <>
//       <Cabecera />
//       <Principal />
//       <Pie />
//     </>
//   );
// }


function App() {
  const [count, setCount] = useState(0)

  const manejarPrestamo = () => {
    alert('¡El libro ha sido prestado con éxito!');
  };
  
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <TarjetaLibro
          titulo='Mobi Dick'
          autor='Charls Dickens'
          estado='prestado'
        ></TarjetaLibro>

        <TarjetaLibro
          titulo='Carrie'
          autor='Estefano Rey'
          estado='reservado'
        ></TarjetaLibro>

        <TarjetaLibro
          autor='Steven King'
          estado='disponible'
          alPrestar={manejarPrestamo}
        ></TarjetaLibro>

        {/* Firefox no puede establecer una conexión con el servidor en ws://localhost:5173/?token=zGbjGD7dfsvb. client:896:27

            Firefox no puede establecer una conexión con el servidor en ws://localhost:5173/?token=zGbjGD7dfsvb. client:906:31

            [vite] failed to connect to websocket.
            your current setup:
              (browser) localhost:5173/ <--[HTTP]--> localhost:5173/ (server)
              (browser) localhost:5173/ <--[WebSocket (failing)]--> localhost:5173/ (server)
            Check out your Vite / network configuration and https://vite.dev/config/server-options.html#server-hmr . <anonymous code>:1:147461

            Error en el mapeo fuente: Error: JSON.parse: unexpected character at line 1 column 1 of the JSON data
            Stack in the worker:parseSourceMapInput@resource://devtools/client/shared/vendor/source-map/lib/util.js:163:15
            _factory@resource://devtools/client/shared/vendor/source-map/lib/source-map-consumer.js:1069:22
            SourceMapConsumer@resource://devtools/client/shared/vendor/source-map/lib/source-map-consumer.js:26:12
            _fetch@resource://devtools/client/shared/source-map-loader/utils/fetchSourceMap.js:83:19

            URL del recurso: http://localhost:5173/%3Canonymous%20code%3E
            URL del mapa fuente: installHook.js.map 
        */}
        
        <ListaPrestamos />

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App;

