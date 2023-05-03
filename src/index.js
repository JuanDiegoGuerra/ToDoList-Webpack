import "./style.css";
import moreIcon from './more.svg';
import reload from './reload.svg';
import enter from './enter.svg';

const ToDoListContainer = document.getElementById("list-container");
const reloadIcon = document.getElementById("reload-img");
const enterIcon = document.getElementById("enter-icon");
enterIcon.src = enter;
reloadIcon.src = reload;
const todoList = [
  {
    id: 1,
    description: "Finish project structure",
    completed: false,
  },
  {
    id: 2,
    description: "Add styles to the project",
    completed: false,
  },
  {
    id: 3,
    description: "Make changes on Awesome Books Project",
    completed: true,
  },
  {
    id: 4,
    description: "Prepare Dinner 😋",
    completed: false,
  },
];

const renderList = (list) => {
  let innerList = "";
  if (list.length === 0) {
    innerList = '<h3 class="list-placeholder">Add your first task!</h3>';
  } else {
    const sortedList = list.sort((a, b) => {
        return a.id - b.id
    })
    sortedList.forEach((task) => {
      innerList += `
          <li class="to-do-tasks">
            <div class="check-box ${task.completed ? 'completed' : ''}">${task.completed ? '✓' : ''}</div>
            <p class="task-description ${task.completed ? 'line-through' : ''}">${task.description}</p>
            <img class="more-logo" src="${moreIcon}"/>
          </li>
          `;
    });
  }
  ToDoListContainer.innerHTML = innerList;
};

window.onload = renderList(todoList);