let gameBoard = [0,1,2,3,4,5,6,7,8];
let currentPlayer = "X";
let currentPlayerText = document.getElementById("currentPlayer");
currentPlayerText.innerHTML = `Current Player: ${currentPlayer}`;

function handleClick(event) {
  let id = event.target.id;
  let index = parseInt(id);
  if(gameBoard[index] !== "X" && gameBoard[index] !== "O"){
    gameBoard[index] = currentPlayer;
    event.target.innerHTML = currentPlayer;
    checkForWin();
    switchPlayer();
    currentPlayerText.innerHTML = `Current Player: ${currentPlayer}`;
  }
}

function switchPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function checkForWin() {
  let winCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for (let i = 0; i < winCombinations.length; i++) {
    let combination = winCombinations[i];
    if (gameBoard[combination[0]] === currentPlayer && gameBoard[combination[1]] === currentPlayer && gameBoard[combination[2]] === currentPlayer) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
      return;
    }
  }
  let emptySpaces = gameBoard.filter(s => s !== "X" && s !== "O");
  if (emptySpaces.length === 0) {
    alert("It's a tie!");
    resetGame();
    return;
  }
}

function resetGame() {
  gameBoard = [0,1,2,3,4,5,6,7,8];
  currentPlayer = "X";
  currentPlayerText.innerHTML = `Current Player: ${currentPlayer}`;
  let tdList = document.getElementsByTagName("td");
  for (let i = 0; i < tdList.length; i++) {
    tdList[i].innerHTML = "";
  }
}

document.getElementById("reset").addEventListener("click", resetGame);
