// console.log("Prueba pruebita game");
class Game {
  // propiedades
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/pista.jpg";
    this.car = new Carrito();
    this.competitor = new Competidores();

    // Que los competidores se acerquen
    // Que los competidores aceleren
    // Spawning de competidores
    // Que el car se mueva a los lados
    // Propiedades del Car
    // Colisiones contra los competidores y los bordes
    // Game Over
  }

  drawBG = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  gameLoop = () => {
    //Fondo
    this.drawBG();
    //Car
    this.car.drawCar();
    //Competidores
    this.competitor.drawComp();
    //Velocidad
    this.competitor.speedComp();
    // //Movimiento
    // this.car.moveCar()




    
    requestAnimationFrame(this.gameLoop);
  };
}
