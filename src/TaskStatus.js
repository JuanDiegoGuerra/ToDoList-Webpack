import { mylist, getmylist, updateUI } from './functionality.js';

const changeTodoStatus = ({ index, status }) => {
  mylist[index - 1].completed = status;
  localStorage.setItem('mylist', JSON.stringify(mylist));
  getmylist();
};
const removeCompletedTodos = () => {
  const uncompletedTodos = mylist.filter((element) => element.completed !== true);
  const newTodos = uncompletedTodos.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  localStorage.setItem('mylist', JSON.stringify(newTodos));
  updateUI(newTodos);
};

const clearTodos = () => {
  const AllTodos = mylist.filter((element) => element.completed === true);
  const newTodos = AllTodos;
  localStorage.setItem('mylist', JSON.stringify(newTodos));
  updateUI(newTodos);
};

const DeleteUncompleted = () => {
  const retVal = confirm('Do you want to delete uncompleted tasks?');
  if (retVal === true) {
    clearTodos();
  } else {
  }
};

const DeleteCompleted = () => {
  const retVal = confirm('Are you sure you want to delete them?');
  if (retVal === true) {
    removeCompletedTodos();
  } else {
  }
};

export {
  changeTodoStatus, removeCompletedTodos, clearTodos, DeleteUncompleted, DeleteCompleted,
};