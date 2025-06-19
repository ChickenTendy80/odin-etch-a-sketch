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

function checkHover(classItem){
    const hovering = document.querySelectorAll(".grid-square");
    hovering.forEach(elt => {
        elt.addEventListener("mouseover", () => {
            //console.log("hovered");
            elt.className = "grid-square";
            elt.classList.add(classItem);
        });
    });
}

function checkColor(){
    const colorButton = document.querySelectorAll("button.color");

    colorButton.forEach(elt => {
        elt.addEventListener("click", () => {
            //console.log(elt.value);
            checkHover(elt.value);
        });
    });
}

// Call the function to create the 16x16 grid on page load
createGrid(defaultGridSize);
checkHover("hovered");
checkColor();

const button = document.querySelector("button");

button.addEventListener("click",() => {
    const size = prompt("How many squares on each side?");
    const gridSizeTemp = parseInt(size);
    createGrid(gridSizeTemp);
    checkHover("hovered");
    checkColor();
})
