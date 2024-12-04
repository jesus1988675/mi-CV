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
    const validPasswords = [
        "G4#hT9&kLp@zX2$!M8N%7CvBdHqP^",
        "L3p^N5@YqT9&kX7zH8%M4CvBd#W!",
        "P&7kT9zHq@M4!N%2#CvLpG8X^Bd$",
        "X!qP7%N5kLp9zH^M4CvT&@G8Bd#2$",
        "M^8N7CvHq!z@P#G4kX2LpBd%T&9$",
        "T&9LpM8Hq7z#CvN%X^k@G4Bd!P2$",
        "kLp!N9T7G8CvHqM@P^2#zBd&X4%$",
        "qT&kM8#N@zH9CvLpBd2!G7X^P%4$",
        "N7kLp@P4!CvHqT9z%M2G8BdX^&#$",
        "CvG2zM4N@7qP!Lp8T9Xk&^#H%Bd$",
        "T!qP9Lp@kN7H8#M%2XzCvBd&G4^$",
        "X4T&kLp7zHq@M!8N9%2CvBdG#P^$",
        "P9kX@LpCv!N7H8qM#2Bd^T&Gz4%$",
        "qP7k!Lp@zH8T9N^M2CvBd&G4X%#$",
        "LpCvH8NqP7kT&z!@M#2X4Bd^G9%$",
        "X&9zM2Lp@T!kHq7CvN^P4G8#Bd%$",
        "TqP7kLp!zH8CvN2@G9Bd&^M4X#%$",
        "qG7kLp8T9zCvH!@P#M4N2X^Bd&%$",
        "Lp9zHqT@7Cv!P#N8Xk&^M2BdG4%$",
        "Hq8T9zCv!P@M2N7#LpG4BdX^k&%$",
        "M7CvBd&N8P!T4@zqG9LpH^X%2k#$",
        "zHq@G8N9P!LpCvT4X^Bd2k&%M7#$",
        "Cv7qG9T8N@LpBd&zH!P#X^M2k4%$",
        "T!P9zHq@M7Cv2Bd^Lp&G8X4%Nk#$",
        "qP8N9Lp7zT!@H#G2M4CvBd&X^k%$",
        "N@T!G8kXzHqP9M7Cv2Bd^Lp&4%#$",
        "T7H8kLp9zNqCv!M2BdX4&^P@G%#$",
        "zHq7P9@G8M4Cv!T2BdN&Xk^Lp%#$",
        "Hq9zCv!T7N8P@M2G4Bd&X^Lp%k#$",
        "X^7N8zCvBdHqP9@M!T2Lp&Gk4%#$",
        "N!9T7zCvG8XqM@P2BdH4^Lp&k%#$",
        "H9kLpX@zqP!N7CvT2Bd^M8G4&%#$",
        "q7zH9T!P@G8M2BdCvXk^LpN4&%#$",
        "Lp9zqN7Cv!T8H2BdM4&^P@XGk%#$",
        "P@M9zqT!7CvN8BdH4X^LpG2&k%#$",
        "T!P9zqN7CvM8BdX^G4Lp&@H2k%#$",
        "zHqP7T!9N8@G2BdCvX^LpM4&k%#$",
        "H8T9N@M7zqCvBdP!X^LpG2&k4%#$",
        "CvN9qP!7H@M8zT4Bd^LpX&k2G%#$",
        "q7zH9T!P@G8N4BdM2Lp^X&Cv%k#$",
        "H8T9M@N7zqP!CvX^Bd4&Lp2Gk%#$",
        "T7qN9zH!Cv8BdM@P4Lp&X^2Gk%#$",
        "zHqN7Cv!M9T8BdX@P4Lp&Gk2^%#$",
        "Cv9zT@P!N7BdM8XH4&Lp^qG2k%#$",
        "H7N9zCvP@T!M8BdX^Lp&Gq4k2%#$",
        "zT!P9qH7N8CvM@Bd4Lp&X^2Gk%#$",
        "qN7CvM8T9zH@P!BdLp&GX4k^2%#$",
        "H7Cv!M8qT9zN@BdP4Lp^X&Gk2%#$",
        "zHqN7T!M8CvP@Bd9X&Lp^Gk4%2#$",
        "T!q7N9H@M8CvzBdLp&GX^k42P%#$"
    ];
    console.log("Contraseña ingresada:", passwordInput); // Mensaje de depuración

    // Verifica si la contraseña está en la lista
    if (validPasswords.includes(passwordInput)) {
        sessionStorage.setItem('authenticated', 'true');
        document.getElementById('login-container').style.display = "none";
        document.getElementById('welcome-screen').style.display = "block"; // Verifica que este ID esté correcto


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
        alert("Para obtener acceso al CV, por favor comunícate conmigo mediante WhatsApp haciendo clic en el enlace proporcionado en nuestra página. ¡Estare encantado de asistirte!");

        document.getElementById('welcome-screen').style.display = "none";
        document.getElementById('login-container').style.display = "block";
    }
}
// Función para cerrar el contenedor del login
function closeLoginContainer() {
    document.getElementById('login-container').style.display = 'none';
}




