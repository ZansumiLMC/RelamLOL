// ================================
// NAVEGACIÓN SUAVE
// ================================

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start'
            });
        }
    });
});
const servicios = {

    miniaturas: {

        imagenes: [
            "assets/miniaturas/bandejitamini.png",
            "assets/miniaturas/juliiomini.png",
            "assets/miniaturas/marcoplaysmini.png",
            "assets/miniaturas/examplemini.png",
            "assets/miniaturas/mini5.png",
            "assets/miniaturas/mini6.png"
        ],

        texto: `
        <h2>Miniaturas y Banners</h2>

        <h3>Sencillo - $5 USD</h3>
        <p>Render simple con iluminación y fondo básico.</p>

        <h3>Con PNGs - $10 USD</h3>
        <p>Más detalles, iluminación mejorada y composición elaborada.</p>

        <h3>Full Detalles - $15 USD</h3>
        <p>Render complejo con personalización avanzada.</p>
        `
    },

    confirmaciones: {

        imagenes: [
            "assets/confirmaciones/confirmaciones otterstudio.png",
            "assets/confirmaciones/confirmaciones otterstudio 2.png",
            "assets/confirmaciones/confirmaciones otterstudio 3.png",
            "assets/confirmaciones/confirmaciones otterstudio 4.png",
            "assets/confirmaciones/confirmaciones otterstudio 5.png",
            "assets/confirmaciones/confirmaciones otterstudio 6.png"
        ],

        texto: `
        <h2>Confirmaciones</h2>

        <h3>Sencilla - $5 USD</h3>
        <p>Paquete de 5 confirmaciones.</p>

        <h3>Poco Compleja - $10 USD</h3>
        <p>Paquete de 5 confirmaciones con mayor detalle.</p>

        <h3>Compleja - $15 USD</h3>
        <p>Paquete de 3 confirmaciones premium.</p>
        `
    },

    otros: {

        imagenes: [
            "assets/flyer/flyersociety virtual valley.png",
            "assets/flyer/flyerisla de la traicion.png",
            "assets/flyer/flyerl.a.t.d v1.png",
            "assets/flyer/flyerl.a.t.d v2.png",
            "assets/flyer/flyerl.a.t.d v3.png",
            "assets/flyer/flyerotros6.png"

        ],

        texto: `
        <h2>Otros Renders</h2>

        <ul>
            <li>Flyers: $5 - $15 USD</li>
            <li>Renders de Ganador: $5 - $10 USD</li>
            <li>Iconos de Perfil: $3 - $10 USD</li>
        </ul>
        `
    },

    importante: {

        imagenes: [
            "assets/unnamed.png",
        ],

        texto: `
        <h2>Métodos de Pago</h2>

        <p>Solo acepto pagos a través de PayPal y Ko-fi..</p>

        <h2>Términos</h2>

        <p>✔ Me reservo el derecho de cancelar o rechazar cualquier proyecto con el que no me sienta cómodo trabajando..
        <p>-</p>
        <p>✔ Si un cliente solicita un render o skin de prueba, podrá pedir hasta 3 pruebas o revisiones sin costo adicional. A partir de la 4.ª prueba o revisión, se aplicará un cargo adicional de $3 USD. El contenido de prueba no podrá ser publicado bajo ninguna circunstancia.</p>
        <p>-</p>
        <p>✔ Me reservo el derecho de publicar mis trabajos de miniaturas y renders en mis redes sociales y en mi portafolio.</p>
        `
    }

};

function mostrarServicio(nombre){

    const servicio = servicios[nombre];

    const preview = document.getElementById("previewContainer");
    const texto = document.getElementById("contenidoServicio");

    preview.innerHTML = "";
    texto.innerHTML = servicio.texto;

    servicio.imagenes.forEach(img => {

        preview.innerHTML += `
            <img src="${img}" alt="">
        `;

    });

}

window.onload = () => {

    mostrarServicio("miniaturas");

};

// ================================
// CARGA INICIAL
// ================================

window.addEventListener("DOMContentLoaded", () => {

    mostrarServicio("miniaturas");

})

// ================================
// LIGHTBOX PARA RENDERS
// ================================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

function activarLightbox() {
    document.querySelectorAll(".render-card img").forEach(img => {

        img.addEventListener("click", () => {

            lightbox.classList.add("active");
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;

        });

    });
}

// Ejecutar cuando cargue la página
window.addEventListener("load", activarLightbox);

// Cerrar con la X
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

// Cerrar al hacer clic en el fondo
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

// Cerrar con Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.classList.remove("active");
    }
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            window.scrollTo({
                top: destino.offsetTop - 80, // Ajusta por la navbar fija
                behavior: "smooth"
            });
        }
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".panel").forEach(panel => {
    observer.observe(panel);
});