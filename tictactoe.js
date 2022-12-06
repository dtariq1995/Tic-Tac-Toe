// placeholder for special characters: Ｏ Ｘ

const Gameboard = (function() {

    const playerFactory = (name, mark) => {   // this is a factory function used to create player objects
        
        return { name, mark };
    };

    const playerOne = playerFactory('Player 1', 'Ｘ');
    const playerTwo = playerFactory('Player 2', 'Ｏ');

    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];   // winning combos corresponding positions in array

    let turn = 1;   // used to tell which users turn it is

    let gameboard = ["", "", "", "", "", "", "", "", ""];  // array that stores users choices

    let winner = false;   // when winner is true, the game stops


    function chooseSquare(square_id) {   // allows player to choose a square and stores choice in array

        let square = document.getElementById(square_id);

        if (winner == true) {   // disable ability to choose squares if someone already won
            return;
        }

        if (square.textContent == "") {   // player can only choose space that hasn't yet been chosen

            if (turn % 2 == 0) {   // player 2's turn
                square.textContent = playerTwo.mark;
                gameboard[square_id] = playerTwo.mark;
            }

            else {
                square.textContent = playerOne.mark;  // player 1's turn
                gameboard[square_id] = playerOne.mark;
            }

            checkWin();   // check for a winner after every turn
        }
    }


    function getName() {   // get players entered names or use default if no names entered


        let playerOneName = document.getElementById("p1name");
        let playerTwoName = document.getElementById("p2name");

        playerOne.name = playerOneName.value;
        playerTwo.name = playerTwoName.value;

        if (playerOne.name == "") {
            playerOne.name = "Player 1";
        }
        if (playerTwo.name == "") {
            playerTwo.name = "Player 2";
        }
    }


    function checkWin() {   // checks if there's a win or a tie

        turn++;   // next player's turn

        for (let i = 0; i < winningCombos.length; i++) {   // check array for all possible winning combinations

            let winningArray = winningCombos[i].map(x => gameboard[x]);

            if (winningArray.every(x=> x != "")) {   // if not all empty spaces

                if (winningArray.every(x => x == playerOne.mark)) {   // if 3 x's in a row, X wins
                    DisplayController.displayWinner(playerOne);
                    return winner = true;
                }
                else if (winningArray.every(x => x == playerTwo.mark)) {   // if 3 o's in a row, O wins
                    console.log(winningCombos[i]);
                    DisplayController.displayWinner(playerTwo);
                    return winner = true;
                }
                else if (gameboard.indexOf("") == -1) {   // no spaces left and no winner is a tie
                    return DisplayController.displayWinner("Tie");
                }
            }
        }
    }


    function resetBoard() {  // resets the board and starts game over

        gameboard = ["", "", "", "", "", "", "", "", ""]; 
        turn = 1;
        winner = false;

        let squares = document.querySelectorAll('.grid-square');   // remove users choices from grid
        squares.forEach(square => {
            square.textContent = "";
        });

        let winnerArea = document.getElementById("winner-area");   // reset display text
        winnerArea.textContent = "";
        
    }

    return { gameboard, playerOne, playerTwo, winningCombos, chooseSquare, checkWin, resetBoard, getName };
})();





const DisplayController = (function() {  // controls display

    function displayWinner(winner) {   // displays winner or if it's a tie

        let winnerArea = document.getElementById("winner-area");

        if (winner == "Tie") {
            winnerArea.textContent = "It's a tie!";
        }

        else {
            winnerArea.textContent = winner.name + " is the winner!";
        }
    }
    return { displayWinner };

})();