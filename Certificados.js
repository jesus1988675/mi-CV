

// Función para abrir el modal del certificado con imagen
function abrirModal(titulo, descripcion, imagenSrc) {
    // Obtener el modal y sus elementos de contenido
    const modal = document.getElementById('modalCertificado');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');

    // Establecer el contenido del modal con los datos del certificado
    modalTitle.innerText = titulo;
    modalDescription.innerText = descripcion;
    modalImage.src = imagenSrc;

    // Mostrar el modal
    modal.style.display = 'block';
}

// Función para cerrar el modal cuando se hace clic en el botón de cierre o fuera del modal
function cerrarModal() {
    const modal = document.getElementById('modalCertificado');
    modal.style.display = 'none';
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('modalCertificado');
    if (event.target === modal) {
        cerrarModal();
    }
};
// Selecciona los elementos con la clase fade-in
const fadeElements = document.querySelectorAll('.fade-in');

// Detecta si el elemento está en el viewport
const fadeInOnScroll = () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Llama a la función una vez en la carga inicial

function enterSite() {
    window.location.href = "bienvenida.html"; // Cambia "index.html" al nombre de tu archivo principal
}
// Detectar cambios en el contenido
const version = '1.0.1'; // Cambia manualmente en cada actualización
if (localStorage.getItem('siteVersion') !== version) {
    localStorage.setItem('siteVersion', version);
    location.reload(true); // Recargar con la última versión
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

document.getElementById('email').innerHTML = atob("dXN1YXJpb0BlamVtcGxvLmNvbQ==");
