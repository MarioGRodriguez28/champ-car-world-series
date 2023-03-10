// GLOBAL VARIABLES
const startBtnDOM = document.querySelector("#start-btn");
const canvas = document.querySelector("#canvas");
const startScreenDOM = document.querySelector("#start-game");
const gameOverScreenDom = document.querySelector("#gameover-screen");
const restartBtnDOM = document.querySelector("#restart-btn");
const ctx = canvas.getContext("2d");
const scoreDOM = document.querySelector("#score");
const logoscoreDOM = document.querySelector("#logoscore");
let myMusic;
let game;

// STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  startScreenDOM.style.display = "none";
  canvas.style.display = "block";
  scoreDOM.style.display = "block";
  logoscoreDOM.style.display = "block";
 
  game = new Game();
  console.log(game);
  game.gameLoop();
};

const restartGame = () => {
  startScreenDOM.style.display = "none";
  canvas.style.display = "block";
  scoreDOM.style.display = "block";

  gameOverScreenDom.style.display = "none";

  game = new Game();
  console.log(game);

  game.gameLoop();
};

// ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", restartGame);

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    game.car.moveCar("Derecha");
  } else if (event.code === "ArrowLeft") {
    game.car.moveCar("Izquierda");
  }
});
