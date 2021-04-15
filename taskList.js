const todoInput = document.querySelector('.todo-txt');
const todoButton = document.querySelector('.todo-add');
const todoList = document.querySelector('.todo-list');
const filterTodo = document.querySelector(".filter-todo");

todoButton.addEventListener('click', addTodu);
todoList.addEventListener('click', deleteChecked);
filterTodo.addEventListener('click',filterList);

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
        // removeLocalTodos(todo);
        trashParent.addEventListener("transitionend", e => {
            trashParent.remove();
        });
        // trashParent.remove();
        // console.log(trashParent);
    }
    // checked functionality
    if (targetBtn.className === 'checked-btn') {
        const checkedParent = targetBtn.parentElement;
        checkedParent.classList.toggle('completed');
        // console.log(checkedParent);
    }
    e.preventDefault();
}
function filterList(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        // console.log(todo.classList.contains("completed"));
        // console.log(e.target.value)
        switch(e.target.value){
            case "All":
                todo.style.display = "flex";
                break;
            case "Completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display="none";
                }
                break;
            case "Incomplete":
                if(!todo.classList.contains("completed")){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display="none";
                }
        }
    })
}