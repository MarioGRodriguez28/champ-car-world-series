// console.log("Prueba pruebita main")
// // * GLOBAL VARIABLES
const startBtnDOM = document.querySelector("#start-btn")
const canvas = document.querySelector("#canvas")
const startScreenDOM = document.querySelector("#start-game")
const ctx = canvas.getContext("2d")
// const gameoverScreenDOM = document.querySelector("#gameover-screen")
// const pauseBtnDOM = document.querySelector("#pause-btn")
// const restartBtnDOM = document.querySelector("#restart-btn")
// let game;




// // * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  // console.log("intentando iniciar el juego")

  startScreenDOM.style.display = "none";
  canvas.style.display = "block";

  
 const game = new Game() 
  console.log(game)



  game.gameLoop()

}


  



// // * ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame)

