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
    console.log(e);
    this.classList.add('hovered');
}

function mOut (e) {
    console.log(e);
    if (e.propertyName !== 'transform') return;
    this.classList.remove('hovered');
}

const container = document.querySelector(".container-div");
mkGrid(16,16);

const squares = document.querySelectorAll(".grid-square");
console.log(squares);
squares.forEach(
    function(currentValue, currentIndex, listObj) {
        console.log(squares[currentValue]);
        squares.item(currentIndex).addEventListener('onmouseover', mOver);
    });
squares.forEach(
    function(currentValue, currentIndex, listObj) {
        squares.item(currentIndex).addEventListener('onmouseout', mOut);
    });