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