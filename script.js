const mamaDiv = document.querySelector(".mamaDiv");

// let mamaMsg = document.createElement("h3");
// mamaMsg.textContent = "HALLOOOO"
// mamaDiv.appendChild(mamaMsg)

const hotBody = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("mamaDiv");
hotBody.appendChild(container);

const button = document.querySelector("#dasButton")

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

// gridSize = []

const chooseGridSize = function(a) {
    console.log("executing chooseGridSize()")
    a = prompt("how many rows and columns?");
    gridSize = (a * a);
    if (gridSize > 10000) {
        alert("too large buh")
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

gridGenerator(256)