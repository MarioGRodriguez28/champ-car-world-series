// console.log("Prueba pruebita Competitors")
class Competidores {
  // propiedades de los Competidores
  constructor() {
    this.x = 260;
    this.y = -10;
    this.w = 220;
    this.h = 180;
    this.speed = 2;
    this.image = new Image();
    this.image.src = "./images/RacingCar10.png";
  }

  drawComp = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  speedComp = () => {
    this.y += this.speed;
  };
}
