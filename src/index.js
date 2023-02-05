const $boardItem1 = document.querySelector(".board-item-1");
const $boardItem2 = document.querySelector(".board-item-2");
const $boardItem3 = document.querySelector(".board-item-3");
const $boardItem4 = document.querySelector(".board-item-4");
const $boardItem5 = document.querySelector(".board-item-5");
const $boardItem6 = document.querySelector(".board-item-6");
const $boardItem7 = document.querySelector(".board-item-7");
const $boardItem8 = document.querySelector(".board-item-8");
const $boardItem9 = document.querySelector(".board-item-9");
const $boardItemAll = document.querySelectorAll(".board-item");
const boardItemList = [
  $boardItem1,
  $boardItem2,
  $boardItem3,
  $boardItem4,
  $boardItem5,
  $boardItem6,
  $boardItem7,
  $boardItem8,
  $boardItem9,
];

const matchHistoryList = [];

const $scorePlayer1 = document.querySelector(".score-player-1");
const $scorePlayer2 = document.querySelector(".score-player-2");

const $inputNamePlayer1 = document.querySelector(".input-name-player-1");
const $inputNamePlayer2 = document.querySelector(".input-name-player-2");

const $buttonStart = document.querySelector(".btn-start");

const $playerWinnerText = document.querySelector(".player-winner");

const $switcherBallBot = document.querySelector(".switcher-ball-bot");
const $switcherBallMode = document.querySelector(".switcher-ball-mode");

const $matchList = document.querySelector(".match-list");

let currentMove = "X";
let winner = null;
let player1 = 0;
let player2 = 0;
let start = false;
let switcherModeActive = false;

const toggleMove = () => {
  if (currentMove === "X") {
    currentMove = "O";
  } else {
    currentMove = "X";
  }
};

const verifyDraw = () => {
  const draw = boardItemList.every((move) => {
    return move.textContent !== "";
  });

  return draw;
};

const ShowMoveBoard = (position1, position2, position3) => {
  const positionWinner = [position1, position2, position3];

  positionWinner.forEach((move) => {
    move.classList.add("show-winner");

    setTimeout(() => {
      move.classList.remove("show-winner");
    }, 1000);
  });
};

const removeMovesBoard = () => {
  setTimeout(() => {
    boardItemList.forEach((move) => {
      move.textContent = "";
    });
  }, 1000);
};

const verifyGame = (fullBoard) => {
  if (
    $boardItem1.textContent != "" &&
    $boardItem1.textContent === $boardItem2.textContent &&
    $boardItem2.textContent === $boardItem3.textContent
  ) {
    //linha 1
    winner = currentMove;
    ShowMoveBoard($boardItem1, $boardItem2, $boardItem3);
    return currentMove;
  } else if (
    $boardItem4.textContent != "" &&
    $boardItem4.textContent === $boardItem5.textContent &&
    $boardItem5.textContent === $boardItem6.textContent
  ) {
    //linha 2
    winner = currentMove;

    ShowMoveBoard($boardItem4, $boardItem5, $boardItem6);
    return currentMove;
  } else if (
    $boardItem7.textContent != "" &&
    $boardItem7.textContent === $boardItem8.textContent &&
    $boardItem8.textContent === $boardItem9.textContent
  ) {
    //linha 3
    winner = currentMove;

    ShowMoveBoard($boardItem7, $boardItem8, $boardItem9);
    return currentMove;
  } else if (
    $boardItem1.textContent != "" &&
    $boardItem1.textContent === $boardItem4.textContent &&
    $boardItem4.textContent === $boardItem7.textContent
  ) {
    //coluna 1
    winner = currentMove;

    ShowMoveBoard($boardItem1, $boardItem4, $boardItem7);
    return currentMove;
  } else if (
    $boardItem2.textContent != "" &&
    $boardItem2.textContent === $boardItem5.textContent &&
    $boardItem5.textContent === $boardItem8.textContent
  ) {
    //coluna 2
    winner = currentMove;

    ShowMoveBoard($boardItem2, $boardItem5, $boardItem8);
    return currentMove;
  } else if (
    $boardItem3.textContent != "" &&
    $boardItem3.textContent === $boardItem6.textContent &&
    $boardItem6.textContent === $boardItem9.textContent
  ) {
    //coluna 3

    winner = currentMove;
    ShowMoveBoard($boardItem3, $boardItem6, $boardItem9);

    return currentMove;
  } else if (
    $boardItem1.textContent != "" &&
    $boardItem1.textContent === $boardItem5.textContent &&
    $boardItem5.textContent === $boardItem9.textContent
  ) {
    //diagonal 1
    winner = currentMove;
    ShowMoveBoard($boardItem1, $boardItem5, $boardItem9);

    return currentMove;
  } else if (
    $boardItem3.textContent != "" &&
    $boardItem3.textContent === $boardItem5.textContent &&
    $boardItem5.textContent === $boardItem7.textContent
  ) {
    //diagonal 2

    winner = currentMove;
    ShowMoveBoard($boardItem3, $boardItem5, $boardItem7);
    return currentMove;
  } else if (fullBoard) {
    winner = null;
    return "empate";
  }
};

const addPoint = (namePlayerValue1, namePlayerValue2) => {
  if (winner === "X") {
    player1++;
    $scorePlayer1.textContent = player1;

    if (namePlayerValue1.length > 0) {
      $playerWinnerText.textContent = namePlayerValue1 + " venceu";
    } else {
      $playerWinnerText.textContent = "jogador 1" + " venceu";
    }
  }

  if (winner === "O") {
    player2++;
    $scorePlayer2.textContent = player2;
    $playerWinnerText.textContent = namePlayerValue2 + " venceu";
    if (namePlayerValue2.length > 0) {
      $playerWinnerText.textContent = namePlayerValue2 + " venceu";
    } else {
      $playerWinnerText.textContent = "Jogador 2" + " venceu";
    }
  }
};

const toggleSwitcherMode = () => {
  if (switcherModeActive) {
    $switcherBallMode.classList.add("active");
    teste(5);
  }

  if (!switcherModeActive) {
    $switcherBallMode.classList.remove("active");
    teste(3);
  }

  switcherModeActive = !switcherModeActive;
};
$switcherBallMode.addEventListener("click", toggleSwitcherMode);

const getScenario = () => {
  const scenario = [];
  for (const boardItem of $boardItemAll) {
    const boardText = boardItem.textContent;
    scenario.push(boardText);
  }

  matchHistoryList.push(scenario);
  setScenario();
};

const setScenario = () => {
  $matchList.innerHTML = "";

  console.log();
  matchHistoryList.forEach((scenario) => {
    printScenario(scenario);
  });
};

const printScenario = (scenario) => {
  const matchListItem = document.createElement("li");
  matchListItem.classList.add("match-list-item");

  const winnerBox = document.createElement("div");
  winnerBox.classList.add("winner-box");

  const winnerText = document.createElement("span");
  winnerText.classList.add("winner-text");
  winnerText.textContent = "Vencedor";

  const winnerName = document.createElement("span");
  winnerName.classList.add("winner-name");
  winnerName.textContent = "";

  const scenarioText = document.createElement("span");
  scenarioText.classList.add("scenery-text");
  scenarioText.textContent = "Cenário";

  const miniBoardScenario = document.createElement("div");
  miniBoardScenario.classList.add("mini-board-scenery");
  winnerBox.appendChild(winnerText);
  winnerBox.appendChild(winnerName);

  matchListItem.appendChild(winnerBox);
  matchListItem.appendChild(scenarioText);

  scenario.forEach((move) => {
    const miniBoardScenarioItem = document.createElement("div");
    miniBoardScenarioItem.classList.add("mini-board-scenery-item");
    miniBoardScenarioItem.textContent = move;
    miniBoardScenario.appendChild(miniBoardScenarioItem);
  });

  matchListItem.appendChild(miniBoardScenario);
  $matchList.appendChild(matchListItem);
};

const getPlayerWinner = (resultGame, namePlayerValue1, namePlayerValue2) => {
  if (resultGame === "X" || resultGame === "O") {
    addPoint(namePlayerValue1, namePlayerValue2);
    console.log(resultGame);
    removeMovesBoard();
  }
  if (resultGame === "empate") {
    $playerWinnerText.textContent = "Empate!";
    getScenario("empate");
    removeMovesBoard();
  }
};

const playerGame = () => {
  const namePlayerValue1 = $inputNamePlayer1.value;
  const namePlayerValue2 = $inputNamePlayer2.value;

  for (let i = 0; i < 9; i++) {
    const $boardItem = $boardItemAll[i];
    $boardItem.addEventListener("click", () => {
      if ($boardItem.textContent != "") return;
      $boardItem.textContent = currentMove;
      const resultGame = verifyGame(verifyDraw());
      getPlayerWinner(resultGame, namePlayerValue1, namePlayerValue2);
      toggleMove();
    });
  }
};

const startGame = () => {
  if (!start) {
    start = true;
    playerGame();
    $buttonStart.classList.add("button-active");
    $buttonStart.textContent = "Jogando...";
  } else if (start) {
    start = false;
    $buttonStart.classList.remove("button-active");
    $buttonStart.textContent = "Jogar";
  }
};

$buttonStart.addEventListener("click", startGame);
