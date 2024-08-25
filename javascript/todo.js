const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
let todos = [];

function saveToDo() {
    localStorage.setItem("todos",JSON.stringify(todos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(a => a.id !== parseInt(li.id));
    saveToDo();
}

function paintToDo(event) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = event.id;
    span.innerText = event.text;
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";
    const newToDoObj = 
        {
            text: newToDo,
            id: Date.now(),
        }
    todos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

todoForm.addEventListener("submit",handleToDoSubmit);

const savedToDo = localStorage.getItem("todos");

if (savedToDo !== null) {
    const parsedToDo = JSON.parse(savedToDo);
    todos = parsedToDo;
    parsedToDo.forEach(paintToDo);
}