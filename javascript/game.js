// console.log("Prueba pruebita game");
class Game {
  // propiedades
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/pista.jpg";

    this.car = new Carrito();

    this.competitorArr = [];
    this.frame = 1;

    this.spaceCar = 150;
    this.gameOn = true;
  }






  gameOver = () => {
    this.gameOn = false;

    canvas.style.display = "none";

    gameOverScreenDom.style.display = "flex";
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
      let carPosX = Math.random() * (30);

      let compAdd = new Competidores(carPosX, true);
      this.competitorArr.push(compAdd);

      let compAdd2 = new Competidores(compAdd.x + this.spaceCar, false);
      this.competitorArr.push(compAdd2);
    }
//-----------------------------------------------
    // for (let i = 0; i < Math.floor(Math.random() * 2) + 1; i++) {
    //   let carPosX = Math.floor(Math.random() * 3)
  
      // if (this.competitorArr.length > 0) {
      //   if (carPosX === this.competitorArr[this.competitorArr.length - 1][1]) {
      //     i--;
      //   }
      //   else {
      //     this.competitorArr.push([carPosX, this.competitorArr* -1]);
      //   }
      // }
      // else {
      //   this.competitorArr.push([carPosX, this.competitorArr * -1]);
      // } 
      //console.log("esto que hace")
    // }

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
