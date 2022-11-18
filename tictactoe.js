

const player = (name) => {   // this is a factory function used to create player objects
    const sayHello = () => console.log('hello');
    // const chooseSquare()   insert function that allows player to 
    return { name, sayHello };
};

const Gameboard = (function() {

    let gameboard = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

})();


const DisplayController = (function() {


})();