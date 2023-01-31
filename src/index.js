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

let currentMove = "X";
let player1 = 0;
let player2 = 0;

const toggleMove = () => {
  if (currentMove === "X") {
    currentMove = "O";
  } else {
    currentMove = "X";
  }
};

const addPointPlayerWinner = (resultGame) => {
  if (resultGame === "X") {
    player1 += 1;
    $scorePlayer1.textContent += player1;
  }
  if (resultGame === "O") {
    player2 += 1;
    $scorePlayer2.textContent += player2;
  }
};

const verifyGame = () => {
  if (
    $boardItem1.textContent != "" &&
    $boardItem1.textContent === $boardItem2.textContent &&
    $boardItem2.textContent === $boardItem3.textContent
  ) {
    //linha 1
    return currentMove;
  }
  if (
    $boardItem4.textContent != "" &&
    $boardItem4.textContent === $boardItem5.textContent &&
    $boardItem5.textContent === $boardItem6.textContent
  ) {
    //linha 2
    return currentMove;
  }
  if (
    $boardItem7.textContent != "" &&
    $boardItem7.textContent === $boardItem8.textContent &&
    $boardItem8.textContent === $boardItem9.textContent
  ) {
    //linha 3
    return currentMove;
  }
  if (
    $boardItem1.textContent != "" &&
    $boardItem1.textContent === $boardItem4.textContent &&
    $boardItem4.textContent === $boardItem7.textContent
  ) {
    //coluna 1
    return currentMove;
  }
  if (
    $boardItem2.textContent != "" &&
    $boardItem2.textContent === $boardItem5.textContent &&
    $boardItem5.textContent === $boardItem8.textContent
  ) {
    //coluna 2
    return currentMove;
  }
  if (
    $boardItem3.textContent != "" &&
    $boardItem3.textContent === $boardItem6.textContent &&
    $boardItem6.textContent === $boardItem9.textContent
  ) {
    //coluna 3
    return currentMove;
  }
  if (
    $boardItem1.textContent != "" &&
    $boardItem1.textContent === $boardItem5.textContent &&
    $boardItem5.textContent === $boardItem9.textContent
  ) {
    //diagonal 1
    return currentMove;
  }
  if (
    $boardItem3.textContent != "" &&
    $boardItem3.textContent === $boardItem5.textContent &&
    $boardItem5.textContent === $boardItem7.textContent
  ) {
    //diagonal 2
    return currentMove;
  }
};

for (let i = 0; i < 9; i++) {
  const $boardItem = $boardItemAll[i];
  $boardItem.addEventListener("click", () => {
    if ($boardItem.textContent != "") return;
    $boardItem.textContent = currentMove;
    const resultGame = verifyGame();
    if (resultGame != undefined) {
      addPointPlayerWinner(resultGame);
    }
    toggleMove();
  });
}

const $switcherBallBot = document.querySelector(".switcher-ball-bot");

const toggleSwitcher = () => {};
$switcherBallBot.addEventListener("click", () => {
  $switcherBallBot.classList.toggle("active");
});
