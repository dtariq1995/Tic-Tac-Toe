// placeholder for special characters: Ｏ Ｘ

const player = (name, mark) => {   // this is a factory function used to create player objects
    const sayHello = () => console.log('hello');
    
    return { name, mark };
};
 
const Gameboard = (function() {

    let gameboard = ["", "", "", "", "", "", "", "", ""];  // array that stores users choices

    return { gameboard };
})();


const DisplayController = (function() {  // controls display

    function chooseSquare(square_id) {   // allows player to choose a square and stores choice in array

        let square = document.getElementById(square_id);
        square.textContent = "X";
        Gameboard.gameboard[square_id] = "X";
        console.log(Gameboard.gameboard);
    }

    return { chooseSquare };

})();