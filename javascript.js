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

function mOver () {
    console.log('test');
    this.classList.add('hovered');
}

function mOut () {
    console.log('test');
    this.classList.remove('hovered');
}

const container = document.querySelector(".container-div");
mkGrid(16,16);

const squares = document.querySelectorAll(".grid-square");
squares.forEach(
    function(currentValue, currentIndex, listObj) {
        squares.item(currentIndex).addEventListener("onmouseover", mOver);
    });
squares.forEach(
    function(currentValue, currentIndex, listObj) {
        squares.item(currentIndex).addEventListener("onmouseout", mOut);
    });

