/* ----- Maze ----- */

const canvas = document.getElementById('mazeCanvas');
const pen = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

//Recode to Set Difficulty
let cellSize = 50;

const playerRadius = cellSize / 2 - 5;
const endRadius = cellSize / 2 - 5;

let trail = [];
let generatedMaze;
let solutionPath;

let points = 0;
const cols = Math.floor(width / cellSize);
const rows = Math.floor(height / cellSize);

const playerIcon = { x: 0,y: 0, color: 'green'};
const end = { x: cols - 1, y: rows - 1, color: 'red'};

const messageBox = document.getElementById('mazeMessageBox');
messageBox.innerHTML = "<h4 style='color: black; font-weight: bold;'>Complete The Maze To Win The Game!</h4>";

function RestartMaze(){
    ResetPlayerPos();
    ClearScreen();
    SetupMaze();
    DrawMaze();
    AddListener();

    messageBox.innerHTML = "<h4 style='color: black; font-weight: bold;'>Complete The Maze To Win The Game!</h4>";
}

document.addEventListener('DOMContentLoaded', function () {
  const restartMazeBTN = document.querySelector('.restartMazeBTN');

  function stopBlinking() { restartMazeBTN.classList.remove("blink"); }

  restartMazeBTN.classList.add("blink");
  restartMazeBTN.addEventListener("click", stopBlinking);});

  function AddListener() { document.addEventListener('keydown', handleKeyPress);
}

document.getElementById('btnUp').addEventListener('click', function () { MovePlayer('ArrowUp', playerIcon); DrawMaze(); });
document.getElementById('btnDown').addEventListener('click', function () { MovePlayer('ArrowDown', playerIcon); DrawMaze(); });
document.getElementById('btnLeft').addEventListener('click', function () { MovePlayer('ArrowLeft', playerIcon); DrawMaze();});
document.getElementById('btnRight').addEventListener('click', function () { MovePlayer('ArrowRight', playerIcon); DrawMaze(); });

function handleKeyPress(event) {
  const key = event.key;
  MovePlayer(key, playerIcon);
  DrawMaze();
}

function MovePlayer(key, player) {
    let validMove = false;

    switch (key) {
        case 'ArrowUp':
            if (player.y > 0 && cells[player.x][player.y].walls.top === false) {
              player.y--;
              points++;
              validMove = true;
            }
            break;
        case 'ArrowDown':
            if (player.y < rows - 1 && cells[player.x][player.y].walls.bottom === false) {
              player.y++;
              points++;
              validMove = true;
            }
            break;
        case 'ArrowLeft':
            if (player.x > 0 && cells[player.x][player.y].walls.left === false) {
              player.x--;
              points++;
              validMove = true;
            }
            break;
        case 'ArrowRight':
            if (player.x < cols - 1 && cells[player.x][player.y].walls.right === false) {
              player.x++;
              points++;
              validMove = true;
            }
            break;
    }

    if (!validMove) {
        return;
    }

    if (player.x == cols - 1 && player.y == rows - 1) {

      /* Remove And Add Winning Message */
      const messageBox = document.getElementById('mazeMessageBox');
      messageBox.innerHTML = "<h4 style='color: green; font-weight: bold;'>You Escaped! Press New Game To Try Again!</h4>";
      messageBox.innerHTML += "<h6 id='moves'>Moves</h6>";
      document.getElementById('moves').innerHTML = "Moves Taken To Win: " + points;
      messageBox.style.fontSize = "1em"
    }
}

function ClearScreen() {
    pen.canvas.width = pen.canvas.width;
}

const cells = [];

for (let x = 0; x < rows; x++) {
    cells[x] = [];
    for (let y = 0; y < cols; y++) {
        cells[x][y] = null;
    }
}

class CellA {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.visited = false;
        this.walls = {
            top: true,
            right: true,
            bottom: true,
            left: true,
        };
    }

    show() {
        const x = this.x * cellSize;
        const y = this.y * cellSize;

        pen.beginPath();

        if (this.walls.top) {
            pen.moveTo(x, y);
            pen.lineTo(x + cellSize, y);
        }

        if (this.walls.right) {
            pen.moveTo(x + cellSize, y);
            pen.lineTo(x + cellSize, y + cellSize);
        }

        if (this.walls.bottom) {
            pen.moveTo(x + cellSize, y + cellSize);
            pen.lineTo(x, y + cellSize);
        }

        if (this.walls.left) {
            pen.moveTo(x, y + cellSize);
            pen.lineTo(x, y);
        }
        pen.strokeStyle = 'black';
        pen.lineWidth = 5;
        pen.lineCap = "round";
        pen.stroke();
    }
}

function SetupMaze() {
    // Initialize the cells
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            cells[x][y] = new CellA(x, y);
        }
    }
    GenerateMaze(0, 0);
}

function GenerateMaze(x, y) {
    const presentCell = cells[x][y];
    presentCell.visited = true;

    const directions = RandomizeMaze(['top', 'right', 'bottom', 'left']);

    for (const direction of directions) {
        const dx = { top: 0, right: 1, bottom: 0, left: -1 }[direction];
        const dy = { top: -1, right: 0, bottom: 1, left: 0 }[direction];

        const newX = x + dx;
        const newY = y + dy;

        // if the coordinates are inbound
        if (newX >= 0 && newX < cols  && newY >= 0 && newY < rows) {
            const neighbour = cells[newX][newY];
            
            // removing walls
            if (!neighbour.visited) {
                presentCell.walls[direction] = false;
                neighbour.walls[{ top: 'bottom', right: 'left', bottom: 'top', left: 'right', }[direction]] = false;
                GenerateMaze(newX, newY);
            }
        }
    }
    generatedMaze =  cells.map(row => row.map( cell => ({ ...cell })));
}


function ResetPlayerPos() { playerIcon.x = 0; playerIcon.y = 0; points = 0; trail = []; }

function DrawMaze() {
    ClearScreen();
    GenerateMaze(playerIcon.x, playerIcon.y);

    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
            cells[x][y].show();
        }
    }

    trail.push({ x: playerIcon.x, y: playerIcon.y });
    pen.beginPath();

    for (let i = 0; i < trail.length; i++) {
        const trailX = trail[i].x * cellSize + cellSize / 2;
        const trailY = trail[i].y * cellSize + cellSize / 2;

        if (i === 0) { pen.moveTo(trailX, trailY); } 
        else { pen.lineTo(trailX, trailY); }
    }

    pen.lineCap = "round";
    pen.strokeStyle = "white";
    pen.lineWidth = 4;
    pen.stroke();

    DrawPlayer(playerIcon);
    DrawExit();

    pen.strokeStyle = 'lightblue';
    pen.lineWidth = 6;
    pen.lineCap = "round";
    pen.stroke();
}

function DrawPlayer(player) {
    const x = player.x * cellSize + cellSize / 2;
    const y = player.y * cellSize + cellSize / 2;

    pen.beginPath();
    pen.arc(x, y, playerRadius, 0, 2 * Math.PI);
    pen.fillStyle = player.color;
    pen.fill();
}

function DrawExit() {
    const x = (end.x + 0.5) * cellSize;
    const y = (end.y + 0.5) * cellSize;

    pen.beginPath();
    pen.arc(x, y, endRadius, 0, 2 * Math.PI);
    pen.fillStyle = end.color;
    pen.fill();

}

function RandomizeMaze(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

SetupMaze();
DrawMaze();