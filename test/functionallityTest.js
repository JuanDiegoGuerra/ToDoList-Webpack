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

export const completedmylist = (id) => {
  let list = JSON.parse(localStorage.getItem('myList'));
  if (list === null) {
    list = [];
  }
  const toggle = list.findIndex((task) => task.id === id);
  if (!list[toggle].completed) {
    list[toggle].completed = true;
  } else {
    list[toggle].completed = false;
  }
  localStorage.setItem('myList', (list));
};

export const clearcompletedmylist = () => {
  const list = JSON.parse(localStorage.getItem('myList'));
  const newList = list.filter((task) => task.completed === false);
  for (let i = 0; i < newList.length; i += 1) {
    newList[i].id = i + 1;
  }
  localStorage.setItem('myList', newList);
};

export const editmylist = (id) => {
  const list = JSON.parse(localStorage.getItem('myList'));
  const textArea = document.getElementById(`text-area-${id}`);

  const edit = list.findIndex((task) => task.id === id);

  textArea.addEventListener('change', () => {
    list[edit].desc = textArea.value;
    textArea.innerText = list[edit].desc;
    localStorage.setItem('myList', JSON.stringify(list));
  });
  textArea.addEventListener('blur', () => {
    localStorage.setItem('myList', JSON.stringify(list));
    setTimeout(() => {
      textArea.parentElement.classList.remove('on-change');
    }, 200);
  });
  textArea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      localStorage.setItem('myList', JSON.stringify(list));
      textArea.innerText = list[edit].desc;
      textArea.blur();
    }
  });
};
