const addButton = document.querySelector("#add-item");
const todo = document.querySelector("#todo");
const completed = document.querySelector("#completed");
const itemText = document.querySelector("#add-item-text");
const clearTodo = document.querySelector("#clear-todo");

const checkItem = document.querySelectorAll(".check-item");

let items = JSON.parse(localStorage.getItem("todoList"));

const addItem = () => {
  items.push({
    taskName: itemText.value,
    completed: false,
  });

  printItem(itemText.value);
  attachEvent("#todo");

  localStorage.setItem("todoList", JSON.stringify(items));
};

const printItem = (itemValue) => {
  todo.insertAdjacentHTML(
    "beforeend",
    `<li>
      <input type="checkbox" class="check-item">
        <span>${itemValue}</span>
        <button class="delete-item">Delete</button>
      </li>`
  );

  itemText.value = "";
};

const clearTodoLists = () => {
  todo.innerHTML = "";
};

const deleteItemList = (event) => {
  console.log("delete clicked");
  //find the text deleted--- filterout----setItem

  const itemName = event.target.parentElement.querySelector("span").textContent;
  localStorage = items.filter((item) => {
    item.taskName === itemName;
  });
  event.target.parentElement.remove();
};

const completeItem = (event) => {
  console.log("checkbox clicked");
  const itemName = event.target.parentElement.querySelector("span").textContent;
  //find the text deleted--- filterout----setItem
  completed.insertAdjacentHTML(
    "beforeend",
    `<li>
      <input type="checkbox" class="check-item">
      <span>${itemName}</span>
      <button class="delete-item">Delete</button>
    </li>`
  );
  deleteItemList(event);
  attachEvent("#completed");
};

const attachEvent = (container) => {
  let checkbox = document
    .querySelector(container)
    .lastChild.querySelector(".check-item");
  let deleteBtn = document
    .querySelector(container)
    .lastChild.querySelector(".delete-item");
  checkbox.addEventListener("click", completeItem);
  deleteBtn.addEventListener("click", deleteItemList);
};

addButton.addEventListener("click", addItem);
clearTodo.addEventListener("click", clearTodoLists);
completed.addEventListener("change", completeItem);

const init = () => {
  let todoItems = localStorage.getItem("todoList");
  todoItems = JSON.parse(todoItems);
  todoItems.map((item) => {
    printItem(item.taskName);
    attachEvent("#todo");
  });
};

init();
