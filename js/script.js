function initialize (squaresRow) {
    for (let i=0; i<squaresRow*squaresRow; i++) { //i must be less than the number of squares
        const gridContainer = document.querySelector('.grid-container');
        const oneSquare = document.createElement('div');
        const oneSquareWidth = (gridContainer.getBoundingClientRect().width / squaresRow);
        const oneSquareHeight = (gridContainer.getBoundingClientRect().height / squaresRow);
        oneSquare.style.width = oneSquareWidth +"px";
        oneSquare.style.height = oneSquareHeight +"px";
        oneSquare.style.border = '1px dotted orange';
        gridContainer.appendChild(oneSquare);
    };    
}

function clear() {
    const gridContainer = document.querySelector('.grid-container');
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    };
};



const SQUARESDEFAULT = 16
document.addEventListener('DOMContentLoaded', () => {
    initialize(SQUARESDEFAULT);
});

const squareButton = document.querySelector('.square-number-button');
squareButton.addEventListener('click', () => {
    let squaresRow;
    do {
    squaresRow  = prompt("Enter desired number of squares per row/column: ");
   } while (+squaresRow > 100 || Number.isNaN(+squaresRow) || squaresRow === "" || squaresRow.includes("."));
   clear(); 
   initialize(squaresRow);
});

const clearButton = document.querySelector('.clear-button')
