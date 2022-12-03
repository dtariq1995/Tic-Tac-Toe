// placeholder for special characters: Ｏ Ｘ

const Gameboard = (function() {

    const playerFactory = (name, mark, turn) => {   // this is a factory function used to create player objects
        
        return { name, mark, turn };
    };

    const playerOne = playerFactory('Player 1', 'Ｘ', true);
    const playerTwo = playerFactory('Player 2', 'Ｏ', false);

    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    let turn = 1;   // used to tell which users turn it is

    let gameboard = ["", "", "", "", "", "", "", "", ""];  // array that stores users choices


    function chooseSquare(square_id) {   // allows player to choose a square and stores choice in array

        let square = document.getElementById(square_id);

        if (square.textContent == "") {   // player can only choose space that hasn't yet been chosen

            if (turn % 2 == 0) {   // player 2's turn
                square.textContent = playerTwo.mark;
                gameboard[square_id] = playerTwo.mark;
            }

            else {
                square.textContent = playerOne.mark;  // player 1's turn
                gameboard[square_id] = playerOne.mark;
            }

            console.log(gameboard);
            checkWin();
        }
    }

    function checkWin() {

        turn++;

        for (let i = 0; i < winningCombos.length; i++) {

            let winningArray = winningCombos[i].map(x => gameboard[x]);

            if (winningArray.every(x=> x != "")) {

                if (winningArray.every(x => x == playerOne.mark)) {
                    return console.log("Player One Wins!");
                }
                else if (winningArray.every(x => x == playerTwo.mark)) {
                    return console.log("Player Two Wins!");
                }
                else if (gameboard.indexOf("") == -1) {
                    return DisplayController.displayWinner("Tie");
                }
            }



        }
    }

    return { gameboard, playerOne, playerTwo, winningCombos, chooseSquare, checkWin };
})();


const DisplayController = (function() {  // controls display

    function displayWinner(winner) {

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