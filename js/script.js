document.addEventListener('DOMContentLoaded', () => {
    // Lógica para el slider de testimonios (si se requiere animación, necesitaría más JS)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        // En un prototipo simple, esto solo asegura que se pueda hacer scroll horizontalmente
        // Para un slider automático o con flechas, se requeriría más lógica de JS.
    }

    // Lógica básica para el formulario de contacto (simula un envío)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita que el formulario se envíe realmente
            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
            contactForm.reset(); // Limpia el formulario
        });
    }

    // Lógica básica para los formularios de autenticación (simula un registro/login)
    const authForm = document.querySelector('form.auth-form'); // Selecciona el formulario genérico
    if (authForm) {
        authForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Determinar si es formulario de registro o login por su ID o contexto
            if (authForm.closest('.auth-section')) { // Solo si está dentro de la sección de autenticación
                const emailInput = authForm.querySelector('input[type="email"]');
                if (!emailInput) return; // Asegúrate de que existe el campo de email

                if (emailInput.id === 'register-email') {
                    // Lógica para Registro
                    const name = document.getElementById('register-name').value;
                    const email = document.getElementById('register-email').value;
                    const password = document.getElementById('register-password').value;
                    const confirmPassword = document.getElementById('confirm-password').value;

                    if (password !== confirmPassword) {
                        alert('Las contraseñas no coinciden.');
                        return;
                    }
                    if (name && email && password) {
                        alert(`¡Registro exitoso para ${name}! Ahora puedes iniciar sesión.`);
                        window.location.href = 'login.html'; // Redirige al login
                    } else {
                        alert('Por favor, completa todos los campos requeridos.');
                    }
                } else if (emailInput.id === 'login-email') {
                    // Lógica para Login
                    const email = document.getElementById('login-email').value;
                    const password = document.getElementById('login-password').value;

                    if (email === 'test@example.com' && password === 'password123') { // Credenciales de ejemplo
                        alert('¡Inicio de sesión exitoso!');
                        window.location.href = 'index.html'; // Redirige a la página principal
                    } else {
                        alert('Credenciales incorrectas. Inténtalo de nuevo.');
                    }
                }
            }
        });
    }

    // Lógica de filtrado en la página de servicios (muy básica)
    const searchInput = document.getElementById('search-input');
    const categorySelect = document.getElementById('category-select');
    // const serviceList = document.getElementById('service-list'); // No se usa directamente aquí, pero útil para referencia
    const serviceCards = document.querySelectorAll('.service-card');

    if (searchInput || categorySelect) {
        const filterServices = () => {
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
            const selectedCategory = categorySelect ? categorySelect.value : '';

            serviceCards.forEach(card => {
                const cardTitle = card.querySelector('h4').textContent.toLowerCase();
                const cardDescription = card.querySelector('.description').textContent.toLowerCase();
                const cardCategory = card.dataset.category; // Usamos el atributo data-category

                const matchesSearch = searchTerm === '' || cardTitle.includes(searchTerm) || cardDescription.includes(searchTerm);
                const matchesCategory = selectedCategory === '' || cardCategory === selectedCategory;

                if (matchesSearch && matchesCategory) {
                    card.style.display = 'flex'; // Usamos flex para las tarjetas
                } else {
                    card.style.display = 'none'; // Oculta la tarjeta
                }
            });
        };

        if (searchInput) {
            searchInput.addEventListener('keyup', filterServices);
        }
        if (categorySelect) {
            categorySelect.addEventListener('change', filterServices);
        }
        // Llamar una vez al cargar para asegurar el filtro inicial si hay algo seleccionado por defecto
        filterServices();
    }


    // --- Lógica para la SIMULACIÓN del Chat en Vivo ---
    const chatButtons = document.querySelectorAll('.chat-btn');
    const chatPopup = document.getElementById('chat-popup');
    const closeChatBtn = document.getElementById('close-chat');
    const chatWithName = document.getElementById('chat-with-name');
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat-btn');
    const messageContainer = document.querySelector('.chat-body .message-container');

    chatButtons.forEach(button => {
        button.addEventListener('click', () => {
            const providerName = button.closest('.service-card').querySelector('.provider-name').textContent;
            chatWithName.textContent = providerName;
            chatPopup.style.display = 'flex'; // Muestra el chat
            
            // Limpiar mensajes anteriores y establecer el primer mensaje del interesado
            messageContainer.innerHTML = `
                <div class="message sent">Hola, estoy interesado/a en tus ${button.closest('.service-card').querySelector('h4').textContent.split('<')[0].trim()}. ¿Podrías darme más detalles?</div>
            `;
            messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll al final
            chatInput.focus(); // Enfocar el input para que el usuario pueda escribir

            // Simular una respuesta del proveedor después de un breve retraso
            setTimeout(() => {
                const reply = document.createElement('div');
                reply.classList.add('message', 'received');
                reply.textContent = "¡Claro! Con gusto te doy más detalles. ¿En qué te puedo ayudar específicamente?";
                messageContainer.appendChild(reply);
                messageContainer.scrollTop = messageContainer.scrollHeight;
            }, 1500); 
        });
    });

    if (closeChatBtn) {
        closeChatBtn.addEventListener('click', () => {
            chatPopup.style.display = 'none'; // Oculta el chat
        });
    }

    if (sendChatBtn) {
        sendChatBtn.addEventListener('click', () => {
            const messageText = chatInput.value.trim();
            if (messageText) {
                const newMessage = document.createElement('div');
                newMessage.classList.add('message', 'sent');
                newMessage.textContent = messageText;
                messageContainer.appendChild(newMessage);
                chatInput.value = ''; // Limpiar input
                messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll al final

                // Simular una respuesta (solo para el prototipo)
                setTimeout(() => {
                    const reply = document.createElement('div');
                    reply.classList.add('message', 'received');
                    reply.textContent = "Entendido. Déjame revisar eso por ti."; // Respuesta genérica
                    messageContainer.appendChild(reply);
                    messageContainer.scrollTop = messageContainer.scrollHeight;
                }, 1500); // Responde después de 1.5 segundos
            }
        });
    }

    // Permitir enviar mensaje con Enter
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatBtn.click();
            }
        });
    }
});
