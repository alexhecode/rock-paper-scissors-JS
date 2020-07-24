const startGameBtn = document.getElementById("start-game-btn");

const SELECTION_ROCK = "ROCK";
const SELECTION_PAPER = "PAPER";
const SELECTION_SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = SELECTION_ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${SELECTION_ROCK}, ${SELECTION_PAPER} OR ${SELECTION_SCISSORS}?`,
    ""
  ).toUpperCase();

  if (
    selection !== SELECTION_ROCK &&
    selection !== SELECTION_PAPER &&
    selection !== SELECTION_SCISSORS
  ) {
    alert(`Invalid input! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return SELECTION_ROCK;
  } else if (randomValue < 0.67) {
    return SELECTION_PAPER;
  } else {
    return SELECTION_SCISSORS;
  }
};

const getResult = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === SELECTION_ROCK && pChoice === SELECTION_PAPER) ||
      (cChoice === SELECTION_PAPER && pChoice === SELECTION_SCISSORS) ||
      (cChoice === SELECTION_SCISSORS && pChoice === SELECTION_ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === SELECTION_ROCK && pChoice === SELECTION_PAPER) ||
//     (cChoice === SELECTION_PAPER && pChoice === SELECTION_SCISSORS) ||
//     (cChoice === SELECTION_SCISSORS && pChoice === SELECTION_ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log("The game is starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  let result;
  if (playerSelection) {
    result = getResult(computerSelection, playerSelection);
  } else {
    result = getResult(computerSelection);
  }
  let message = `You chose ${
    playerSelection || DEFAULT_USER_CHOICE
  }, the Computer picked ${computerSelection}, therefore `;
  if (result === RESULT_DRAW) {
    message = message + "we have a draw!";
  } else if (result === RESULT_PLAYER_WINS) {
    message = message + "you won!";
  } else {
    message = message + "you lost, the Computer won!";
  }
  alert(message);
  gameIsRunning = false;
});
