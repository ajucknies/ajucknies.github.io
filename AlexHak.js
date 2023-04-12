// set up variables
let score = 0;
let timeLeft = 30;
let gameIsOver = false;

// get DOM elements
let square = document.getElementById("game-square");
let scoreDisplay = document.getElementById("game-score");
let messageDisplay = document.getElementById("game-message");
let timerDisplay = document.getElementById("game-timer");

// add click event listener to square
square.addEventListener("click", function () {
  if (!gameIsOver) {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    moveSquare();
  }
});

// move square to new position
function moveSquare() {
  let x = Math.floor(Math.random() * 260);
  let y = Math.floor(Math.random() * 260);
  square.style.top = y + "px";
  square.style.left = x + "px";
}

// set up countdown timer
let countdown = setInterval(function () {
  timeLeft--;
  timerDisplay.textContent = "Time: " + timeLeft + " seconds";
  if (timeLeft == 0) {
    endGame();
  }
}, 1000);

// end the game
function endGame() {
  gameIsOver = true;
  clearInterval(countdown);
  messageDisplay.textContent = "Game over! You scored " + score + " points.";
}