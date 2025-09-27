const { createElement } = require("react");

setTimeout(() => console.log("script is running"), 2000);

function addButton() {
    const inputValue = document.getElementById("text").value;
    const todo = document.createElement('div')
    todo.appendChild(document.createElement("h1")).textContent = inputValue
    container.appendChild(todo)
}
