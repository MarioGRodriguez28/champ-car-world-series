// console.log("Prueba pruebita game");
class Game {
  // propiedades
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/pista.jpg";
    this.car = new Carrito();
    console.log(this.Carrito);
    this.competitor;
    // Que los competidores se acerquen
    // Que los competidores aceleren
    // Spawning de competidores
    // Que el car se mueva a los lados
    // Propiedades del Car
    // Colisiones contra los competidores y los bordes
    // Game Over
  }

  gameLoop = () => {
    // console.log("Recursion");

    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      this.car.image,
      this.car.x,
      this.car.y,
      this.car.w,
      this.car.h
    );

    requestAnimationFrame(this.gameLoop);
  };
}
