console.log('Hola TypeScript');

//  Ejercicio 2
let edad: number;
let nombre: string;
let esActivo: boolean;

let persona: {
    nombre: string;
    edad: number;
    esSocio: boolean;
} = {
    nombre: "Marcos",
    edad: 21,
    esSocio: true
};

// persona.apellido = "Gutierrez"

//  Ejercicio 3
interface Alumno{
    nombre: string;
    nota: number;
    activo?: boolean;
}

let alumnos: Alumno[] = [
    {nombre: "Alejandro", nota: 7, activo: true},
    {nombre: "Roberto", nota: 4, activo: true},
    {nombre: "Maria", nota: 9, activo: false},
    {nombre: "Sara", nota: 5.6}
]

function calcularMedia(alumnos: Alumno[]): number {
    if (alumnos.length === 0) return 0;
    let sumTot = alumnos.reduce((acumulador, alumno) => acumulador + alumno.nota, 0);
    return sumTot / alumnos.length;
}

function mostrarResumen(alumno: Alumno): void {
    console.log(`Alumno: ${alumno.nombre} | Nota: ${alumno.nota} | Estado: ${alumno.activo ? 'Activo' : 'Inactivo'}`);
}

//  4.
