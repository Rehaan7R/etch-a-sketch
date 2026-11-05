const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row-block");

    for (let j = 0; j < 16; j++) {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-block");
        rowDiv.appendChild(colDiv);
    }

    container.appendChild(rowDiv);
}