// console.log("Prueba pruebita Competitors")
class Competidores {
  // propiedades de los Competidores
  constructor(xPos) {
    this.x = xPos;
    this.y = -110;
    this.w = 280;
    this.h = 180;
    this.speed = 10;
    this.image = new Image();
    this.image.src= "./images/RacingCar3.png"
    
   
  }

  drawComp = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  speedComp = () => {
    this.y += this.speed;
  };
}
