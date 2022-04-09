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

function mOver (e) {
    this.classList.add("hovered");
}

function mOut (e) {
    this.classList.remove("hovered");
}

function clicker (e) {
    console.log(this.classList.value);
}

const container = document.querySelector(".container-div");
mkGrid(16,16);

const squares = document.querySelectorAll(".grid-square");
squares.forEach(
    function(currentValue, currentIndex, listObj) {
        squares.item(currentIndex).addEventListener("mouseenter", mOver);
    });
squares.forEach(
    function(currentValue, currentIndex, listObj) {
        squares.item(currentIndex).addEventListener("mouseleave", mOut);
    });
squares.forEach(
    function(currentValue, currentIndex, listObj) {
        squares.item(currentIndex).addEventListener("click", clicker);
    });

