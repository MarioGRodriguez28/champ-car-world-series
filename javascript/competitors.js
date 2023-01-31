// console.log("Prueba pruebita Competitors")
class Competidores {
  // propiedades de los Competidores
  constructor(xPos, otherCar) {
    this.x = xPos;
    this.y = -110;
    this.w = 280;
    this.h = 180;
    this.speed = 10;
    this.image = new Image();
    if(otherCar ===true){this.image.src= "./images/RacingCar3.png"
  }else {this.image.src= "../images/RacingCar6.png"}
    
    
   
  }

  drawComp = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  speedComp = () => {
    this.y += this.speed;
  };
}
