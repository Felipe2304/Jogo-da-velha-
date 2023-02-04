const $boardItemAll = document.querySelectorAll(".board-item");
const $boardItem1 = document.querySelector(".board-item-1");
const $boardItem2 = document.querySelector(".board-item-2");
const $boardItem3 = document.querySelector(".board-item-3");
const $boardItem4 = document.querySelector(".board-item-4");
const $boardItem5 = document.querySelector(".board-item-5");
const $boardItem6 = document.querySelector(".board-item-6");
const $boardItem7 = document.querySelector(".board-item-7");
const $boardItem8 = document.querySelector(".board-item-8");
const $boardItem9 = document.querySelector(".board-item-9");
const $scorePlayer1 = document.querySelector(".score-player-1");
const $scorePlayer2 = document.querySelector(".score-player-2");
const $inputNamePlayer1 = document.querySelector(".input-name-player-1");
const $inputNamePlayer2 = document.querySelector(".input-name-player-2");
const $buttonStart = document.querySelector(".btn-start");

let currentMove = "X";
let winner = null;
let player1 = 0;
let player2 = 0;

const toggleMove = () => {
  if (currentMove === "X") {
    currentMove = "O";
  } else {
    currentMove = "X";
  }
};

const verifyGame = () => {
  if (
    $boardItem1.textContent != "" &&
    $boardItem1.textContent === $boardItem2.textContent &&
    $boardItem2.textContent === $boardItem3.textContent
  ) {
    //linha 1
    winner = currentMove;

    return currentMove;
  } else if (
    $boardItem4.textContent != "" &&
    $boardItem4.textContent === $boardItem5.textContent &&
    $boardItem5.textContent === $boardItem6.textContent
  ) {
    //linha 2
    winner = currentMove;

    return currentMove;
  } else if (
    $boardItem7.textContent != "" &&
    $boardItem7.textContent === $boardItem8.textContent &&
    $boardItem8.textContent === $boardItem9.textContent
  ) {
    //linha 3
    winner = currentMove;

    return currentMove;
  } else if (
    $boardItem1.textContent != "" &&
    $boardItem1.textContent === $boardItem4.textContent &&
    $boardItem4.textContent === $boardItem7.textContent
  ) {
    //coluna 1
    winner = currentMove;

    return currentMove;
  } else if (
    $boardItem2.textContent != "" &&
    $boardItem2.textContent === $boardItem5.textContent &&
    $boardItem5.textContent === $boardItem8.textContent
  ) {
    //coluna 2
    winner = currentMove;

    return currentMove;
  } else if (
    $boardItem3.textContent != "" &&
    $boardItem3.textContent === $boardItem6.textContent &&
    $boardItem6.textContent === $boardItem9.textContent
  ) {
    //coluna 3

    winner = currentMove;

    return currentMove;
  } else if (
    $boardItem1.textContent != "" &&
    $boardItem1.textContent === $boardItem5.textContent &&
    $boardItem5.textContent === $boardItem9.textContent
  ) {
    //diagonal 1
    winner = currentMove;

    return currentMove;
  } else if (
    $boardItem3.textContent != "" &&
    $boardItem3.textContent === $boardItem5.textContent &&
    $boardItem5.textContent === $boardItem7.textContent
  ) {
    //diagonal 2

    winner = currentMove;

    return currentMove;
  }
};

const playerGame = () => {
  for (let i = 0; i < 9; i++) {
    const $boardItem = $boardItemAll[i];
    $boardItem.addEventListener("click", () => {
      if ($boardItem.textContent != "") return;
      $boardItem.textContent = currentMove;
      const resultGame = verifyGame();

      toggleMove();
    });
  }
};
let start = false;

const startGame = () => {
  if (!start) {
    start = true;
    playerGame();
    $buttonStart.classList.add("button-active");
    $buttonStart.textContent = "Pausar";
  } else if (start) {
    start = false;
    $buttonStart.classList.remove("button-active");
    $buttonStart.textContent = "Jogar";
  }

  console.log(start);
};

$buttonStart.addEventListener("click", startGame);

const $switcherBallBot = document.querySelector(".switcher-ball-bot");

const toggleSwitcher = () => {};
$switcherBallBot.addEventListener("click", () => {
  $switcherBallBot.classList.toggle("active");
});
