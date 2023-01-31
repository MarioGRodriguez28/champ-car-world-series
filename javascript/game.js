// console.log("Prueba pruebita game");
class Game {
  // propiedades
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/pista.jpg";
    this.car = new Carrito();
    this.competitorArr = [];

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

  compRace = () => {
    if( this.competitorArr.length === 0) {
      let compAdd = new Competidores();
    this.competitorArr.push(compAdd);
    }
    
  };
  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  gameLoop = () => {
    //Limpiar Canvas
    this.clearCanvas();

    
    
    // Movimiento de competidores
    this.competitorArr.forEach((eachComp) => {
      eachComp.speedComp();
    });
    
    //Sumar competidores
    this.compRace;
    
    //Fondo
    this.drawBG();

    //Competidores
    this.competitorArr.forEach((eachComp) => {
      eachComp.drawComp();      
    });
    
    //Car
    this.car.drawCar();





    requestAnimationFrame(this.gameLoop);
  };
}
