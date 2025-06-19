const gridContainer = document.querySelector(".grid-container");
const defaultGridSize = 16; // Defines the number of squares per side

function createGrid(size) {
    // Clear existing grid if any
    gridContainer.textContent = "";

    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.style.width = 512/size +"px";
        gridSquare.style.height = 512/size +"px";
        gridContainer.appendChild(gridSquare);
    }
}

function checkHover(){
    const hovering = document.querySelectorAll(".grid-square");
    hovering.forEach(elt => {
        elt.addEventListener("mouseover", () => {
            //console.log("hovered");
            elt.classList.add("hovered");
        });
    });
}

// Call the function to create the 16x16 grid on page load
createGrid(defaultGridSize);
checkHover();

const button = document.querySelector("button");

button.addEventListener("click",() => {
    const size = prompt("How many squares on each side?");
    const gridSizeTemp = parseInt(size);
    createGrid(gridSizeTemp);
    checkHover();
})