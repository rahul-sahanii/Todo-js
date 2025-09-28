setTimeout(() => console.log("script is running"), 2000);


function addButton() {
    const inputValue = document.getElementById("text").value.trim();
    if (inputValue != "") {
        genTodo(inputValue);
    }
    // const todo = document.createElement('div')
    // todo.appendChild(document.createElement("h1")).textContent = inputValue
    // container.appendChild(todo)
}

function genTodo(inputValue) {
    const newElem = document.createElement('div')
    newElem.className = "todo"
    const content = document.createElement('h3')
    content.textContent = inputValue;
    const delButton = document.createElement('button')
    delButton.textContent = "Remove todo"
    delButton.addEventListener("click", () => {
        newElem.remove();
    })
    newElem.appendChild(content)
    newElem.appendChild(delButton)
    container.prepend(newElem)
    document.getElementById("text").value = "";
}
//reset the todo 
function reset() {
    const todo = document.querySelectorAll(".todo")
    todo.forEach(todo => {
        todo.remove();
    });
    document.getElementById("text").value = "";
}
function enter() {
    document.getElementById('text').addEventListener('keydown', (event) => {
        if (event.key == "Enter") {
            document.getElementById("addButton").click();
        }
    })
}
enter();
function focus() {
    document.addEventListener('keydown', (event) => {
        document.getElementById("text").focus();

    })
}
focus();