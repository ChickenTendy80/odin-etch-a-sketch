const gridContainer = document.getElementById('grid-container');
    const gridSize = 16;

    function createGrid(size) {
        for (let i = 0; i < size * size; i++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridContainer.appendChild(gridSquare);
        }
    }

    createGrid(gridSize);