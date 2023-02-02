// console.log("Prueba pruebita game");
class Game {
  // propiedades
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/pista.jpg";

    this.car = new Carrito();

    this.competitorArr = [];
    this.frame = 1;

    this.spaceCar = 155;
    this.gameOn = true;
  }


  gameOver = () => {
    this.gameOn = false;

    canvas.style.display = "none";

    gameOverScreenDom.style.display = "flex";
    
    restartBtnDOM="flex"
  };

  colisionCar = () => {
    this.competitorArr.forEach((eachComp) => {
      if (
        eachComp.x < this.car.x + this.car.w &&
        eachComp.x + eachComp.w > this.car.x &&
        eachComp.y < this.car.y + this.car.h &&
        eachComp.h + eachComp.y > this.car.y
      ) {
        this.gameOver();
      }
    });
  };

  compRace = () => {
    if (this.competitorArr.length === 0 || this.frame % 120 === 0) {
      
      //--- Competidor 1
      let carPosX = Math.floor(Math.random() * 30);
      let compAdd = new Competidores(carPosX, true);
      this.competitorArr.push(compAdd);

     //--- Competidor 2

      setTimeout(() => {
        let compAdd2 = new Competidores(compAdd.x + this.spaceCar, false);
        this.competitorArr.push(compAdd2);
      }, 3100); 
      
      //--- Competidor 3
      let carPosX2 = Math.floor(Math.random() * 422) 
      let compAdd3 = new Competidores(carPosX2);
      this.competitorArr.push(compAdd3);
    }
  };

  drawBG = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  gameLoop = () => {
    this.frame++;
    //Limpiar Canvas
    this.clearCanvas();

    // Movimiento de competidores
    this.competitorArr.forEach((eachComp) => {
      eachComp.speedComp();
    });

    //Sumar competidores
    this.compRace();

    //Colisiones
    this.colisionCar();

    //Fondo
    this.drawBG();

    //Competidores
    this.competitorArr.forEach((eachComp) => {
      eachComp.drawComp();
    });

    //Car
    this.car.drawCar();

    //
    if (this.gameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
