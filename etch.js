const container = document.querySelector(".container");
const numberOfSquares = document.querySelector(".square-num");
let size = numberOfSquares.value;
const color = document.querySelector(".color");
const clear = document.querySelector(".clear");
const rainbow = document.querySelector(".rainbow");



//logic for adding square divs to container//
function populateContainer(size) {
    container.style.setProperty('--size',size);

    for(let i=0; i<size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("pixels");
        //logic for painting selected color//
        div.addEventListener("mouseover", (e) => 
            e.target.style.backgroundColor = color.value);
        container.appendChild(div);
    };
};

populateContainer(size);

//logic for painting selected color//
/*container.addEventListener("mouseover", (e) => e.target.style.backgroundColor = color.value);*/

//logic for clearing color//
function reset() {
    container.innerHTML = "";
    populateContainer(size);
};

clear.addEventListener("click", reset);

//logic for changing number of square divs without page refresh//
numberOfSquares.addEventListener("keyup", () => {size = numberOfSquares.value;
    reset()});

//logic for random color//
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
};

function randomColor() {
    return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
};

rainbow.addEventListener("click",function(){
    container.addEventListener("mouseover",(e) => 
        e.target.style.backgroundColor = randomColor());
});
