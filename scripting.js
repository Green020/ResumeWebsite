/* ----- Tic Tac Toe ----- */
const statusDisplay = document.querySelector('.status');
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => {
    return `${currentPlayer} has won!`;
};
const drawMessage = () => `TIE`;
const TurnOrder = () => `${currentPlayer} turn`;

statusDisplay.innerHTML = TurnOrder();

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', CellClicked));
document.querySelector('.restartBTN').addEventListener('click', RestartGame);

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

function RestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = TurnOrder();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}    

/* ----- Functions and Events ----- */
function menuToggle() {

    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function RunLogicGate() {
    var INPUT_1 = document.getElementById('INPUT_1').checked;
    var INPUT_2 = document.getElementById('INPUT_2').checked;
    var GATE_1 = document.getElementById('GATE_1').value;

    var redLIGHT = document.getElementById('redLight');
    var greenLIGHT =document.getElementById('greenLight');

    var valResult;

    switch (GATE_1) {
        case "OPEN":
            if(INPUT_1 == true){
                valResult = INPUT_1;
            }
            else if(INPUT_2 == true){
                valResult = INPUT_2
            }
            else{
                valResult = false;
            }
            break;
        case "AND":
            valResult = INPUT_1 && INPUT_2;
            break;
        case "OR":
            valResult = INPUT_1 || INPUT_2;
            break;
        case "XOR":
            valResult = INPUT_1 !== INPUT_2;
            break;
        case "NOT":
            valResult = !INPUT_1;
            break;
        case "NAND":
            valResult = !(INPUT_1 && INPUT_2);
            break;
        case "NOR":
            valResult = !(INPUT_1 || INPUT_2);
            break;
        case "XNOR":
            valResult = (INPUT_1 && INPUT_2) || (!INPUT_1 && !INPUT_2);
            break;
        case "CLOSED":
            valResult = (INPUT_1 && INPUT_2) || (!INPUT_1 && !INPUT_2);
            break;
            
    }

    if(valResult == true){
        redLIGHT.style.display = "none";
        greenLIGHT.style.display = "block";
    }
    else if(valResult == false){
        redLIGHT.style.display = "block";
        greenLIGHT.style.display = "none";
    }

    /* var GATE_1 = document.getElementById('OUTPUT_1').value = valResult; */
}

function SendMessage(message){
    document.getElementById('messageBoxOverlay').style.display = 'block';
    document.getElementById('messageMSGBox').style.display = 'block';
    document.getElementById('messageMSG').innerHTML = message;
}

function CloseMessage(){
    document.getElementById('messageBoxOverlay').style.display = 'none';
    document.getElementById('messageMSGBox').style.display = 'none';
    document.getElementById('messageMSG').innerHTML = "NO MESSAGE SET";
}