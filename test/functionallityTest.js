export const addmylist = (description) => {
    let list = localStorage.getItem('myList');
    if (list === null) {
      list = [];
    }
    const newTask = {
      index: list.length + 1,
      description,
      completed: false,
    };
    list.push(newTask);
    localStorage.setItem('myList', list);
  };