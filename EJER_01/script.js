// Esperamos a que todo el HTML de la página esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Buscamos todas las tarjetas que tengan la clase 'producto-card'
    const tarjetas = document.querySelectorAll('.producto-card');

    // 2. Recorremos cada tarjeta para asignarle el evento de clic
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            // 3. Extraemos el texto del título (h3) y el párrafo (p) de esa tarjeta específica
            const titulo = tarjeta.querySelector('h3').textContent;
            const descripcion = tarjeta.querySelector('p').textContent;

            // 4. Mostramos la alerta en el navegador combinando los datos
            alert(`☕ ¡Has seleccionado un gran origen!\n\nProducto: ${titulo}\nDescripción: ${descripcion}`);
        });
    });

});
