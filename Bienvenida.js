function generateParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${Math.random() * window.innerHeight}px`;
        container.appendChild(particle);

        // Movimiento aleatorio de partículas
        particle.style.animationDuration = `${Math.random() * 5 + 2}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
    }
}
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

window.onload = generateParticles;
