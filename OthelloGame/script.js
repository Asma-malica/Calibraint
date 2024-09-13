let player1 = "";
let player2 = "";
let currentPlayer = "black";
let board = [];
const boardSize = 8;
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];
function onClick() {
  window.location.href = "index.html";
}

window.onload = () => {
  player1 = localStorage.getItem("user1") || "Player 1";
  player2 = localStorage.getItem("user2") || "Player 2";
  document.getElementById(
    "current-player-display"
  ).textContent = `Current Player: ${player1} (Black)`;
  document
    .getElementById("restart-btn")
    .addEventListener("click", handleRestartClick);

  initializeBoard();
  renderBoard();
  updateScoreboard();
};

function initializeBoard() {
  board = Array(boardSize)
    .fill(null)
    .map(() => Array(boardSize).fill(null));
  board[3][3] = "white";
  board[3][4] = "black";
  board[4][3] = "black";
  board[4][4] = "white";
}

function renderBoard() {
  const gameBoard = document.getElementById("game-board");
  gameBoard.innerHTML = "";
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.dataset.row = row;
      square.dataset.col = col;

      if (board[row][col]) {
        const coins = document.createElement("div");
        coins.classList.add("coins", board[row][col]);
        square.appendChild(coins);
      }

      if (isValidMove(row, col) && getValidMovesCount() <= 2) {
        square.classList.add("valid-move");
        square.addEventListener("click", handleSquareClick);
        square.classList.add("valid-move");
        square.addEventListener("click", handleSquareClick);
      } else if (isValidMove(row, col)) {
        square.addEventListener("click", handleSquareClick);
      }

      gameBoard.appendChild(square);
    }
  }
}

function handleSquareClick(event) {
  const row = parseInt(event.target.dataset.row);
  const col = parseInt(event.target.dataset.col);

  makeMove(row, col);
  currentPlayer = currentPlayer === "black" ? "white" : "black";
  document.getElementById(
    "current-player-display"
  ).textContent = `Current Player: ${
    currentPlayer === "black" ? player1 : player2
  } (${currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)})`;
  renderBoard();
  updateScoreboard();

  if (!hasValidMoves()) {
    endGame();
  }
}

function makeMove(row, col) {
  const discsToFlip = getFlippableDiscs(row, col);
  if (discsToFlip.length > 0) {
    board[row][col] = currentPlayer;
    discsToFlip.forEach(([r, c]) => (board[r][c] = currentPlayer));
  }
}

function isValidMove(row, col) {
  if (board[row][col]) return false;
  return getFlippableDiscs(row, col).length > 0;
}

function getFlippableDiscs(row, col) {
  let flippable = [];
  for (const [dx, dy] of directions) {
    let r = row + dx,
      c = col + dy;
    let line = [];
    while (
      r >= 0 &&
      r < boardSize &&
      c >= 0 &&
      c < boardSize &&
      board[r][c] &&
      board[r][c] !== currentPlayer
    ) {
      line.push([r, c]);
      r += dx;
      c += dy;
    }
    if (
      r >= 0 &&
      r < boardSize &&
      c >= 0 &&
      c < boardSize &&
      board[r][c] === currentPlayer &&
      line.length > 0
    ) {
      flippable = flippable.concat(line);
    }
  }
  return flippable;
}

function hasValidMoves() {
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      if (isValidMove(row, col)) {
        return true;
      }
    }
  }
  return false;
}

function endGame() {
  let winner = getWinner();
  showWinnerPopup(winner);
}

function getWinner() {
  let blackCount = 0,
    whiteCount = 0;
  board.forEach((row) =>
    row.forEach((cell) => {
      if (cell === "black") blackCount++;
      if (cell === "white") whiteCount++;
    })
  );
  return blackCount > whiteCount
    ? player1
    : whiteCount > blackCount
    ? player2
    : "Draw";
}

function showWinnerPopup(winner) {
  document.getElementById("winner-popup").style.display = "block";
  document.getElementById(
    "winner-message"
  ).textContent = `${winner} has won the Game`;
  launchConfetti();
}

function launchConfetti() {
  const confettiContainer = document.getElementById("confetti");
  confettiContainer.innerHTML = "";

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = Math.random() * 100 + "vh";
    confetti.style.setProperty("--i", Math.random());
    confettiContainer.appendChild(confetti);
  }
}

function updateScoreboard() {
  let blackCount = 0,
    whiteCount = 0;
  board.forEach((row) =>
    row.forEach((cell) => {
      if (cell === "black") blackCount++;
      if (cell === "white") whiteCount++;
    })
  );
  document.getElementById(
    "player1-score"
  ).textContent = `Player 1 (Black): ${blackCount}`;
  document.getElementById(
    "player2-score"
  ).textContent = `Player 2 (White): ${whiteCount}`;
}

function getValidMovesCount() {
  let count = 0;
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      if (isValidMove(row, col)) count++;
    }
  }
  return count;
}

function handleRestartClick() {
  if (confirm("Do you really want to restart the game?")) {
    window.location.href = "index.html";
  }
}

document.getElementById("play-again-btn").addEventListener("click", () => {
  window.location.href = "index.html";
});

document.getElementById("exit-btn").addEventListener("click", () => {
  alert("Thank you for playing!");
  window.location.href = "index.html";
});
