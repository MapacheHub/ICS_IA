# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## A1

let ciudad = 'Oviedo';
let habitantes = 220000;
let esCapital = true;
const notas = [7.5, 8, 9.25];
const fechaExamen = new Date(2026, 11, 15);
let pendiente;

ciudad es un "String"
habitaciones es un "number"
esCapital es "boolean"
notas es un array de numeros
fechaExamen es "Date"
y pendiente es una variable sin tipo

esto ultimo puede ser para asi mas adelante poder asignarle un tipo ams adelante
let pendiente string;


## A2

function calcularMedia(notas: number[]): number {
  let suma = 0;
  for (const nota of notas) {
    suma += nota;
  }
  return suma / notas.length;
}

const media: string = calcularMedia([6, 7, 8]);
<!-- Estas definiendo la varible de string para que sea igual a un array -->
<!-- const media = calcularMedia([6, 7, 8]); -->
calcularMedia([6, '7', 8]);
<!-- calcularMedia es un array de numeros, pero estas intentando meter el 7 como un numero -->
<!-- calcularMedia([6, 7, 8]); -->

const hoy = new Date();
hoy.sumarDias(3);
<!--.sumarDias() no existe en "Date"  -->
<!--  -->

let aprobado = true;
aprobado = 'sí';
<!-- aprobado es un boolean, pero le intentas meter una cadena de texto -->
<!-- let aprobado = 'true'; -->


## A2

cfffs


## A3

fdfdssf


## A4

dfssdfs


## A5

dsfdfsf


## B1

fsdfsfs


## B2

sfsfsfs


## B3

sdfsfsfs


## B4

sdfsfsfs