function initialize (squaresRow) {
    for (let i=1; i<=squaresRow*squaresRow; i++) { 
        const gridContainer = document.querySelector('.grid-container');
        const oneSquare = document.createElement('div');
        const oneSquareWidth = (gridContainer.getBoundingClientRect().width / squaresRow);
        const oneSquareHeight = (gridContainer.getBoundingClientRect().height / squaresRow);
        oneSquare.style.width = oneSquareWidth +"px";
        oneSquare.style.height = oneSquareHeight +"px";
        oneSquare.style.border = '1px dotted orange';
        oneSquare.classList.add('div'+i);
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
clearButton.addEventListener('click', () => {
    clear();
    initialize(SQUARESDEFAULT);
});