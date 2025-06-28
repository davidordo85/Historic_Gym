

// Variables que ya tienes
const burger = document.querySelector('.burger');
const navLinks = document.getElementById('navLinks'); // tu menú lateral

// Función para cerrar menú
function closeMenu() {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
}

// Cerrar menú al hacer click fuera del menú (dashboard)
document.addEventListener('click', (e) => {
    // Si el menú está abierto
    if (navLinks.classList.contains('open')) {
        // Y el click NO está dentro del menú ni en el burger
        if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
            closeMenu();
        }
    }
});

// Ya tienes toggle con el burger, pero por si acaso:
burger.addEventListener('click', (e) => {
    e.stopPropagation(); // evita que el click suba al document y cierre el menú inmediatamente
    const isOpen = navLinks.classList.toggle('open');
    burger.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
});

// Cerrar menú al hacer click en cualquier link dentro del menú
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});
