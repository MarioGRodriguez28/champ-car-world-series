// console.log("Prueba pruebita main")
// GLOBAL VARIABLES
const startBtnDOM = document.querySelector("#start-btn");
const canvas = document.querySelector("#canvas");
const startScreenDOM = document.querySelector("#start-game");
const ctx = canvas.getContext("2d");
let game;
// const gameoverScreenDOM = document.querySelector("#gameover-screen")
// const pauseBtnDOM = document.querySelector("#pause-btn")
// const restartBtnDOM = document.querySelector("#restart-btn")


// STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  // console.log("intentando iniciar el juego")

  startScreenDOM.style.display = "none";
  canvas.style.display = "block";

  game = new Game();
  console.log(game);

  game.gameLoop();
};

// ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame);

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    console.log("Muevete carrito");
    game.car.moveCar("Derecha")
   
  }else if (event.code === "ArrowLeft") {
    console.log("Muevete ´pal otro lado");
    game.car.moveCar("Izquierda")}
    
});
