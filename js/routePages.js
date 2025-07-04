function handleRouteChange() {
    const hash = window.location.hash;
    console.log(hash)

    // Oculta todas las secciones controladas por hash
    document.querySelectorAll('.page-section').forEach(section => {
        section.style.display = 'none';
    });

    // Muestra la que corresponde al hash actual
    if (hash === '#nuevo-entrenamiento') {
        document.getElementById('new-exercise-page-container').style.display = 'block';
    }
    if (hash === '' || hash === '#inicio') {
        document.getElementById('index-page-container').style.display = 'flex'
    }
}

// Detectar cambio de hash (cuando haces clic en un enlace del menú)
window.addEventListener('hashchange', handleRouteChange);

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', handleRouteChange);
