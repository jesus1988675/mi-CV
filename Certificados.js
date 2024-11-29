

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
