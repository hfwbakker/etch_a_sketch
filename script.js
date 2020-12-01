const mamaDiv = document.querySelector(".mamaDiv");

// let mamaMsg = document.createElement("h3");
// mamaMsg.textContent = "HALLOOOO"
// mamaDiv.appendChild(mamaMsg)

const hotBody = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("mamaDiv");
hotBody.appendChild(container);


for (let i = 1; i <= 256; i++){
    let testing = document.createElement("div");
    testing.classList.add("lilDiv")
    testing.textContent = `Div ${i}`;
    container.appendChild(testing);
}