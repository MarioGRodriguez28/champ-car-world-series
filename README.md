# Champ Car World Series

## [Play the Game](https://mariogrodriguez28.github.io/champ-car-world-series/)

# Description

Champ Car World Series Based on the famous car competitions that bear the same name of the game "Champ Car World Series" is a game in which the player has to move horizontally dodging other competitors and avoid colliding with them, the idea of the game is to stay as long as possible in the competition without colliding with another player.

# Main Functionalities

The game initially tries to stay as long as possible in the competition, dodging the other competitors to avoid colliding with them.

# Backlog Functionalities

- Implement player lives system
- Increased difficulty after a certain amount of time has passed.
- Speed acceleration by controls

# Proyect Structure

## main.js

- startGame ()
- restartGame()
- ADD EVENT LISTENERS

## game.js

- constructor()
- scoreDisplay()
- gameOver()
- colisionCar()
- compRace()
- drawBG()
- clearCanvas()
- gameLoop()

## player.js

class Carrito {

- constructor() {
  this.x;
  this.y;
  this.w
  this.h;
  this.speed ;
  this.image;
  this.image.src;
  }
- drawCar () {}
- moveCar () {}
  }

## competitors.js

class Competidores {

- constructor() {
  this.x;
  this.y;
  this.w;
  this.h;
  this.speed;
  this.image;
  }

- drawComp()
- speedComp()
- if(){}
  }

# States and Transitions

- START SCREEN
- SGAME SCREEN
- SGAME OVER SCREEN

# Extra Links

### Slides

[Link](www.your-url-here.com)
