const container = document.querySelector(".container");
const button = document.querySelector(".grid-btn");
let isDrawing = false;

function createGrid(size) {
    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row-block");

        for (let j = 0; j < size; j++) {
            const colDiv = document.createElement("div");
            colDiv.classList.add("col-block");
            
            colDiv.addEventListener("mousedown", () => {
                isDrawing = true;
                colDiv.classList.add("highlight");
            })

            colDiv.addEventListener("mouseenter", () => {
                if (isDrawing) {
                    colDiv.classList.add("highlight");
                }
            })

            rowDiv.appendChild(colDiv);
        }

        container.appendChild(rowDiv);
    }
}

function isSizeValid (size) {
    if (size < 1 || size > 100) {
        window.alert("Please input a grid size between 1 and 100");
        return false;
    } else if (!Number.isInteger(size)) {
        window.alert("Please enter a whole number between 1 and 100");
        return false;
    }

    return true;
}

document.addEventListener("mouseup", () => {
    isDrawing = false;
})

createGrid(16);

button.addEventListener("click", () => {
    const gridSize = Number(prompt("Please input a number from 1 to 100 for the grid size"));

    if (isSizeValid(gridSize)) {
        createGrid(gridSize);
    }
})