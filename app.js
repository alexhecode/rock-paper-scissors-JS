const startGameBtn = document.getElementById("start-game-btn");

const SELECTION_ROCK = "ROCK";
const SELECTION_PAPER = "PAPER";
const SELECTION_SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = SELECTION_ROCK;

const getPlayerChoice = function () {
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
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

startGameBtn.addEventListener("click", function () {
  console.log("The game is starting...");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
