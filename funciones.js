
// variables  globales del juego
let idiomaActual = "español";
let modoActual = "letras";
let puntaje = 0;
let racha = 0;
let opcionCorrecta = null;
let juegoBloqueado = false;
let tiempoRestante = 10;
let contador = null;

// datos de audio para cada idioma y modo
const codigoDeIdioma = {
  español: "es-ES",
  ingles: "en-US",
  coreano: "ko-KR"
};

// mezclar una lista y devolverla en orden aleatorio
function mezclarLista(lista) {
  let listaTemporal = lista.slice();
  let listaMezclada = [];
  while (listaTemporal.length) {
    listaMezclada.push(listaTemporal.splice(Math.floor(Math.random() * listaTemporal.length), 1)[0]);
  }
  return listaMezclada;
}

// seleccionar N elementos al azar de una lista
function seleccionarAlAzar(arreglo, cantidad) {
  return mezclarLista(arreglo).slice(0, cantidad);
}

// limpiar el estado de la ronda antes de empezar otra
function limpiarRonda() {
  juegoBloqueado = false;
  document.getElementById("cartelResultado").textContent = "";
  document.getElementById("Tiempo").classList.remove("alerta-tiempo");
  if (contador) clearInterval(contador);
}

// iniciar el tiempo de la ronda
function iniciarTemporizador() {
  tiempoRestante = 10;
  document.getElementById("time").textContent = tiempoRestante;
  contador = setInterval(actualizarTiempo, 1000);
}

// crear una nueva pregunta con 4 opciones
function generarPregunta() {
  const grupo = datos[idiomaActual][modoActual];
  const opciones = mezclarLista(seleccionarAlAzar(grupo, 4));
  opcionCorrecta = opciones[0];
  return opciones;
}

// mostrar los botones de respuesta en pantalla
function mostrarOpciones(opciones) {
  const contenedor = document.querySelector(".opciones-botones");
  contenedor.replaceChildren();
  for (let i = 0; i < opciones.length; i++) {
    const boton = document.createElement("button");
    boton.className = "opciones";
    boton.textContent = opciones[i].simbolo;
    boton.onclick = function() {
      comprobarRespuesta(this.textContent, opcionCorrecta.simbolo, this);
    };
    contenedor.appendChild(boton);
  }
}

// comenzar una nueva ronda de juego
function empezarRonda() {
  limpiarRonda();
  iniciarTemporizador();
  mostrarOpciones(generarPregunta());
  document.getElementById("señalizacion").textContent = "Toca para escuchar";
}

// acción cuando el usuario elige la respuesta correcta
function respuestaCorrecta(boton) {
  clearInterval(contador);
  contador = null;
  juegoBloqueado = true;
  puntaje += 10;
  racha += 1;
  marcarOpcionCorrecta();
  boton.classList.add("correcto");
  bloquearOpciones();
  document.getElementById("validarPuntos").textContent = puntaje;
  document.getElementById("racha").textContent = racha;
  const cartel = document.getElementById("cartelResultado");
  cartel.textContent = "Lo lograste, muy bien";
  cartel.className = "correcto";
  sonidoCorrecto();
  setTimeout(empezarRonda, 850);
}

// acción cuando el usuario elige la respuesta incorrecta
function respuestaIncorrecta(boton) {
  racha = 0;
  document.getElementById("racha").textContent = racha;
  boton.classList.add("error");
  marcarOpcionCorrecta();
  bloquearOpciones();
  boton.disabled = true;
  const cartel = document.getElementById("cartelResultado");
  cartel.textContent = "Inténtalo de nuevo";
  cartel.className = "error";
  sonidoError();
  setTimeout(empezarRonda, 1000);
}

// bloquear todos los botones de respuesta para evitar clicks extra
function bloquearOpciones() {
  const botones = document.querySelectorAll(".opciones");
  botones.forEach(function(boton) {
    boton.disabled = true;
  });
}

// marcar visualmente cuál opción era la correcta
function marcarOpcionCorrecta() {
  const botones = document.querySelectorAll(".opciones");
  botones.forEach(function(boton) {
    if (boton.textContent === opcionCorrecta.simbolo) {
      boton.classList.add("correcto");
    }
  });
}

// comprobar si la respuesta elegida es correcta o incorrecta
function comprobarRespuesta(letraElegida, letraCorrecta, boton) {
  if (juegoBloqueado) return;
  if (letraElegida === letraCorrecta) respuestaCorrecta(boton);
  else respuestaIncorrecta(boton);
}

// manejar cuando el tiempo de la ronda se agota
function tiempoAgotado() {
  clearInterval(contador);
  contador = null;
  juegoBloqueado = true;
  racha = 0;
  document.getElementById("racha").textContent = racha;
  const cartel = document.getElementById("cartelResultado");
  cartel.textContent = "Se acabó el tiempo";
  cartel.className = "error";
  setTimeout(empezarRonda, 1500);
}

// actualizar la cuenta regresiva en pantalla cada segundo
function actualizarTiempo() {
  tiempoRestante -= 1;
  document.getElementById("time").textContent = tiempoRestante;
  if (tiempoRestante <= 3) document.getElementById("Tiempo").classList.add("alerta-tiempo");
  if (tiempoRestante <= 0) tiempoAgotado();
}

// cambiar el idioma del juego y reiniciar ronda
function cambiarIdioma(nuevoIdioma) {
  idiomaActual = nuevoIdioma;
  const botonesIdioma = document.querySelectorAll(".idioma");
  for (let i = 0; i < botonesIdioma.length; i++) {
    botonesIdioma[i].classList.toggle("activo", botonesIdioma[i].value === nuevoIdioma);
  }
  empezarRonda();
}

// cambiar el modo de contenido (letras, números, palabras)
function cambiarModo(nuevoModo) {
  modoActual = nuevoModo;
  const botones = document.querySelectorAll(".modo");
  for (let i = 0; i < botones.length; i++) {
    botones[i].classList.toggle("activo", botones[i].value === nuevoModo);
  }
  empezarRonda();
}

// reproducir el sonido del elemento correcto
function reproducirSonido() {
  if (!opcionCorrecta) return;
  document.querySelector(".Aviso").textContent = "Escuchando";
  hablar(opcionCorrecta.decir, codigoDeIdioma[idiomaActual], function() {
    document.querySelector(".Aviso").textContent = "Toca de nuevo si lo necesitas";
  });
}

// poner eventos en los botones de idioma
function configurarBotonesIdioma() {
  const botonesIdioma = document.querySelectorAll(".idioma");
  for (let i = 0; i < botonesIdioma.length; i++) {
    botonesIdioma[i].onclick = function() {
      cambiarIdioma(this.value);
    };
  }
}

// poner eventos en los botones de modo accion 
function configurarBotonesModo() {
  const botones = document.querySelectorAll(".modo");
  for (let i = 0; i < botones.length; i++) {
    botones[i].onclick = function() {
      cambiarModo(this.value);
    };
  }
}

// usar la voz del navegador para decir un texto
function hablar(texto, lang, callback) {
  if (!window.speechSynthesis) {
    if (callback) callback();
    return;
  }
  const mensaje = new SpeechSynthesisUtterance(texto);
  mensaje.lang = lang;
  mensaje.onend = function() { if (callback) callback(); };
  mensaje.onerror = function() { if (callback) callback(); };
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(mensaje);
}

// reproducir mensaje de voz para respuesta correcta
function sonidoCorrecto() {
  if (!window.speechSynthesis) return;
  const mensaje = new SpeechSynthesisUtterance("Correcto");
  mensaje.lang = "es-ES";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(mensaje);
}

// reproducir mensaje de voz para respuesta incorrecta
function sonidoError() {
  if (!window.speechSynthesis) return;
  const mensaje = new SpeechSynthesisUtterance("Incorrecto");
  mensaje.lang = "es-ES";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(mensaje);
}
// iniciar el juego cuando la página carga
function iniciarJuego() {
  document.querySelector(".botonReproducir").onclick = reproducirSonido;
  configurarBotonesIdioma();
  configurarBotonesModo();
  empezarRonda();
}

window.onload = iniciarJuego;
