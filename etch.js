const container = document.querySelector(".container");
const numberOfSquares = document.querySelector(".square-num");
//let numOfPixels = numberOfSquares.value;


function populateContainer(size) {
    container.style.setProperty('--size',size);
    for(let i=0; i<size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("pixels");
        container.appendChild(div);
    };
};

populateContainer(numberOfSquares.value);
