//Obtener canvas y contexto
const canvas = document.getElementById('areaJuego');
const ctx = canvas.getContext('2d');

//Variables inicializadas en cero 
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

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
  graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, 'blue');
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
  gatoX = (canvas.width - ANCHO_GATO) / 2;
  gatoY = (canvas.height - ALTO_GATO) / 2;

  //Calcular posicion para que comida este en la esquina inferior derecha
  comidaX = canvas.width - ANCHO_COMIDA;
  comidaY = canvas.height - ALTO_COMIDA;
  graficarGato();
  graficarComida();
}
 // funcion encargada de dibujar cualquier rectangulo 
function graficarRectangulo(x, y, ancho, alto, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, ancho, alto);
}


