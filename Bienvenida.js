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
  // Bloquear F12 y otros accesos al DevTools
document.addEventListener('keydown', (event) => {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
      event.preventDefault();
      alert("Acceso denegado.");
    }
  });
  // Detectar comportamiento sospechoso (usuarios sin movimiento de mouse)
let isBot = true;
document.addEventListener('mousemove', () => {
  isBot = false; // Detecta que no es un bot si hay movimiento del mouse
});

setTimeout(() => {
  if (isBot) {
    alert("Acceso bloqueado por actividad sospechosa.");
    window.location.href = "about:blank"; // Redirige fuera de la página
  }
}, 5000); // Verifica después de 5 segundos


// Generar partículas al cargar la página
window.onload = generateParticles;
