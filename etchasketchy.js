const gridSize = 16;
const squareSize = 100;



function createGrid (gridSize) {  
    const gridContainer = document.querySelector(".gridContainer"); 
    for (let i = 0; i < gridSize; i++) {
        const squareX = document.createElement("div");
        gridContainer.appendChild(squareX);
        if (i === (gridSize-1)) {
            squareX.style.borderRight = "2px solid firebrick";
            console.log("yahoo");
        }
        for (let i = 0; i < gridSize; i++) {
            const squareY = document.createElement("div");
            squareX.appendChild(squareY);
        }
    }
}

createGrid(16);
