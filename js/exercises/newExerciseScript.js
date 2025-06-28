console.log('nuevo ejercicio');
import { ejercicios } from './exercises.js';

function cargarEjerciciosEnSelect() {
    const select = document.getElementById('exersice');

    // Limpiar opciones previas excepto la primera
    select.innerHTML = '<option value="">Selecciona el ejercicio</option>';

    // Recorrer por grupo muscular
    for (const grupo in ejercicios) {
        const grupoMuscular = ejercicios[grupo];

        // Subgrupos: máquinas y mancuernas
        for (const tipo in grupoMuscular) {
            const ejerciciosLista = grupoMuscular[tipo];

            // Crear un optgroup por cada tipo
            const optgroup = document.createElement('optgroup');
            optgroup.label = `${capitalizar(grupo)} - ${capitalizar(tipo)}`;

            ejerciciosLista.forEach(nombre => {
                const option = document.createElement('option');
                option.value = nombre;
                option.textContent = nombre;
                optgroup.appendChild(option);
            });

            select.appendChild(optgroup);
        }
    }
}

function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', cargarEjerciciosEnSelect);
