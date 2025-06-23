/* let historial = {};

function agregarEntrenamiento() {
    const fecha = document.getElementById("fecha").value;
    const ejercicio = document.getElementById("ejercicio").value.trim();
    const reps = document.getElementById("reps").value.split(",").map(x => parseInt(x.trim()));

    if (!fecha || !ejercicio || reps.some(isNaN)) {
        alert("Completa todos los campos correctamente.");
        return;
    }

    if (!historial[fecha]) historial[fecha] = [];
    historial[fecha].push({ ejercicio, repeticiones: reps });
    mostrarHistorial();
}

function mostrarHistorial() {
    const div = document.getElementById("historial");
    div.innerHTML = "";
    for (const fecha in historial) {
        const grupo = document.createElement("div");
        grupo.innerHTML = `<strong>${fecha}</strong>`;
        historial[fecha].forEach(e => {
            const item = document.createElement("div");
            item.textContent = `• ${e.ejercicio}: ${e.repeticiones.join(", ")}`;
            grupo.appendChild(item);
        });
        div.appendChild(grupo);
    }
}

function descargarJSON() {
    const blob = new Blob([JSON.stringify(historial, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "historial_entrenamiento.json";
    a.click();
    URL.revokeObjectURL(url);
}

function cargarJSON() {
    const file = document.getElementById("archivo").files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            historial = JSON.parse(e.target.result);
            mostrarHistorial();
        } catch (err) {
            alert("Error al leer el archivo.");
        }
    };
    reader.readAsText(file);
} */

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
