// console.log("Prueba pruebita Player")
class Carrito {
  // ----------------------------------------------------propiedades del Carrito----------------------------------------------------
  constructor() {
    this.x = 10;
    this.y = 650;
    this.w = 220;
    this.h = 180;
    this.speed = 10;
    this.image = new Image();
    this.image.src = "./images/RacingCar1.png";
    this.speedMove = 10;
  }

  drawCar = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveCar = () => {
    this.x += this.speed;
  };
}
