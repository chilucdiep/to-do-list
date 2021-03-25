//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
toDoButton.addEventListener('click', addToDo)
toDoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterToDo)

//Function

function addToDo(e) {
    //Prevent form from submitting
    e.preventDefault();
    //Todo div
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('todo');
    //Create li
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add('todo-item');
    toDoDiv.appendChild(newToDo);
    //Create completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-button');
    toDoDiv.appendChild(completedButton);
    //Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-button');
    toDoDiv.appendChild(deleteButton);
    //Append to-do list
    toDoList.appendChild(toDoDiv);
    toDoInput.value = "";
}

function deleteCheck(e) {
        const item = e.target
        //Delete to do
    if (item.classList[0] === 'delete-button') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }
    if (item.classList[0] === 'completed-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterToDo(e) {
    const todos = toDoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}