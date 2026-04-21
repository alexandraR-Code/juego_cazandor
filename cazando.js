//Obtener canvas y contexto
const canvas = document.getElementById('areaJuego');
const ctx = canvas.getContext('2d');

//Variables inicializadas en cero 
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
let puntos = 0;
let tiempo = 15;
let detenerJ;

//Constantes
const ANCHO_GATO = 50;
const ALTO_GATO = 50;
const ANCHO_COMIDA = 30;
const ALTO_COMIDA = 30;



//Funcion graficarGato(sin parametros)
function graficarGato() {
  // Implementación de la función
  // Color del gato 
 // ctx.fillStyle = 'blue';
  // Dibuja un rectangulo centrado 
  //*ctx.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO); 
  graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, 'yellow');
}
function graficarComida(){
  // Implementacion de la funcion 
  // color de la comida
  //ctx.fillStyle = "red";
  // Dibuja un cuadrado en la esquina superior izquierda
  //*ctx.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
  graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, 'red');
}
function iniciarJuego(){
  //calcular posicion para gato centrado 
  gatoX = 0 + ALTO_GATO;
  gatoY = 0 + ANCHO_GATO;

  //Calcular posicion para que comida este en la esquina inferior derecha
  comidaX = canvas.width - ANCHO_COMIDA;
  comidaY = canvas.height - ALTO_COMIDA;
  detenerJ = setInterval(restarTiempo, 1000);
  graficarGato();
  graficarComida();
}
 // funcion encargada de dibujar cualquier rectangulo 
function graficarRectangulo(x, y, ancho, alto, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, ancho, alto);
}
// Funcion que limpia el area de canvas
function limpiarCanvas() {
  //Limpia un rectángulo que empiece en la esquina (0,0) y llegue hasta el ancho y alto total
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function moverIzquierda(){
  gatoX = gatoX -10;
  limpiarCanvas();
  graficarGato();
  graficarComida();
  detectarColision();
}
function moverDerecha(){
  gatoX = gatoX +10;
  limpiarCanvas();
  graficarGato();
  graficarComida();
  detectarColision();
}
function moverArriba(){
  gatoY = gatoY -10;
  limpiarCanvas();
  graficarGato();
  graficarComida();
  detectarColision();
}
function moverAbajo(){
  gatoY = gatoY +10;
  limpiarCanvas();
  graficarGato();
  graficarComida();
  detectarColision();
}
function detectarColision(){
  if (gatoX < comidaX + ANCHO_COMIDA &&
      gatoX + ANCHO_GATO > comidaX &&
      gatoY < comidaY + ALTO_COMIDA &&
      gatoY + ALTO_GATO > comidaY) {
    
    puntos = puntos + 1;
    mostrarEnSpan("puntaje", puntos);

    clearInterval(detenerJ);
    tiempo = 15;
    mostrarEnSpan("tiempo", tiempo);
    detenerJ = setInterval(restarTiempo, 1000);

    if( puntos === 6){
      clearInterval(detenerJ);
      tiempo = 15;
      detenerJ = setInterval(restarTiempo ,1000);
      return;
    }
    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
    limpiarCanvas();
    graficarGato();
    graficarComida();
  } 
}
function restarTiempo(){
  tiempo = tiempo -1;
  mostrarEnSpan("tiempo", tiempo);
  if (tiempo === 0 ){
    clearInterval(detenerJ);
    alert("GAME OVER");
    location.reload();
  }
}
function reiniciarJuego(){
  location.reload();
}
