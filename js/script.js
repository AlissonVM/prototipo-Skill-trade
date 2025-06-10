// Este archivo JavaScript contendrá toda la lógica interactiva de tu página web.

// La función 'DOMContentLoaded' se asegura de que el código se ejecute
// solo cuando todo el HTML de la página ha sido cargado y parseado.
document.addEventListener('DOMContentLoaded', function() {
    console.log('SkillTrade: ¡La página ha cargado completamente! 🎉');

    // --- Funcionalidad para botones de Registro e Inicio de Sesión (simulada) ---
    // Seleccionamos los botones por sus clases.
    const registerBtn = document.querySelector('.main-nav .btn-primary');
    const loginBtn = document.querySelector('.main-nav .btn-secondary');

    // Añadimos un "escuchador de eventos" para cuando se haga clic en el botón de registrarse.
    // Solo si el botón existe (para evitar errores en páginas donde no estén).
    if (registerBtn) {
        registerBtn.addEventListener('click', function(event) {
            // event.preventDefault(); // Comentar esto si quieres que los enlaces funcionen directamente a register.html
            // alert('¡Gracias por tu interés en registrarte! Serás redirigido al formulario de registro.');
            // En una versión real, aquí podrías:
            // - Redirigir a una página de registro real: window.location.href = 'register.html';
            // - Mostrar un formulario de registro en un modal (ventana emergente).
            console.log('Botón Registrarse clicado.');
        });
    }

    // Hacemos lo mismo para el botón de iniciar sesión.
    if (loginBtn) {
        loginBtn.addEventListener('click', function(event) {
            // event.preventDefault(); // Comentar esto si quieres que los enlaces funcionen directamente a login.html
            // alert('¡Bienvenido de nuevo! Serás redirigido a la página de inicio de sesión.');
            console.log('Botón Iniciar Sesión clicado.');
        });
    }

    // --- Funcionalidad de la Barra de Búsqueda (en services.html) ---
    const searchInput = document.querySelector('.search-bar-container input[type="text"]');
    const categorySelect = document.querySelector('.search-bar-container select');
    const searchButton = document.querySelector('.search-bar-container button');

    if (searchButton) { // Asegúrate de que solo se ejecute en la página donde existe el botón de búsqueda
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput ? searchInput.value : '';
            const selectedCategory = categorySelect ? categorySelect.value : 'Todas';
            console.log(`Buscando "${searchTerm}" en la categoría: "${selectedCategory}"`);
            alert(`Simulando búsqueda de: "${searchTerm}" en la categoría: "${selectedCategory}". ¡Pronto verás resultados reales!`);
            // En una aplicación real, aquí se enviaría la consulta a un servidor
            // o se filtrarían dinámicamente los servicios mostrados en la misma página.
        });
    }

    // --- Funcionalidad para el formulario de contacto (en contact.html) ---
    const contactForm = document.querySelector('#contact-form-section form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe realmente
            // Aquí puedes capturar los datos del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            console.log('Mensaje de Contacto Enviado:');
            console.log(`Nombre: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Asunto: ${subject}`);
            console.log(`Mensaje: ${message}`);

            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            contactForm.reset(); // Limpia el formulario después de "enviar"
            // En una aplicación real, aquí se enviarían los datos a un backend (servidor)
        });
    }

    // --- Funcionalidad para los formularios de Login/Register (en login.html, register.html) ---
    const loginForm = document.querySelector('.form-container form');
    if (loginForm && document.title.includes('Iniciar Sesión')) { // Es el formulario de login
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            console.log('Intento de Inicio de Sesión:');
            console.log(`Email: ${email}`);
            console.log(`Contraseña: ${password}`);
            alert('Inicio de sesión simulado. ¡Bienvenido de vuelta!');
            // Redirigir a la página de inicio o dashboard si fuera real
            // window.location.href = 'index.html';
        });
    }

    const registerForm = document.querySelector('.form-container form');
    if (registerForm && document.title.includes('Registrarse')) { // Es el formulario de registro
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const skill = document.getElementById('skill').value;
            const category = document.getElementById('category').value;
            const bio = document.getElementById('bio').value;

            console.log('Intento de Registro de Usuario:');
            console.log(`Nombre: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Contraseña: ${password}`);
            console.log(`Habilidad: ${skill}`);
            console.log(`Categoría: ${category}`);
            console.log(`Bio: ${bio}`);
            alert('Registro simulado. ¡Gracias por unirte a SkillTrade!');
            // Redirigir a la página de inicio de sesión o un perfil de usuario si fuera real
            // window.location.href = 'login.html';
        });
    }


    // --- Futuras funcionalidades que podrías añadir aquí: ---
    // - Lógica para el sistema de negociación (enviar/recibir ofertas en el chat).
    // - Dinamismo al cargar los servicios (por ejemplo, desde un array de datos o una API).
    // - Animaciones CSS con JavaScript (ej. on scroll).
    // - Implementación del sistema de valoración con estrellas (interactivo).
    // - Funcionalidad de un "dashboard" con las métricas personales.
});
