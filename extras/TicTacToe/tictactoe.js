/* ----- Tic Tac Toe ----- */
const statusDisplay = document.querySelector('.status');
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => { return `<h4 style='color: green; font-weight: bold;'>${currentPlayer} HAS WON!</h4>`; };
const drawMessage = () => `<h4 style='color: red; font-weight: bold;'>YOU TIED!</h4>`;
const TurnOrder = () => `<h4 style='color: black; font-weight: bold;'>${currentPlayer} TURN</h4>`;

statusDisplay.innerHTML = TurnOrder();

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', CellClicked));
document.querySelector('.restartBTN').addEventListener('click', RestartTicTacToe);

function CellClicked(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    CellPlayed(clickedCell, clickedCellIndex);
    ResultValidation();
}

function CellPlayed(clickedCell, clickedCellIndex) {

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function ResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    PlayerChange();
}

function PlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = TurnOrder();
}

function RestartTicTacToe() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = TurnOrder();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}    