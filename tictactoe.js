// placeholder for special characters: Ｏ Ｘ

const Gameboard = (function() {

    const playerFactory = (name, mark, turn) => {   // this is a factory function used to create player objects
        
        return { name, mark, turn };
    };

    const playerOne = playerFactory('Player 1', 'Ｘ', true);
    const playerTwo = playerFactory('Player 2', 'Ｏ', false);

    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    let gameboard = ['', '', '', '', '', '', '', '', ''];  // array that stores users choices



    return { gameboard, playerOne, playerTwo, winningCombos };
})();


const DisplayController = (function() {  // controls display

    let turn = 1;   // used to tell which users turn it is

    function chooseSquare(square_id) {   // allows player to choose a square and stores choice in array

        let square = document.getElementById(square_id);

        if (square.textContent == "") {   // player can only choose space that hasn't yet been chosen

            if (turn % 2 == 0) {   // player 2's turn
                square.textContent = 'Ｏ';
                Gameboard.gameboard[square_id] = 'Ｏ';
                console.log(Gameboard.gameboard);
                return turn += 1;
            }
    
            else {
                square.textContent = 'Ｘ';   // player 1's turn
                Gameboard.gameboard[square_id] = 'Ｘ';
                console.log(Gameboard.gameboard);
                return turn += 1;
            }
        }
    }

    return { chooseSquare };

})();