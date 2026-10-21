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
<!-- Sustitullendo la funcion "sunarDias()" por "setDate()" -->

let aprobado = true;
aprobado = 'sí';
<!-- aprobado es un boolean, pero le intentas meter una cadena de texto -->
<!-- let aprobado = 'true'; -->


## A3

function calcularPrecioFinal(precio, iva, descuento){
    let salida;
    let precioF =precio + (precio * (iva / 100));
    if (descuento == null) {
        return console.log(precioF);
    }
    salida = precioF - (precioF * (descuento / 100));
    return console.log(salida);
    
}


## A4

<!-- const respuesta: any = JSON.parse('{"titulo": "Dune", "paginas": 412}');
console.log(respuesta.autor.toUpperCase()); -->

<!-- 1. Porque al poner un atributo "any" e intentar usar una propiedad inesistente no falla hasta que se ejecute el codigo-->
<!-- 2. Ahora detecta el fallo -->
<!-- 3. -->

## A5

<!-- De simple forma podria diferenciar unknown y never en que unknown no se sabe que tipo es la variable, mientras que never defiene que nunca puede ser un tipo -->

## B1

type Libro = {
    isbn: string
    titulo: string
    autor: string
    anioPublicacion: number
    paginas?: number
}

let libro1: Libro = {
    isbn: "RhlT58T60",
    titulo: "Don Quijote",
    autor: "Quijote",
    anioPublicacion: 1600,
    paginas: 300
}

let libro2: Libro = {
    isbn: "dfdHu7iii",
    titulo: "El rey de Katoren",
    autor: "Katoren",
    anioPublicacion: 1947,
}

libro1.editorial = 'Anaya';

<!-- Oviamente falla porque editorial no existe dento del tipo Libro -->


## B2

type EstadoPrestamo = 'disponible' | 'prestado' | 'reservado';

type Libro = {
    isbn: string
    titulo: string
    autor: string
    anioPublicacion: number
    paginas?: number
    estado: EstadoPrestamo
}

let libro1: Libro = {
    isbn: "RhlT58T60",
    titulo: "Don Quijote",
    autor: "Quijote",
    anioPublicacion: 1600,
    paginas: 300,
    estado: 'disponible'
}

let libro2: Libro = {
    isbn: "dfdHu7iii",
    titulo: "El rey de Katoren",
    autor: "Katoren",
    anioPublicacion: 1947,
    estado: 'perdido'
}

<!-- Obiamente da error porque 'perdido' no es una varible dentro de estado -->

## B3

type EstadoPrestamo = 'disponible' | 'prestado' | 'reservado';

type Prestar = (alumno: string) => void;
type LibroPrestable = Libro & { prestar: Prestar};

type Libro = {
    isbn: string
    titulo: string
    autor: string
    anioPublicacion: number
    paginas?: number
    estado?: EstadoPrestamo
}

let libro1: Libro = {
    isbn: "RhlT58T60",
    titulo: "Don Quijote",
    autor: "Quijote",
    anioPublicacion: 1600,
    paginas: 300,
    estado: 'disponible',
}

let libro2: Libro = {
    isbn: "dfdHu7iii",
    titulo: "El rey de Katoren",
    autor: "Katoren",
    anioPublicacion: 1947,
}

let libro3: LibroPrestable = {
    isbn: "JO6yPt9lNH",
    titulo: 'Buick 8',
    autor: "Estefan Rey",
    anioPublicacion: 1980,
    paginas: 600,
    estado: 'disponible',
    prestar(alumno) {
        console.log(`"${this.titulo}" prestado a ${alumno}`);
    }
}

libro3.prestar('Jorge');


type EstadoPrestamo = 'disponible' | 'prestado' | 'reservado';

type Prestar = (alumno: string) => void;
type LibroPrestable = Libro & { prestar: Prestar};

interface Libro {
    isbn: string
    titulo: string
    autor: string
    anioPublicacion: number
    paginas?: number
    estado?: EstadoPrestamo
}

interface LibroDigital extends Libro {tamanoMB: number};

let libro1: Libro = {
    isbn: "RhlT58T60",
    titulo: "Don Quijote",
    autor: "Quijote",
    anioPublicacion: 1600,
    paginas: 300,
    estado: 'disponible',
}

let libro2: Libro = {
    isbn: "dfdHu7iii",
    titulo: "El rey de Katoren",
    autor: "Katoren",
    anioPublicacion: 1947,
}

let libro3: LibroPrestable = {
    isbn: "JO6yPt9lNH",
    titulo: 'Buick 8',
    autor: "Estefan Rey",
    anioPublicacion: 1980,
    paginas: 600,
    estado: 'disponible',
    prestar(alumno) {
        console.log(`"${this.titulo}" prestado a ${alumno}`);
    }
}

libro3.prestar('Jorge');

<!-- No, porque la interface no acepta tipos de unior como or, por lo que lo se podria hacer -->
