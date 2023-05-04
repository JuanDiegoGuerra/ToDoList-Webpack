import reload from '../docs/reload.svg';
import enter from '../docs/enter.svg';

import {
  getmylist, addmylist, editmylist, deletemylist,
} from '../docs/functionality.js';
import { changeTodoStatus, removeCompletedTodos } from '../docs/TaskStatus.js';

const reloadIcon = document.getElementById('reload-img');
const enterIcon = document.getElementById('enter-icon');
enterIcon.src = enter;
reloadIcon.src = reload;

const listGroup = document.querySelector('.list-container');
const newTask = document.querySelector('.add-form').querySelector('input');
const submitIcon = document.querySelector('.add-form').querySelector('.enter-icon');
newTask.addEventListener('keypress', (event) => addmylist(event));
submitIcon.addEventListener('click', () => addmylist('clicked'));

listGroup.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem === 'delete-icon') deletemylist(li.id);
  if (clickedItem === 'checked-icon') changeTodoStatus({ index: li.id, status: false });
  if (clickedItem === 'unchecked-icon') changeTodoStatus({ index: li.id, status: true });
});

listGroup.addEventListener('keypress', (event) => {
  const pressedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (pressedItem === 'edit-todo') editmylist({ index: li.id, event });
});

const clearCompleted = document.querySelector('.clear-btn');
clearCompleted.addEventListener('click', removeCompletedTodos);

window.addEventListener('load', () => { getmylist(); });