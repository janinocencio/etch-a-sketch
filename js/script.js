for (let i=0; i<256; i++) { //i must be less than the number of squares
    const gridContainer = document.querySelector('.grid-container');
    const oneSquare = document.createElement('div');
    const oneSquareWidth = (gridContainer.getBoundingClientRect().width / 16);
    const oneSquareHeight = (gridContainer.getBoundingClientRect().height / 16);
    oneSquare.style.width = oneSquareWidth +"px";
    oneSquare.style.height = oneSquareHeight +"px";
    oneSquare.style.border = 'orange dotted 1px';
    gridContainer.appendChild(oneSquare);
};

