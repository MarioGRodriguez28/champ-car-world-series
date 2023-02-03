class Carrito {
  // ----------------------------------------------------propiedades del Carrito----------------------------------------------------
  constructor() {
    this.x = 221;
    this.y = 480;
    this.w = 58;
    this.h = 105;
    this.speed = 200;
    this.image = new Image();
    this.image.src = "./images/RacingCar1.png";
  }

  drawCar = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveCar = (direccion) => {
    if (direccion === "Derecha" && this.x <400) {
      this.x += this.speed;
    console.log(this.x)
      
    } 
    
    else  if (direccion === "Izquierda" && this.x > 40 ) 
    this.x -= this.speed;
    console.log(this.x)
  };
}
