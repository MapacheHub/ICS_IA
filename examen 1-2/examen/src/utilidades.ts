// APARTADO 2 · Función calcularResultado
// Escribe aquí la función `calcularResultado` (consulta el enunciado).

export function calcularResultado(calificacion: number) {
    if (calificacion < 5){
        return 'suspenso';
    } else if (calificacion >= 5 && calificacion < 7) {
        return 'aprobado';
    } else if (calificacion >= 7 && calificacion < 9) {
        return 'notable';
    } else if (calificacion >= 9) {
        return 'sobresaliente';
    }
};
