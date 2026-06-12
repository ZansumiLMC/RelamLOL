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
            "assets/mini.png",
            "assets/mini2.png",
            "assets/mini3.png",
            "assets/mini4.png",
            "assets/mini5.png",
            "assets/mini6.png"
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
            "assets/confirm.png",
            "assets/confirm2.png",
            "assets/confirm3.png",
            "assets/confirm4.png",
            "assets/confirm5.png",
            "assets/confirm6.png"
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
            "assets/otros.png",
            "assets/otros2.png",
            "assets/otros3.png",
            "assets/otros4.png",
            "assets/otros5.png",
            "assets/otros6.png"

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
            "assets/import.png"
        ],

        texto: `
        <h2>Métodos de Pago</h2>

        <p>PayPal y Ko-fi.</p>

        <h2>Términos</h2>

        <p>3 revisiones gratis. A partir de la cuarta: +3 USD.</p>
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