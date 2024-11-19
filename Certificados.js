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

