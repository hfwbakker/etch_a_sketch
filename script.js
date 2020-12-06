///////////////////////////////////////
//////  DOM ELEMENTS + CREATION  //////
///////////////////////////////////////
const mamaDiv = document.querySelector(".mamaDiv");
const hotBody = document.querySelector("body");
const button = document.querySelector("#dasButton")

const container = document.createElement("div");
container.classList.add("mamaDiv");
hotBody.appendChild(container);


//////////////////////////////////////
//////  COLOR GENERATING LOGIC  //////
//////////////////////////////////////
let colors = ['#ff0000', '#00ff00', '#0000ff', "#f0f0f0", "#ffffff", "000000"];

const color_generator = function() {
    var random_color = colors[Math.floor(Math.random() * colors.length)];
      return random_color
  }

hotBody.style.backgroundColor = color_generator();

const lil_div_painter = function() {
    console.log("executing lil_div_painter")
    let lil_div = document.querySelectorAll(".lilDiv");
    for (let i = 0; i < lil_div.length; i++) {
        lil_div[i].style.backgroundColor = "pink"
      }
}

////////////////////////////////////////////////
//////  GRID GENERATOR + GRID SIZE LOGIC  //////
////////////////////////////////////////////////
const gridGenerator = function(gridSize) { 
    console.log("executing gridGenerator()")
    container.innerHTML = ''
    for (let i = 1; i <= gridSize; i++){
        let testing = document.createElement("div");
        testing.classList.add("lilDiv")
        container.style.backgroundColor = "red";
        container.style.gridTemplateColumns = `repeat(${Math.sqrt(gridSize)}, ${100/Math.sqrt(gridSize)}%)`
        container.style.gridTemplateRows = `repeat(${Math.sqrt(gridSize)}, ${100/Math.sqrt(gridSize)}%)`
        container.appendChild(testing);
    }
}

const chooseGridSize = function(a) {
    console.log("executing chooseGridSize()")
    a = prompt("how many rows and columns?");
    gridSize = (a * a);
    if (gridSize > 10000) {
        alert("too large bruh")
        chooseGridSize()
    }
    console.log(gridSize);
    dasButton.textContent = `Current size is ${a} x ${a}. Click to resize.`
    return gridGenerator(gridSize);
}

const click = document.querySelector("#dasButton");
click.addEventListener("click", () => {
    console.log("CLICK");
    chooseGridSize();
});

//////////////////////////////////
//////  HOVER OVER EFFECTS  //////
//////////////////////////////////









gridGenerator(256)
lil_div_painter()
