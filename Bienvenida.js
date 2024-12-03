function redirectToCV() {
    // Redirige a la página cv.html
    window.location.href = 'cv.html';
}

const languageButton = document.getElementById("language-button");
const languageOptions = document.getElementById("language-options");

// Alternar visibilidad al hacer clic
languageButton.addEventListener("click", () => {
    const isVisible = languageOptions.style.display === "block";
    languageOptions.style.display = isVisible ? "none" : "block";
});

// Ocultar menú al hacer clic fuera de él
document.addEventListener("click", (event) => {
    if (!languageButton.contains(event.target) && !languageOptions.contains(event.target)) {
        languageOptions.style.display = "none";
    }
});

// Función para generar partículas
function generateParticles() {
    const container = document.getElementById('particles');
    if (!container) return; // Verifica que el contenedor exista

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${Math.random() * window.innerHeight}px`;
        container.appendChild(particle);

        // Animación aleatoria para las partículas
        particle.style.animationDuration = `${Math.random() * 5 + 2}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
    }
}

function toggleTheme() {
    // Cambia entre las clases 'dark' y 'light'
    document.body.classList.toggle('dark');

    // Cambia el ícono del botón según el tema
    const button = document.getElementById('toggle-btn');
    if (document.body.classList.contains('dark')) {
        button.textContent = '🌙'; // Ícono para el modo oscuro
    } else {
        button.textContent = '💡'; // Ícono para el modo claro
    }

    // Animar las columnas al cambiar de tema
    const content = document.getElementById('content');
    content.style.transform = 'scale(0.98)'; // Reducción ligera para animación
    setTimeout(() => {
        content.style.transform = 'scale(1)'; // Volver al tamaño original
    }, 500);
}
// Deshabilitar clic derecho
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

// Deshabilitar selección de texto
document.addEventListener('selectstart', (event) => {
    event.preventDefault();
});

// Deshabilitar arrastre de imágenes
document.addEventListener('dragstart', (event) => {
    event.preventDefault();
});


// Generar partículas al cargar la página
window.onload = generateParticles;
// Deshabilitar clic derecho, selección de texto y arrastre de imágenes
document.addEventListener('contextmenu', (event) => { event.preventDefault(); });
document.addEventListener('selectstart', (event) => { event.preventDefault(); });
document.addEventListener('dragstart', (event) => { event.preventDefault(); });

// Ofuscación de datos sensibles
document.getElementById('email').innerHTML = atob("dXN1YXJpb0BlamVtcGxvLmNvbQ==");
document.getElementById('phone').innerHTML = atob("NzIyMzMyNjIxNw=="); // Número de WhatsApp
document.getElementById('linkedin').href = atob("aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3R1X2N1ZW50YV9kZV9saW5rZWQ="); // Perfil LinkedIn
document.getElementById('outlook').href = atob("bWFpbHRvOmplc3VzdXN1YXJpb0BvdXRsb29rLmNvbQ=="); // Correo Outlook
document.getElementById('facebook').href = atob("aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2plc3VzdXN1YXJpbw=="); // Perfil Facebook
document.getElementById('email').innerHTML = atob("dXN1YXJpb0BlamVtcGxvLmNvbQ==");
console.log(btoa("7223326217"));
console.log(btoa("https://www.linkedin.com/in/tu_cuenta_de_linkedin"));
console.log(btoa("mailto:jesususuario@outlook.com"));
console.log(btoa("https://www.facebook.com/jesususuario"));

// Maneja la autenticación
function authenticateUser(event) {
    event.preventDefault(); // Previene la recarga de la página al enviar el formulario

    const passwordInput = document.getElementById('password').value;

    // Contraseña válida
    const validPassword = "j8z%N7X@9k#HqP&2!T$CvM4wLpBd^"; // Cambia esto por tu contraseña

    if (passwordInput === validPassword) {
        // Guardar autenticación en sessionStorage
        sessionStorage.setItem('authenticated', true);

        // Ocultar el formulario de inicio de sesión y mostrar la pantalla principal
        document.getElementById('login-container').style.display = "none";
        document.getElementById('welcome-screen').style.display = "block";
    } else {
        // Mostrar mensaje de error
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = "block";
    }
}

// Función para manejar el botón "Explorar mi CV"
function redirectToCV() {
    const isAuthenticated = sessionStorage.getItem('authenticated');

    if (isAuthenticated) {
        // Redirigir al CV
        window.location.href = "cv.html";
    } else {
        // Si no está autenticado, mostrar el formulario de inicio de sesión
        alert("Por favor, inicia sesión para explorar tu CV.");
        document.getElementById('welcome-screen').style.display = "none";
        document.getElementById('login-container').style.display = "block";
    }
}


// Función para cerrar el formulario de login
function closeLogin() {
    document.getElementById('login-container').style.display = 'none';
  }
  
