// ? Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(event) {
  event.preventDefault();
  //   ? To do div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // ? Check mark button
  const compeletedButton = document.createElement("button");
  compeletedButton.innerHTML =
    '<ion-icon name="checkmark-done-outline"></ion-icon>';
  compeletedButton.classList.add("complete-btn");
  todoDiv.appendChild(compeletedButton);
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // ? Append to List
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(event) {
  event.preventDefault();
  const item = event.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
