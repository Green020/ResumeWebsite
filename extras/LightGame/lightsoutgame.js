document.addEventListener("DOMContentLoaded", function () {
    var probabilityOfOn = 30, cellState;
    var gameSize = 5;

    // gather necessary DOM elements
    var cellArray = [];
    cellArray = document.getElementsByClassName("lightBox");
    var moveCount = 0;

    var easyMode = false;

    // initialize array for neighbors and fill it
    var cellNeighborArray = [];

    AddGameControls();
    GameStart();

    function AddGameControls(){
        for (var i = 0, j = cellArray.length; i < j; i++) {
            if (i === 0) {
                cellNeighborArray[i] = [cellArray[i], cellArray[i + 1], cellArray[i + gameSize]];
                // check for bottomright corner
            }
    
            else if (i === gameSize * gameSize - 1) {
                cellNeighborArray[i] = [cellArray[i], cellArray[i - 1], cellArray[i - gameSize]];
                // check for bottomleft corner
            }
    
            else if (i === gameSize * gameSize - gameSize) {
                cellNeighborArray[i] = [cellArray[i], cellArray[i + 1], cellArray[i - gameSize]];
                // check for topright corner
            }
    
            else if (i === gameSize - 1) {
                cellNeighborArray[i] = [cellArray[i], cellArray[i - 1], cellArray[i + gameSize]];
                // check for left side border
            }
    
            else if (i % gameSize === 0) {
                cellNeighborArray[i] = [cellArray[i], cellArray[i + 1], cellArray[i - gameSize], cellArray[i + gameSize]];
                // check for right side border
            }
    
            else if (i % gameSize === gameSize - 1) {
                cellNeighborArray[i] = [cellArray[i], cellArray[i - 1], cellArray[i - gameSize], cellArray[i + gameSize]];
                // check for top border
            }
    
            else if (i < gameSize) {
                cellNeighborArray[i] = [cellArray[i], cellArray[i - 1], cellArray[i + 1], cellArray[i + gameSize]];
                // check for bottom border
            }
    
            else if (i >= gameSize * gameSize - gameSize) {
                cellNeighborArray[i] = [cellArray[i], cellArray[i - 1], cellArray[i + 1], cellArray[i - gameSize]];
                // rest of cells
            }
    
            else {
                cellNeighborArray[i] = [cellArray[i], cellArray[i - 1], cellArray[i + 1], cellArray[i - gameSize], cellArray[i + gameSize]];
            };
        }
    }

    function GameStart() {
        //Randomize Board and Add Event Listeners
		for(var a = 0, b = cellArray.length; a < b; a++) {

			cellState = Math.floor(Math.random() * 100);

			if(cellState < probabilityOfOn) {
				cellArray[a].classList.toggle("lightActive");
			}

			cellArray[a].removeEventListener("click", Light);
			cellArray[a].addEventListener("click", Light);
		}
    }

    function Light() {
		this.classList.toggle("lightActive");
        moveCount++;


        //Check Cells Around Clicked Cell and Toggle Active Lights

        if (easyMode == false) {
            for (var x = 0, y = cellNeighborArray.length; x < y; x++) {

                if (this === cellNeighborArray[x][0]) {

                    for (var z = 1; z < cellNeighborArray[x].length; z++) {
                        cellNeighborArray[x][z].classList.toggle("lightActive");
                    }
                }
            }
        }
        
		if(CheckForWinner()) {
            SetWinningText();
		}
	}

    function CheckForWinner() {
        
        if(document.getElementsByClassName("lightActive")[0]) {
            console.log(false);
			return false;
		};
        console.log(true);
		return true;
	}

    //EXTRAS

    const messageBox = document.getElementById('messageBOX');
    messageBox.innerHTML = "<h4 style='color: black; font-weight: bold;'>Turn OFF all the lights to win!</h4>";

    function SetEasyMode(){
        if(document.getElementById('easyModeSwitch').checked){ easyMode = true; }
        else{ easyMode = false; }
    }

    function SetWinningText() {
        /* Remove And Add Winning Message */
        const messageBox = document.getElementById('messageBOX');
        messageBox.innerHTML = "<h4 style='color: green; font-weight: bold;'>You win! Press Restart To Try Again!</h4>";
        messageBox.innerHTML += "<h6 id='moves'>clicks</h6>";
        document.getElementById('moves').innerHTML = "Number of Clicks Taken To Win: " + moveCount;
        messageBox.style.fontSize = "1em"

        moveCount = 0;
    }

    // Function to reset the puzzle
    function ResetPuzzle() {
        GameStart()
    }

    // Attach event listeners to buttons
    document.getElementById("resetButton").addEventListener("click", ResetPuzzle);
    document.getElementById("easyModeSwitch").addEventListener("click", SetEasyMode);
});