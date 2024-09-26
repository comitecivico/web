// Desplazamiento suave (Smooth Scrolling)
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        let destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({
            behavior: 'smooth'
        });
        // Cerrar el menú en dispositivos móviles al hacer clic en un enlace
        if (document.getElementById('nav-toggle').checked) {
            document.getElementById('nav-toggle').checked = false;
        }
    });
});

// Botón "Volver arriba"
const botonArriba = document.createElement('div');
botonArriba.id = 'boton-arriba';
botonArriba.innerHTML = '&#8679;';
document.body.appendChild(botonArriba);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        botonArriba.classList.add('mostrar');
    } else {
        botonArriba.classList.remove('mostrar');
    }
});

botonArriba.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animaciones al hacer scroll
const elementosAnimados = document.querySelectorAll('.animado');

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    elementosAnimados.forEach(elemento => {
        let alturaElemento = elemento.offsetTop;
        if (alturaElemento - 500 < scrollTop) {
            elemento.classList.add('mostrar');
        }
    });
}

window.addEventListener('scroll', mostrarScroll);

// Mostrar y ocultar respuestas en la sección de Preguntas Frecuentes (FAQ)
const detalles = document.querySelectorAll('details');
detalles.forEach(detalle => {
    detalle.addEventListener('toggle', function() {
        detalles.forEach(d => {
            if (d !== this && d.open) {
                d.open = false;
            }
        });
    });
});
