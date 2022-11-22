

const player = (name) => {   // this is a factory function used to create player objects
    const sayHello = () => console.log('hello');
    // const chooseSquare()   insert function that allows player to 
    return { name, sayHello };
};

const Gameboard = (function() {

    let gameboard = ["Ｘ", "Ｏ", "Ｘ", "Ｏ", "Ｘ", "Ｏ", "Ｘ", "Ｏ", "Ｘ"];  // array that stores users choices


    function chooseSquare() {

        Gameboard.gameboard[1] = "Ｘ";
        console.log(Gameboard.gameboard);
    }


    return { gameboard, chooseSquare };
})();


const DisplayController = (function() {  // displays gameboard array 

    let tl = document.getElementById("top-left");
    tl.textContent = Gameboard.gameboard[0];

    let tc = document.getElementById("top-center");
    tc.textContent = Gameboard.gameboard[1];

    let tr = document.getElementById("top-right");
    tr.textContent = Gameboard.gameboard[2];

    let ml = document.getElementById("middle-left");
    ml.textContent = Gameboard.gameboard[3];

    let mc = document.getElementById("middle-center");
    mc.textContent = Gameboard.gameboard[4];

    let mr = document.getElementById("middle-right");
    mr.textContent = Gameboard.gameboard[5];

    let bl = document.getElementById("bottom-left");
    bl.textContent = Gameboard.gameboard[6];

    let bc = document.getElementById("bottom-center");
    bc.textContent = Gameboard.gameboard[7];

    let br = document.getElementById("bottom-right");
    br.textContent = Gameboard.gameboard[8];

    return { tl, tc, tr, ml, mc, mr, bl, bc, br };

})();