// Este archivo JavaScript contendrá toda la lógica interactiva de tu página web.

// La función 'DOMContentLoaded' se asegura de que el código se ejecute
// solo cuando todo el HTML de la página ha sido cargado y parseado.
document.addEventListener('DOMContentLoaded', function() {
    console.log('SkillTrade: ¡La página ha cargado completamente! 🎉');

    // --- Funcionalidad de ejemplo: Alerta al intentar registrarse o iniciar sesión ---
    // Seleccionamos los botones de registro e inicio de sesión por sus clases.
    const registerBtn = document.querySelector('.btn-primary');
    const loginBtn = document.querySelector('.btn-secondary');

    // Añadimos un "escuchador de eventos" para cuando se haga clic en el botón de registrarse.
    if (registerBtn) { // Verificamos que el botón exista en la página actual
        registerBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace # recargue la página
            alert('¡Gracias por tu interés en registrarte! Esta función está en desarrollo. ¡Pronto podrás unirte a SkillTrade!');
            // En una versión real, aquí podrías:
            // 1. Redirigir a una página de registro real: window.location.href = 'register.html';
            // 2. Mostrar un formulario de registro en un modal (ventana emergente).
        });
    }

    // Hacemos lo mismo para el botón de iniciar sesión.
    if (loginBtn) { // Verificamos que el botón exista en la página actual
        loginBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace # recargue la página
            alert('¡Bienvenido de nuevo! La función de inicio de sesión también está en camino. ¡Mantente atento!');
            // Aquí podrías redirigir a una página de inicio de sesión o mostrar un modal.
        });
    }

    // --- Ejemplo de futura funcionalidad: Barra de búsqueda (en services.html) ---
    // Este código es más una idea de cómo se podría empezar a manejar la búsqueda.
    // Necesitaría más HTML y lógica para ser funcional.
    const searchInput = document.querySelector('input[type="text"]');
    const categorySelect = document.querySelector('select');
    const searchButton = document.querySelector('.search-bar button');

    if (searchButton) { // Asegúrate de que solo se ejecute en la página donde existe el botón de búsqueda
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput ? searchInput.value : '';
            const selectedCategory = categorySelect ? categorySelect.value : 'Todas';
            console.log(`Buscando "${searchTerm}" en la categoría: "${selectedCategory}"`);
            alert(`Simulando búsqueda de: "${searchTerm}" en "${selectedCategory}". ¡Pronto verás resultados reales!`);
            // Aquí se enviaría la consulta a un servidor o se filtrarían servicios en la misma página.
        });
    }

    // --- Futuras funcionalidades que podrías añadir aquí: ---
    // - Lógica para el sistema de negociación (enviar/recibir ofertas en el chat).
    // - Dinamismo al cargar los servicios (por ejemplo, desde un array de datos o una API).
    // - Animaciones CSS con JavaScript.
    // - Implementación del sistema de valoración con estrellas.
    // - Funcionalidad de un "dashboard" con las métricas personales.
});
