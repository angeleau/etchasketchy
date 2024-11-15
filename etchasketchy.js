const gridSize = 16;
const squareSize = 100;



function createGrid (gridSize) {  
    const gridContainer = document.querySelector(".gridContainer"); 
    for (let i = 0; i < gridSize; i++) {
        const squareX = document.createElement("div");
        squareX.setAttribute("class", "etchSquare");
        gridContainer.appendChild(squareX);
        
        if (i === (gridSize-1)) {
            squareX.style.borderRight = "2px solid firebrick";
            
        }
        for (let i = 0; i < gridSize; i++) {
            const squareY = document.createElement("div");
            squareY.setAttribute("class", "etchSquare");
            squareX.appendChild(squareY);
        }
    }
}

function colorChange() {
    const etchSquares = document.querySelectorAll(".etchSquare");
    etchSquares.forEach ((etchSquare) => {
        etchSquare.style.backgroundColor = "tomato";
        console.log("yahoo");
    });
}

createGrid(16);
colorChange();
