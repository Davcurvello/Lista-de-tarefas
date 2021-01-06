const includeButton = document.querySelector('#include-button');
includeButton.addEventListener('click', createNewTask);
function createNewTask() {
    const newTask = getTaskValue();
    const listElement = createListElement(newTask);
    includeElementInList(listElement);
}
function getTaskValue() {
    const taskInput = document.querySelector('#task-input');
    return taskInput.value;
}
function createListElement(newTask) {
    const listItem = document.createElement('li');
    listItem.innerText = newTask;
    return listItem;
}
function includeElementInList(listElement) {
const todoList = document.querySelector('#todo-list');
todoList.appendChild(listElement);
}

