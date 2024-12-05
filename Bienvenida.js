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
        "G4hT9kLpAzX2M8N7CvBdHqP",
        "L3pN5YqT9kX7zH8M4CvBdW",
        "P7kT9zHqM4N2CvLpG8BdX",
        "XqP7N5kLp9zH4M8CvT2Bd",
        "M8N7CvHqzP4kX2LpBdT9G",
        "T9LpM8Hq7zCvN5XkP2BdG",
        "kLp9T7G8CvHqM2P4zBdXN",
        "qT8M7N2zH9CvLpBdX4kP",
        "N7kLp4CvT9zHqP2BdX8G",
        "CvG2zM4N7qP8LpX9kBdH",
        "TqP7Lp8kN7H9M2XzCvBd",
        "X4T7kLp7zHqN9M2CvBdG",
        "P9kX2LpCvM7N8qBdT4H",
        "qP7kLp8zH9T2N4CvBdX",
        "LpCvH8N7qP2T9zX4BdM",
        "X9zM2LpT7kHqP4CvBdN",
        "TqP7zH8CvN9BdM2kLpX",
        "qG7kLp8T9zCvH2M4BdN",
        "Lp9zHqT7CvP4N8kM2Bd",
        "Hq8T9zCvM2P7N4LpBdX"
       
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
        alert("Para obtener acceso al CV, por favor comunícate conmigo mediante WhatsApp haciendo clic en el enlace proporcionado en mi página. ¡Estare encantado de asistirte!");

        document.getElementById('welcome-screen').style.display = "none";
        document.getElementById('login-container').style.display = "block";
    }
}
// Función para cerrar el contenedor del login
function closeLoginContainer() {
    document.getElementById('login-container').style.display = 'none';
}

// Inicialización de Firebase
// Configuración de Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Función para leer contraseñas desde Firebase
function obtenerContraseñas() {
    database
        .ref("passwords")
        .once("value")
        .then((snapshot) => {
            const passwords = snapshot.val();
            console.log("Lista de contraseñas disponibles:", passwords);
        })
        .catch((error) => {
            console.error("Error al obtener las contraseñas:", error);
        });
}

// Función para almacenar las contraseñas y tiempo en Firebase
function almacenarContraseña(userId, passwordKey) {
    const timestamp = Date.now(); // Marca de tiempo actual
    const contrasenaData = {
        password: passwordKey,
        timestamp: timestamp
    };

    database
        .ref("passwords/" + userId)
        .set(contrasenaData)
        .then(() => {
            console.log("Contraseña almacenada correctamente para el usuario:", userId);
        })
        .catch((error) => {
            console.error("Error al almacenar la contraseña:", error);
        });
}

// Array de usuarios y contraseñas
const usuarios = [
    { userId: "usuario1", passwordKey: "G4hT9kLpAzX2M8N7CvBdHqP" },
    { userId: "usuario2", passwordKey: "L3pN5YqT9kX7zH8M4CvBdW" },
    { userId: "usuario3", passwordKey: "P7kT9zHqM4N2CvLpG8BdX" },
    { userId: "usuario4", passwordKey: "XqP7N5kLp9zH4M8CvT2Bd" },
    { userId: "usuario5", passwordKey: "M8N7CvHqzP4kX2LpBdT9G" },
    { userId: "usuario6", passwordKey: "T9LpM8Hq7zCvN5XkP2BdG" },
    { userId: "usuario7", passwordKey: "kLp9T7G8CvHqM2P4zBdXN" },
    { userId: "usuario8", passwordKey: "qT8M7N2zH9CvLpBdX4kP" },
    { userId: "usuario9", passwordKey: "N7kLp4CvT9zHqP2BdX8G" },
    { userId: "usuario10", passwordKey: "CvG2zM4N7qP8LpX9kBdH" },
    { userId: "usuario11", passwordKey: "TqP7Lp8kN7H9M2XzCvBd" },
    { userId: "usuario12", passwordKey: "X4T7kLp7zHqN9M2CvBdG" },
    { userId: "usuario13", passwordKey: "P9kX2LpCvM7N8qBdT4H" },
    { userId: "usuario14", passwordKey: "qP7kLp8zH9T2N4CvBdX" },
    { userId: "usuario15", passwordKey: "LpCvH8N7qP2T9zX4BdM" },
    { userId: "usuario16", passwordKey: "X9zM2LpT7kHqP4CvBdN" },
    { userId: "usuario17", passwordKey: "TqP7zH8CvN9BdM2kLpX" },
    { userId: "usuario18", passwordKey: "qG7kLp8T9zCvH2M4BdN" },
    { userId: "usuario19", passwordKey: "Lp9zHqT7CvP4N8kM2Bd" },
    { userId: "usuario20", passwordKey: "Hq8T9zCvM2P7N4LpBdX" }
    // Puedes añadir más usuarios aquí
];

// Iterar sobre los usuarios y almacenar las contraseñas
usuarios.forEach(({ userId, passwordKey }) => {
    almacenarContraseña(userId, passwordKey);
});

// Llamar a la función para obtener las contraseñas
obtenerContraseñas();
