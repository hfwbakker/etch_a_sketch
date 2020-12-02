const mamaDiv = document.querySelector(".mamaDiv");

// let mamaMsg = document.createElement("h3");
// mamaMsg.textContent = "HALLOOOO"
// mamaDiv.appendChild(mamaMsg)

const hotBody = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("mamaDiv");
hotBody.appendChild(container);

gridSize = 256

const gridGenerator = function(gridSize) { 
    console.log("executing gridGenerator()")
    container.innerHTML = ''
    for (let i = 1; i <= gridSize; i++){
        let testing = document.createElement("div");
        testing.classList.add("lilDiv")
        testing.textContent = `Div ${i}`;
        container.appendChild(testing);
    }
}

const chooseGridSize = function(a) {
    console.log("executing chooseGridSize()")
    a = prompt("how many rows and columns?");
    let gridSize = (a * a);
    console.log(gridSize);
    return gridGenerator(gridSize);
}

const click = document.querySelector("#dasButton");
click.addEventListener("click", () => {
    console.log("CLICK");
    chooseGridSize();
});

gridGenerator(gridSize)