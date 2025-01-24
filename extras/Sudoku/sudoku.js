document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("sudokucontainer");

    // Function to generate a random Sudoku puzzle
    function GenerateRandomSudoku() {
        const board = [];
        const maxGEN = 25;

        for(let a = 0; a < 9; a++){
            for(let b = 0; b < 9; b++){
                
            }
        }

        // Placeholder function for generating a random puzzle (9x9)
        const puzzle = [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ];
        return puzzle;
    }

    // Function to solve the Sudoku puzzle
    function SolveSudoku(board) {
        // Placeholder function for solving Sudoku puzzle
        const solvedPuzzle = JSON.parse(JSON.stringify(board));
        SolveHelper(solvedPuzzle);
        return solvedPuzzle;
    }

    // Helper function for solving Sudoku recursively
    function SolveHelper(board) {
        const emptyCell = FindEmptyCell(board);
        if (!emptyCell) {
            return true;
        }

        const [row, col] = emptyCell;
        for (let num = 1; num <= 9; num++) {
            if (ValidMove(board, row, col, num)) {
                board[row][col] = num;
                if (SolveHelper(board)) {
                    return true;
                }
                board[row][col] = 0; // Backtrack
            }
        }
        return false; // No valid number found for this cell
    }

    // Function to find an empty cell in the Sudoku puzzle
    function FindEmptyCell(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === 0) {
                    return [row, col];
                }
            }
        }
        return null; // No empty cell found
    }

    // Function to check if a move is valid
    function ValidMove(board, row, col, num) {
        // Check row
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) {
                return false;
            }
        }
        // Check column
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) {
                return false;
            }
        }
        // Check 3x3 grid
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === num) {
                    return false;
                }
            }
        }
        return true; // Move is valid
    }

    // Function to create the Sudoku puzzle grid
    function CreateSudokuGrid(puzzle) {
        grid.innerHTML = '';
        puzzle.forEach((row, rowIndex) => {
            const rowElement = document.createElement('div');
            rowElement.classList.add('row');
            if(rowIndex == 3 || rowIndex == 6){
                rowElement.style.padding = "3px 0px 0px 0px";
            }
            row.forEach((cell, columnIndex) => {
                const cellElement = document.createElement('input');
                cellElement.classList.add('cell');
                cellElement.classList.add((rowIndex + columnIndex) % 2 === 0 ? 'background_one' : 'background_two');
                cellElement.type = 'text';
                cellElement.maxLength = 1;
                cellElement.value = cell !== 0 ? cell : '';
                rowElement.appendChild(cellElement);
            });
            grid.appendChild(rowElement);
        });
    }

    // Initialize puzzle
    let initialPuzzle = GenerateRandomSudoku();
    let puzzle = JSON.parse(JSON.stringify(initialPuzzle));
    let solvedPuzzle = [];

    // Function to solve the puzzle
    function SolvePuzzle() {
        solvedPuzzle = SolveSudoku(puzzle);
        CreateSudokuGrid(solvedPuzzle);
    }

    // Function to reset the puzzle
    function ResetPuzzle() {
        initialPuzzle = GenerateRandomSudoku();
        puzzle = JSON.parse(JSON.stringify(initialPuzzle));
        solvedPuzzle = [];
        CreateSudokuGrid(puzzle);
    }

    // Initial puzzle creation
    CreateSudokuGrid(puzzle);

    // Attach event listeners to buttons
    document.getElementById("solveButton").addEventListener("click", SolvePuzzle);
    document.getElementById("resetButton").addEventListener("click", ResetPuzzle);
});