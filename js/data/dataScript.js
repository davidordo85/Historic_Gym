document.addEventListener('DOMContentLoaded', () => {
    let userData = null;

    const createDataBtn = document.getElementById('createDataBtn');
    const loadDataBtn = document.getElementById('loadDataBtn');
    const fileInputJson = document.getElementById('fileInputJson');
    const userNameInput = document.getElementById('userNameInput');
    const userNameContainer = document.getElementById('userNameContainer');
    const userGreeting = document.getElementById('pageGreeting');

    function mostrarSaludo(nombre) {
        userNameContainer.style.display = 'none';
        pageGreeting.textContent = `Bienvenido, ${nombre}!`;
    }

    createDataBtn.addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        if (!userName) return alert('Escribe tu nombre antes de crear los datos.');

        userData = { usuario: userName, historico: [] };
        mostrarSaludo(userName);

        const blob = new Blob([JSON.stringify(userData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'entrenamientos.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    loadDataBtn.addEventListener('click', () => fileInputJson.click());

    fileInputJson.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try {
            const text = await file.text();
            const data = JSON.parse(text);
            if (!data.usuario) return alert('El JSON no contiene "usuario".');
            userData = data;
            mostrarSaludo(data.usuario);
        } catch {
            alert('Error al leer o parsear el JSON.');
        } finally {
            fileInputJson.value = '';
        }
    });
});
