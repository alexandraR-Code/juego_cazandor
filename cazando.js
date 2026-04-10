//Obtener canvas y contexto
const canvas = document.getElementById('areaJuego');
const ctx = canvas.getContext('2d');

//Funcion graficarGato(sin parametros)
function graficarGato() {
  // Implementación de la función
  // Color del gato 
  ctx.fillStyle = 'blue';
  // Dibuja un cuadrado representando al gato
  ctx.fillRect(200, 200, 50, 50); 
}

