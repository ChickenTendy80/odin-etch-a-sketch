const gridContainer = document.querySelector(".grid-container");
const gridSize = 16; // Defines the number of squares per side

function createGrid(size) {
    // Clear existing grid if any
    gridContainer.textContent = "";

    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridContainer.appendChild(gridSquare);
    }
}

// Call the function to create the 16x16 grid on page load
createGrid(gridSize);

const hovering = document.querySelectorAll(".grid-square");
hovering.forEach(elt => {
    elt.addEventListener("mouseover", () => {
        //console.log("hovered");
        elt.classList.add("hovered");
    });
});