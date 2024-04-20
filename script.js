let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

window.addEventListener('load', init);

function init() {
  const button = document.getElementById("guess-button");
  button.addEventListener("click", intentar);
}

function intentar() {
  const INTENTO = leerIntento();
  if (INTENTO === palabra) {
    terminar("<h1>¡GANASTE!</h1>");
    return;
  }
  const GRID = document.getElementById("grid");
  const ROW = document.createElement('div');
  ROW.className = 'row';
  for (let i in palabra) {
    const SPAN = document.createElement('span');
    SPAN.className = 'letter';
    if (INTENTO[i] === palabra[i]) {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = '#79b851'; // Verde
    } else if (palabra.includes(INTENTO[i])) {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = '#f3c237'; // Amarillo
    } else {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = '#a4aec4'; // Gris
    }
    ROW.appendChild(SPAN);
  }
  GRID.appendChild(ROW);
  intentos--;
  if (intentos === 0) {
    terminar("<h1>¡PERDISTE!😖</h1>");
  }
}

function leerIntento() {
  let intento = document.getElementById("guess-input").value.toUpperCase();
  return intento;
}

function terminar(mensaje) {
  const INPUT = document.getElementById("guess-input");
  INPUT.disabled = true;
  const BOTON = document.getElementById("guess-button");
  BOTON.disabled = true;
  let contenedor = document.getElementById('guesses');
  contenedor.innerHTML = mensaje;
}