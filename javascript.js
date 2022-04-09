function mkGrid (row,col) {
    for (let i = 0; i < row; i++) {
        const r = document.createElement('div');
        container.appendChild(r);
        for (let j = 0; j < col; j++) {
            const sq = document.createElement('div');
            sq.classList.add('grid-square');
            r.appendChild(sq);
        }
    }
}

function wipeGrid (parentNode) {
    let firstChild = parentNode[0];
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

function runGame () {
    if (games>0) {
        const container = document.querySelector(".container-div");
        wipeGrid(container);
    }
    const grid = prompt('How large would you like your grid?');
    mkGrid(grid,grid);
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(
        function(currentValue, currentIndex, listObj) {
            squares.item(currentIndex).addEventListener("mouseenter", mOver);
        });
    /*squares.forEach(
        function(currentValue, currentIndex, listObj) {
            squares.item(currentIndex).addEventListener("mouseleave", mOut);
        });*/
    squares.forEach(
        function(currentValue, currentIndex, listObj) {
            squares.item(currentIndex).addEventListener("click", clicker);
        });
    games++;
}

function mOver (e) {
    this.classList.add("hovered");
}

/*function mOut (e) {
    this.classList.remove("hovered");
}*/

function clicker (e) {
    console.log(this.classList.value);
}

let games = 0;
const container = document.querySelector(".container-div");
const body = document.querySelector("body");
const button = document.createElement("button");
button.innerHTML = 'Click here to start the game!';
const buttonContainer = document.createElement("div");
buttonContainer.classList.add('button-container');
buttonContainer.appendChild(button);
body.insertBefore(buttonContainer, container);
button.addEventListener("click", runGame);



