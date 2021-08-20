// This class "NewTodo" takes a single argument, "task". It has a static method called "createTodo". I did it static so we don't have to instantiate a new prototype to access the method.

class NewTodo {
    constructor(task) {
        this.task = task;
    }

    static createTodo (task) {
        // Here all the HTML elements are created (div, h3, button...) and appended to todosContainer.
        let todoText = document.createElement('p');
        todoText.innerHTML = task;
        let todoDiv = document.createElement('div');
        todoDiv.className = 'todoDiv'
        let deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton'
        deleteButton.innerHTML = 'Delete';

        todoDiv.append(todoText, deleteButton);
        todosContainer.appendChild(todoDiv)

        // Here I hooked the delete Button to an Event Listener to remove the nodes.
        deleteButton.addEventListener('click', function () {
            todosContainer.removeChild(todoDiv);
        })
        // With this static method we'll clear the whole list.
        const clearList = document.querySelector('.clear-list')
        clearList.addEventListener('click', function () {
            todosContainer.innerHTML = ''
        })
    }
}

const todosContainer = document.querySelector('.todos-container')
const addButton = document.querySelector('.add-button')
let todoInput = document.querySelector('.todo-input')

addButton.addEventListener('click', () => {
    let inputValue = todoInput.value

    if (todoInput.value !== '') {
        NewTodo.createTodo(inputValue)
        todoInput.value = '';
    }

        else {
            swal({
                title: "Error",
                text: "Please add a task",
                icon: "error",
              });
              
        }
})