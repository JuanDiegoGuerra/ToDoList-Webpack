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
  
  export const deletemylist = (index) => {
    let list = JSON.parse(localStorage.getItem('myList'));
    if (list === null) {
      list = [];
    }
    const remove = list.findIndex((task) => task.index === index);
    list.splice(remove, 1);
    for (let i = index - 1; i < list.length; i += 1) {
      list[i].index = i + 1;
    }
    localStorage.setItem('myList', JSON.stringify(list));
  };