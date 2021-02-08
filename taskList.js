const todoInput = document.querySelector('.todo-txt');
const todoButton = document.querySelector('.todo-add');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodu);
todoList.addEventListener('click', deleteChecked);
function addTodu(e) {
    // creating li 
    if (todoInput.value == false) {
        alert("Please enter valid details");
    }
    else {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todos';
        const todos = document.createElement('li');
        todos.className = 'todo-item';
        todos.appendChild(document.createTextNode(todoInput.value));
        todoDiv.appendChild(todos);
        todoInput.value = "";
        // creating complete button
        // creating trash button
        const trashBtn = document.createElement('button');
        trashBtn.className = "trash-btn";
        trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
        todoDiv.appendChild(trashBtn);
        todoList.appendChild(todoDiv);

        const completeBtn = document.createElement('button');
        completeBtn.className = "checked-btn";
        completeBtn.innerHTML = '<i class="fas fa-check"></i>';
        todoDiv.appendChild(completeBtn);


        // console.log(todoList);
    }

    e.preventDefault();
}
function deleteChecked(e) {
    const targetBtn = e.target;
    // delete functionality
    if (targetBtn.className === 'trash-btn') {
        const trashParent = targetBtn.parentElement;
        trashParent.classList.add('fall');
        trashParent.addEventListener("transitionend", function () {
            trashParent.remove();
        });
        // trashParent.remove();
        // console.log(trashParent);
    }
    // checked functionaliy
    if (targetBtn.className === 'checked-btn') {
        const checkedParent = targetBtn.parentElement;
        checkedParent.classList.toggle('completed');
        // console.log(checkedParent);
    }
    e.preventDefault();
}