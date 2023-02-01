// console.log("Prueba pruebita Competitors")
class Competidores {
  // propiedades de los Competidores
  constructor(xPos, oneCar) {
    this.x = xPos;
    this.y = -110;
    this.w = 116;
    this.h = 210;
    this.speed = 5;
    this.image = new Image();
    if (oneCar === true) {
      this.image.src = "./images/RacingCar3.png";
    } else {
      this.image.src = "./images/RacingCar6.png";
    }
  }

  drawComp = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  speedComp = () => {
    this.y += this.speed;
  };
}
