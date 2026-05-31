/* =========================================
   EFECTO DE ESCRITURA (Typewriter)
   ========================================= */
const textoDestino = document.getElementById("maquina");
const frase = "Calculadora de IP,s";
let indice = 0;

const textoDestino2 = document.getElementById("maquina2");
const frase2 = "Erick Tello, Raul Compaired, Victor Marcial";



function escribirTexto() {
    if (indice < frase.length) {
        textoDestino.innerHTML += frase.charAt(indice);
        indice++;
        setTimeout(escribirTexto, 100); // Velocidad de escritura en ms
    }
}

function escribirTexto2() {
    if (indice < frase2.length) {
        textoDestino2.innerHTML += frase2.charAt(indice);
        indice++;
        setTimeout(escribirTexto2, 50); // Velocidad de escritura en ms
    }
}


// Iniciar el efecto al cargar la página
window.onload = function() {
    escribirTexto();
    setTimeout(() => {
        indice = 0; // Reiniciar índice para la segunda frase
    escribirTexto2();
    }, frase.length * 100 + 500); 
    // Esperar a que termine la primera frase + un pequeño retraso   
};


/* =========================================
   LÓGICA DEL SLIDER AUTOMÁTICO Y BOTONES
   ========================================= */
const track = document.getElementById("slider-track");
const slides = document.querySelectorAll(".slide");
let indiceSlider = 0;
const totalSlides = slides.length;
let intervaloSlider;

// Función para mover el slider
function actualizarSlider() {
    // Calcula el desplazamiento en base al ancho de la imagen
    const desplazamiento = -(indiceSlider * 100); 
    track.style.transform = `translateX(${desplazamiento}%)`;
}

// Función para botones (prev/next)
function moverSlider(direccion) {
    clearInterval(intervaloSlider); // Pausar automático si el usuario hace clic
    
    indiceSlider += direccion;

    // Lógica para hacerlo cíclico
    if (indiceSlider >= totalSlides) {
        indiceSlider = 0;
    } else if (indiceSlider < 0) {
        indiceSlider = totalSlides - 1;
    }

    actualizarSlider();
    iniciarSliderAutomatico(); // Reanudar automático
}

// Función para pasar las imágenes automáticamente cada 3 segundos
function iniciarSliderAutomatico() {
    intervaloSlider = setInterval(() => {
        indiceSlider++;
        if (indiceSlider >= totalSlides) {
            indiceSlider = 0;
        }
        actualizarSlider();
    }, 3000); // 3000ms = 3 segundos
}

// Iniciar el slider
iniciarSliderAutomatico();