const addButton = document.querySelector("#add-item");
const todo = document.querySelector("#todo");
const completed = document.querySelector("#completed");
const itemText = document.querySelector("#add-item-text");
const clearTodo = document.querySelector("#clear-todo");

let items = [];

const addItem = () => {
  items.push({
    taskname: itemText.value,
    completed: false,
  });
  printItem();
  attachEvent();
  localStorage.setItem("todoList", JSON.stringify(items));
};

const printItem = () => {
  todo.insertAdjacentHTML(
    "beforeend",
    `<li>
        <input type="checkbox" class="check-item">
        <span class="span">
            ${itemText.value} 
            </span>
            <button class="delete-item">Delete</button>
      </li>`
  );
  itemText.value = "";
};

const clearTodoLists = () => {
  todo.innerHTML = "";
  completed.innerHTML = "";
};

const checked = () => {
  let checkBox = document
    .querySelector("#todo")
    .lastChild.querySelector(".check-item");
};

const completeItem = (event) => {
  //const obj = JSON.parse(localStorage.getItem("todoList"));
  //console.log(obj);
  const itemName = event.target.parentElement.querySelector("span").textContent;

  completed.insertAdjacentHTML(
    "beforeend",
    `<li>
          <span id="completed-item">
              ${itemName} 
          </span>
          <button class="delete-item">Delete</button>
        </li>`
  );
  attachCompletedEvent();
  deleteItemList(event);
};

const deleteItemList = (event) => {
  event.target.parentElement.remove();
};

const attachEvent = () => {
  let deleteItem = document
    .querySelector("#todo")
    .lastChild.querySelector(".delete-item");
  deleteItem.addEventListener("click", deleteItemList);

  let checkBox = document
    .querySelector("#todo")
    .lastChild.querySelector(".check-item");
  checkBox.addEventListener("click", completeItem);
};

const attachCompletedEvent = () => {
  let deleteItem = document
    .querySelector("#completed")
    .lastChild.querySelector(".delete-item");
  deleteItem.addEventListener("click", deleteItemList);
};

addButton.addEventListener("click", addItem);
clearTodo.addEventListener("click", clearTodoLists);
